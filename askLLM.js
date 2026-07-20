window.askLLM = async function (
    prompt,
    options = {}
) {

    const cfg = window.LLM_CONFIG;

    const settings = {
        ...cfg.defaults,
        ...options
    };

    const systemPrompt = `
You are an API.

Respond with ONLY the answer requested.

Do not include:
- introductions
- explanations unless explicitly requested
- markdown fences
- apologies
- warnings
- notes
- "Certainly"
- "Here is..."
- any conversational text

Return only the requested output.
`.trim();

    let lastError;

    for (const model of cfg.models) {

        try {

            const response = await fetch(cfg.endpoint, {

                method: "POST",

                headers: {
                    Authorization: `Bearer ${cfg.apiKey}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model,

                    messages: [

                        {
                            role: "system",
                            content: systemPrompt
                        },

                        {
                            role: "user",
                            content: prompt
                        }

                    ],

                    ...settings

                })

            });

            if (!response.ok)
                throw new Error(await response.text());

            const json = await response.json();

            if (!json.choices?.length)
                throw new Error("No response");

            return json.choices[0].message.content.trim();

        }

        catch (e) {

            console.warn(model, "failed");

            lastError = e;

        }

    }

    throw lastError;

}
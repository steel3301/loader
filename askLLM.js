window.askLLM = async function(prompt) {

    const cfg = window.LLM_CONFIG;

    const system =
`You are an API.
Return only the requested output.
No introductions.
No markdown.
No explanations unless explicitly asked.`;

    for (const model of cfg.models) {

        try {

            const r = await fetch(cfg.endpoint, {

                method: "POST",

                headers: {
                    Authorization: `Bearer ${cfg.apiKey}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    model,

                    messages: [
                        { role: "system", content: system },
                        { role: "user", content: prompt }
                    ],

                    temperature: 0.2,
                    max_tokens: 1024

                })

            });

            if (!r.ok) continue;

            const j = await r.json();

            return j.choices[0].message.content.trim();

        } catch {}

    }

    throw new Error("All models failed.");

};
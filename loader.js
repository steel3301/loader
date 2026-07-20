window.llm = async (last5 = "", prompt) => {

    const base = "https://raw.githubusercontent.com/steel3301/loader/main/";

    eval(await (await fetch(base + "config.js?t=" + Date.now())).text());

    eval(await (await fetch(base + "askLLM.js?t=" + Date.now())).text());

    if (last5)
        window.LLM_CONFIG.apiKey += last5;

    return await askLLM(prompt);
};
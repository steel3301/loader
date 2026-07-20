window.llm = async (last5 = "", prompt) => {

    const base = "https://raw.githubusercontent.com/steel3301/loader/main/?t=" + Date.now();

    const configText = await (await fetch(base + "/config.js")).text();
    eval(configText);

    console.log("CONFIG:", window.LLM_CONFIG);

    const askText = await (await fetch(base + "/askLLM.js")).text();
    eval(askText);

    console.log("ASK:", typeof askLLM);

    if (last5)
        window.LLM_CONFIG.apiKey += last5;

    return await askLLM(prompt);
};
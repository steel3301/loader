window.llm = async function(last5, prompt) {

    const base = "https://raw.githubusercontent.com/<user>/<repo>/main/";

    eval(await (await fetch(base + "config.js")).text());

    eval(await (await fetch(base + "askLLM.js")).text());

    window.LLM_CONFIG.apiKey += last5;

    return await askLLM(prompt);

};
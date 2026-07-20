(async () => {

    const base =
        "https://raw.githubusercontent.com/<username>/<repo>/main/";

    const config = await fetch(base + "config.js").then(r => r.text());
    const ask = await fetch(base + "askLLM.js").then(r => r.text());

    localStorage.setItem("config.js", config);
    localStorage.setItem("askLLM.js", ask);

    eval(config);
    eval(ask);

    console.log("LLM Loaded");

})();
window.LLM_CONFIG = {
    apiKey: "sk-or-v1-9bd748f7fe914e16295dde9e983f7022bf517d477132d361331a6e4894c", 
     models: [
        "tencent/hy3:free",
        "nvidia/nemotron-3-ultra-550b-a55b:free",
        "nvidia/nemotron-3-super-120b-a12b:free"
    ],

    endpoint: "https://openrouter.ai/api/v1/chat/completions",

    defaults: {
        temperature: 0.2,
        top_p: 1,
        max_tokens: 1024
    }
 
};
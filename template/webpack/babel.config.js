module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            {
                targets: {
                    ie: "10",
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                },
                modules: false
            },
        ],
        "@babel/react"
    ];
    const plugins = [];

    return {
        presets,
        plugins
    };
};
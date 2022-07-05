(() => {
    goog.provide('Mixly.LayerExtend');
    goog.require('Mixly.Env');

    const { Env, LayerExtend } = Mixly;

    LayerExtend.SHADE = {
        "dark": [
            [0.1, 'rgb(46 64 86)'],
            [0.1, 'rgb(46 64 86)', '48px']
        ],
        "light": [
            [0.1, '#009688'],
            [0.1, '#009688', '48px']
        ]
    };

    LayerExtend.shade = LayerExtend.SHADE['light'][0];
    LayerExtend.shadeWithHeight = LayerExtend.SHADE['light'][1];

    LayerExtend.updateShade = () => {
        let theme = ['light', 'dark'];
        if (!theme.includes(Env.theme))
            Env.theme = 'light';
        LayerExtend.shade = LayerExtend.SHADE[Env.theme][0];
        LayerExtend.shadeWithHeight = LayerExtend.SHADE[Env.theme][1];
    }
})()
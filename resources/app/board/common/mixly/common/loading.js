(() => {
    goog.require('Mixly.Env');
    goog.provide('Mixly.Loading');

    const { Env, Loading } = Mixly;
    Loading.LIGHT_CSS = `
    .loading {
        position: absolute;
        z-index: 100000;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .loading .left-div {
        position: absolute;
        left: 0px;
        top: 48px;
        bottom: 0px;
        width: 160px;
        background-color: #ddd;
        border-radius: 2px;
        opacity: 0.9;
    }

    .loading .top-div {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 48px;
        background-color: #009688;
        border-radius: 2px;
        opacity: 0.9;
    }`;

    Loading.DARK_CSS = `
    .loading {
        position: absolute;
        z-index: 100000;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #181818;
    }

    .loading .left-div {
        position: absolute;
        left: 0px;
        top: 48px;
        bottom: 0px;
        width: 160px;
        background-color: #333333;
        border-radius: 2px;
        opacity: 0.9;
    }

    .loading .top-div {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 48px;
        background-color: #2F4056;
        border-radius: 2px;
        opacity: 0.9;
    }`;

    let loadingStyle = $('<style type="text/css"></style>').text(
        Env.theme === "dark" ? Loading.DARK_CSS : Loading.LIGHT_CSS
    );
    $('head').append(loadingStyle);
    $('html').append(
        `<div class="loading" id="loading">
            <div class="left-div">
            </div>
            <div class="top-div">
            </div>
        </div>`
    );
})();
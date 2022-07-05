(() => {
    const Loading = {};
    Loading.COMMON_CSS = `
    .loader{
        --size: 32px;
        --duration: 800ms;
        width: 96px;
        height: 64px;
        margin: 50px auto;
        transform-style: preserve-3d;
        transform-origin: 50% 50%;
        transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
        position: absolute;
        top: 40%;
        left: 45%;
    }
    .loader .box{
        width:  32px;
        height: 32px;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 0;
    }
    .loader .box:nth-child(1){
        transform: translate(100%, 0);
        animation: box1 800ms linear infinite;
    }
    .loader .box:nth-child(2){
        transform: translate(0, 100%);
        animation: box2 800ms linear infinite;
    }
    .loader .box:nth-child(3){
        transform: translate(100%, 100%);
        animation: box3 800ms linear infinite;
    }
    .loader .box:nth-child(4){
        transform: translate(200%, 0);
        animation: box4 800ms linear infinite;
    }
    .loader .box > div{
        --translateZ: calc(var(--size) / 2);
        --rotateY: 0deg;
        --rotateX: 0deg;
        background: #5c8df6;
        width: 100%;
        height: 100%;
        transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
        position: absolute;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
    }
    .loader .box > div:nth-child(1){
        top: 0;
        left: 0;
    }
    .loader .box > div:nth-child(2){
        background: #145af2;
        right: 0;
        --rotateY: 90deg;
    }
    .loader .box > div:nth-child(3){
        background: #447cf5;
        --rotateX: -90deg;
    }
    .loader .box > div:nth-child(4){
        background: #dbe3f4;
        top: 0;
        left: 0;
        --translateZ: calc(var(--size) * 3 * -1);
    }
    @keyframes box1{
        0%, 50%{ transform: translate(100%, 0); }
        100%{ transform: translate(200%, 0); }
    }
    @keyframes box2{
        0%{ transform: translate(0, 100%); }
        50%{ transform: translate(0, 0); }
        100%{ transform: translate(100%, 0); }
    }
    @keyframes box3{
        0%, 50%{ transform: translate(100%, 100%); }
        100%{ transform: translate(0, 100%); }
    }
    @keyframes box4{
        0%{ transform: translate(200%, 0); }
        50%{ transform: translate(200%, 100%); }
        100%{ transform: translate(100%, 100%); }
    }`;

    Loading.LIGHT_CSS = `
    .loading {
        position: absolute;
        z-index: 100000;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: #f9f2f2;
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
    }`;

    let loadingStyle = document.createElement('style');
    loadingStyle.type = 'text/css';
    let nowWindow = require('@electron/remote').getCurrentWindow();
    if ('localStorage' in window && window['localStorage'] != null && window.localStorage["Theme"]) {
        let winTheme = window.localStorage["Theme"];
        if (winTheme === "Dark") {
            nowWindow.setBackgroundColor("#181818");
            Loading.theme = 'dark';
        } else if (winTheme === "Light") {
            nowWindow.setBackgroundColor("#fff");
            Loading.theme = 'light';
        }
    }
    if (Loading.theme === "dark")
        loadingStyle.innerHTML = Loading.COMMON_CSS + Loading.DARK_CSS;
    else
        loadingStyle.innerHTML = Loading.COMMON_CSS + Loading.LIGHT_CSS;
    document.getElementsByTagName('head').item(0).appendChild(loadingStyle);
})()
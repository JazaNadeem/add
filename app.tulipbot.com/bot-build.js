var BASE_URL = base_url(document.getElementById("FBLjW2EuA2SvucFcfPgp").src);

function createBPMeta() {
    let t = document.createElement("meta");
    t.name = "viewport", t.content = "width=device-width, initial-scale=1", document.head.appendChild(t)
}

function createBPStyles() {
    let t = document.createElement("style");

    t.appendChild(
            document.createTextNode(
                '.TulipBot-chat *{box-sizing:content-box!important;-webkit-box-sizing:content-box!important;font-family:Brandon Grotesque Light,sans-serif!important}@media screen and (max-width:550px){#TulipBot-messenger{width:100%!important;height:100%!important;bottom:0!important;right:0!important;left:0!important;border-radius:0!important;margin:0!important}}#TulipBot-messenger{background:#fff;z-index:2147483647;width:360px;height:500px;position:fixed;bottom:20px;right:20px;border:none;border-radius:10px;box-shadow:0 0 3px 1px hsla(0,0%,57.3%,.3);left:auto;display:none;visibility:visible;transition:height 1s,width 1s,visibility 1s,opacity .5s linear;-webkit-transition:height 1s,width 1s,visibility 1s,opacity .5s linear;opacity:0}iframe.left{left:20px!important}.center{left:0!important;right:0!important;margin:auto!important}@font-face{font-family:Brandon Grotesque Light;src:url(' + BASE_URL + '/chatbot/assets/fonts/brandon-grotesque-light-58a8a4b38001d.woff)}#tulipbot-launcher-12{position:fixed;z-index:2147483647;bottom:20px;right:20px;cursor:pointer;hidden;-webkit-transition:visibility .7s,opacity .5s linear;transition:visibility .7s,opacity .5s linear;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.tulipbot-launcher-text-12{font-weight:600;color:#000;position:relative;margin-bottom:2px;max-width:230px;background:#fff;padding:13px;vertical-align:bottom;cursor:pointer;border-radius:20px 20px 3px 20px;margin-right:8px;margin-top:0;font-size:16px;word-spacing:2px;font-family:Brandon Grotesque Light,sans-serif}.tulipbot-launcher-text-12,span.tulipbot-launcher-image-12{box-shadow:0 0 3px 1px hsla(0,0%,57.3%,.3);overflow:hidden;display:inline-block}span.tulipbot-launcher-image-12{vertical-align:middle;border-radius:50%;height:44px;width:44px;padding:8px}span.tulipbot-launcher-image-12 img{width:100%;height:100%;border-radius:50%}.tulipbot-launcher-text-12:after{display:block;position:absolute;content:"";width:10px;height:10px;right:-10px;bottom:10px;background-color:inherit;-webkit-transform:translateX(-6px) rotate(45deg);transform:translateX(-6px) rotate(45deg);pointer-events:none;box-shadow:2px -2px 4px 0 rgba(0,0,0,.2)}.tulipbot-right{right:20px;left:auto}.tulipbot-left{right:auto;left:20px}.tulipbot-center{right:20px!important;top:auto!important;bottom:50%!important}@media screen and (max-width:550px){.tulipbot-launcher-text-12{max-width:215px;padding:12px;font-size:16px}span.tulipbot-launcher-image-12{height:44px;width:44px}}@media screen and (max-width:350px){.tulipbot-launcher-text-12{max-width:185px;padding:12px;font-size:16px}span.tulipbot-launcher-image-12{height:44px;width:44px}}@media screen and (max-width:300px){.tulipbot-launcher-text-12{max-width:160px;padding:12px;font-size:16px}span.tulipbot-launcher-image-12{height:44px;width:44px}}'
            )
        ),
        document.head.appendChild(t);
}

function insertBPScript() {
    let t = document.createElement("script");
    t.src = BASE_URL + "/chatbot/window-script/runtime-start001.js", document.body.appendChild(t);
    let e = document.createElement("script");
    e.src = BASE_URL + "/chatbot/window-script/iframe.chunk.js", document.body.appendChild(e);
    let i = document.createElement("script");
    i.src = BASE_URL + "/chatbot/window-script/main.js", document.body.appendChild(i)
}
(() => {
    if (document.querySelector("tulipbot-root"))
        throw new Error("The bot element already exist, please remove existing script to continue");
    let t = document.getElementById("FBLjW2EuA2SvucFcfPgp").src;
    let BASE_URL = base_url(t);
    if (t = new URL(String(t)), t = t.searchParams.get("apiKey"), !t)
        throw new Error("Invalid Script");

    localStorage.setItem("FBLjW2EuA2SvucFcfPgp", encodeURIComponent(String(t))), createBPStyles(), createBPMeta();
    let e = document.createElement("tulipbot-root");
    document.body.appendChild(e), insertBPScript()
})();

function base_url(t) {
    var pathArray = t.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = protocol + '//' + host;
    if (host == 'localhost') {
        var url = url + '/' + pathArray[3];
    } else {
        var url = url;
    }
    return url;
}
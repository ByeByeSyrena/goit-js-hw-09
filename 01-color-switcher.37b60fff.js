const t={btnStart:document.querySelector("button[data-start]"),btnClose:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.btnStart.setAttribute("enabled",!0),t.btnStart.addEventListener("click",(function(n){e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3),t.btnStart.removeAttribute("enabled"),t.btnStart.setAttribute("disabled",!0)})),t.btnClose.addEventListener("click",(function(n){clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStart.setAttribute("enabled",!0)}));
//# sourceMappingURL=01-color-switcher.37b60fff.js.map
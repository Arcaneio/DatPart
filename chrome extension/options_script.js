"use strict";
document.documentElement.className=document.documentElement.className.replace("no-js","js");
window.scrollTo(0, 1);

window.onload = function(){
document.getElementById("version-notice").textContent="This is version "+chrome.runtime.getManifest().version+" of DatPart.";
}
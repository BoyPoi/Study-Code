var myRequest = new XMLHttpRequest();

myRequest.addEventListener("loadstart", onLoadStart, false);
myRequest.addEventListener("progress", onProgress, false);
myRequest.addEventListener("load", onLoad, false);
myRequest.addEventListener("error", onError, false);
myRequest.addEventListener("abort", onAbort, false);

myRequest.open('GET', './fileOnServer');

function onLoadStart(evt) {
    console.log('starting the request');
}

function onProgress(evt) {
    var currentPercent = (evt.loaded / evt.total) * 100;//loaded和total属性计算出文件已下载的百分比,该事件对象只能绑定在new XMLHttpRequest()对象才有该属性
    console.log(currentPercent);
}

function onLoad(evt) {
    console.log('transfer is complete');
}

function onError(evt) {
    console.log('error during transfer');
}

function onAbort(evt) {
    console.log('the user aborted the transfer');
}
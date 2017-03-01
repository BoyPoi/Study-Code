/**
 * Created by Administrator on 2017/2/5.
 */
/*使用该插件预览图片 选择文件的按钮在IE下不能是隐藏的 你可以换种方式隐藏 比如:top left 负几千像素*/
function PreviewImage(fileObj, imgPreviewId, divPreviewId) {
    var allowExtention,
        extention,
        browserVersion,
        reader,
        newPreview,
        tempDivPreview,
        firefoxVersion;
    allowExtention = ".jpg .png .gif .bmp";
    extention = fileObj.value.substring(fileObj.value.lastIndexOf('.').toLowerCase());
    browserVersion = window.navigator.userAgent.toUpperCase();
    if (allowExtention.indexOf(extention) > -1) {
        if (fileObj.files) { //html5 实现预览，兼容chorme,火狐7+
            if (window.FileReader) {
                reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById(imgPreviewId).setAttribute("src", e.target.result);
                }
                reader.readAsDataURL(fileObj.files[0]);
            } else if (browserVersion.indexOf("SAFARI") > -1) {
                alert("不支持Safari6.0以下浏览器的图片预览！");
            }
        } else if (browserVersion.indexOf("MSIE") > -1) {
            if (browserVersion.indexOf("MSIE 6") > -1) { //ie6
                document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
            } else { //ie 7-9
                fileObj.select();
                if (browserVersion.indexOf("MSIE 9") > -1) {
                    fileObj.blur(); //不加上document.selection.createRange().text，因为在ie9会拒绝访问
                }
                newPreview = document.getElementById(divPreviewId + 'NEW');
                if (newPreview === null) {
                    newPreview = document.createElement('div');
                    newPreview.setAttribute('id', divPreviewId + 'NEW');
                    newPreview.style.width = document.getElementById(imgPreviewId).width + "px";
                    newPreview.style.height = document.getElementById(imgPreviewId).height + "px";
                    newPreview.style.border = "1px solid #d2e2e2";
                }
                newPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader        (sizingMethod='scale',src='" + document.selection.createRange().text + "')";
                tempDivPreview = document.getElementById(divPreviewId);
                tempDivPreview.parentNode.insertBefore(newPreview, tempDivPreview);
                tempDivPreview.style.display = "none";
            }
        } else if (browserVersion.indexOf('FIREFOX') > -1) { //firefox
            firefoxVersion = parseFloat(browserVersion.toLowerCase().match(/firefox\/([\d.]+)/)[1]);
            if (firefoxVersion < 7) { //火狐7以下
                document.getElementById(imgPreviewId).setAttribute("src", fileObj.files[0].getAsDataURl());
            } else {
                document.getElementById(imgPreviewId).setAttribute("src", window.URL.createObjectURL(fileObj.files[0]));
            }
        } else {
            document.getElementById(imgPreviewId).setAttribute("src", fileObj.value);
        }
    } else {
        alert("仅允许上传" + allowExtention + "格式的文件！");
        fileObj.value = ""; //清空选中文件
        if (browserVersion.indexOf("MSIE") > -1) {
            fileObj.select();
            document.selection.clear();
        }
        fileObj.outerHTML = fileObj.outerHTML;
    }
}
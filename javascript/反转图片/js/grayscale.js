/**
 * Created by Administrator on 2016/7/31 0031.
 */
function convertToGS(img){
    img.color=img.src;
    img.grayscale=createGSCanvas(img);
    img.onmouseover=function () {
        this.src=this.color;
    }
    img.onmouseout= function () {
        this.src=this.grayscale;
    }
    img.onmouseout();
}
function createGSCanvas(img){
    var canvas=document.createElement("canvas");
    canvas.width=img.width;
    canvas.height=img.height;
    var ctx=canvas.getContext("2d");
    ctx.drawImage(img,0,0);
    var c=ctx.getImageData(0,0,img.width,img.height);
    for(i=0;i<img.height;i++){
        for(j=0;j<img.width;j++){
            var x=(i*4)* c.width+(j*4);
            var r= c.data[x];
            var g= c.data[x+1];
            var b= c.data[x+2];
            c.data[x]= c.data[x+1]= c.data[x+2]=(r+g+b)/3;
        }
    }
    ctx.putImageData(c,0,0,0,0,img.width,img.height);
    return canvas.toDataURL();
}
window.onload= function () {
    convertToGS(document.getElementById("avatar"));
}

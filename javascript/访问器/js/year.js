/**
 * Created by Administrator on 2016/8/10 0010.
 */
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
};
function SubType(){
    this.subproperty=false;
}
SubType.prototype.getSubValue=function(){
    return this.subproperty;
};
SubType.prototype.getSuperValue=function(){
    return false;
};
SubType.prototype=new SuperType();
var instance=new SubType();
alert(instance.getSuperValue());
/**
 * Created by Administrator on 2016/8/11 0011.
 */
function Person(){
}
var friend=new Person();
Person.prototype={
    constructor:Person,
    name:"hujinwei",
    age:29,
    job:"Software Engineer",
    sayName:function(){
        alert(this.name);
    }
};
friend.sayName();
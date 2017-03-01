// javascript数据类型：原始类型和对象类型。
// 原始类型：数字、字符串和布尔值。
// 对象类型：数组和对象。
// 原始值：undefined和null。
// 对象：属性的集合。
// 每个属性都由名/值对构成（只可以是原始值，也可以是对象）。
// 特殊对象--------全局对象，函数对象。
// 数组：带编号的值的有序集合。
// function factorial(x) {
//     if (x < 0) throw new Error('x不能是负数');
//     for (var f = 1; x > 1; f *= x, x--);
//     return f;
// }
// try {
//     var n = Number(prompt("请输入一个正整数", ""));
//     var f = factorial(n);
//     alert(n + "!=" + f);
// } catch (ex) {
//     alert(ex);
// }
// function inherit(p) {
//     if (p == null) throw TyperError();
//     if (Object.create)
//         return Object.create(p);
//     var t = typeof p;
//     if (t !== "object" && t !== "function")
//         throw TyperError();
//     function f() {};
//     f.prototype = p;
//     return new f();
// }
// var p = {
//     x: 1.0,
//     y: 1.0,
//     get r() {
//         return Math.sqrt(this.x * this.x + this.y * this * y);
//     },
//     set r(newvalue) {
//         var oldvalue = Math.sqrt(this.x * this.x + this.y * this . y);
//         var ratio = newvalue / oldvalue;
//         this.x *= ratio;
//         this.y *= ratio;
//     },
//     get theta() {
//         return Math.atna2(this.y, this.x);
//     }
// }
// console.log(p.r);
// console.log(p.theta);
// var objects = [{
//     x: 1,
//     a: 1
// }, {
//     y: 2,
//     a: 2
// }, {
//     z: 3,
//     a: 3
// }];
// var leftunion = objects.reduce(union);
// var rightunion = objects.reduceRight(union);

// function union(o, p) {
//     return extend(extend({}, o), p);
// }


// function extend(o, p) {                                                                                                                 
//     for (prop in p) {                                                                                                                   
//         o[prop] = p[prop];                                                                                                              
//     }                                                                                                                                   
//     return o;                                                                                                                           
// }                                                                                                                                       
// console.log(leftunion);                                                                                                                 
// console.log(rightunion);                                                                                                                
// a = [0, 1, 2, 1, 0]                                                                                                                     
// a.indexOf(1);                                                                                                                           
// a.lastIndexOf(1);                                                                                                                       
// function isArrayLike(o) {                                                                                                               
//     if (o && typeof o == "object" && isFinite(o.length) && o.length >= 0 && o.length === Math.floor(o.length) && o.length < 4294967296) //
//     // if (typeof o == "object")                                                                                                        
//         return true;                                                                                                                    
//     else                                                                                                                                
//         return false;                                                                                                                   
// }                                                                                                                                      
// console.log(isArrayLike({                                                                                                               
//     ....."0": "a",                                                                                                                    
//     "1": "b",                                                                                                                           
//     "2": "c",                                                                                                                           
//     length: 3                                                                                                                           
// }));                                                                                                                                  
// var f = function fact(x) {
//     if (x <= 1) return 1;
//     else return x * fact(x - 1);
// };
// console.log(f(4));
// var a = 5;
// var b = a.toString();
// console.log(typeof b);
// console.log(typeof a);
// 数组是一种特殊对象    Array.prototype
// 类数组(对象){"1":"p"......,length:5} .join()   object.prototype
// 
// 
// function f(x) {
//     console.log(x);
//     arguments[0] = null;
//     console.log(x);
// }
// f(2);
// 
// 

// fnc.counter = 0;

// function fnc() {
//     return fnc.counter++;
// }

// function fun(n) {
//     if (isFinite(n) && n > 0 && n == Math.round(n)) {
//         if (!(n in fun)) {
//             fun[n] = n * fun(n - 1);
//             return fun[n];
//         }
//     } else return NaN;
// }
// fun[1] = 1;
// fnc();
// fun(fnc.counter);
// console.log(fun.n);


// var scope = "global scope";

// function checkscope() {
//     var scope = "local scope";

//     function f() {
//         return scope;
//     }
//     return f();
// }
// console.log(checkscope());//local scope
// 
// 
// 
// var scope = "global scope";

// function checkscope() {
//     var scope = "local scope";

//     function f() {
//         return scope;
//     }
//     return f;
// }
// console.log(checkscope()());
// 
// 
// function addPrivateProperty(o, name, predicate) {
//     var value;
//     o["get" + name] = function() {
//         return value;
//     };
//     o["set" + name] = function(v) {
//         if (predicate && !predicate(v))
//             throw Error("set" + name + ": invalid value" + v);
//         else
//             value = v;
//     };
// }
// var o = {};
// addPrivateProperty(o, "Name", function(x) {
//     return typeof x == "string"
// });
// o.setName("Frank");
// console.log(o.getName());
// o.setName(0);
// console.log(o.getName());
// 
// 
// var sum = function(x, y) {
//     return x + y;
// };
// var succ = sum.bind(null, 1);
// console.log(succ(2));



//var sum = function(y, z) {
//    var z = this.x + y + z;
//};
//var succ = sum.bind({
//    x: 1
//}, 2);
//console.log(succ.length);


// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         alert(this.name);
//     }
// }
// var person1 = new Person("Tom", 18, "Engineer");
// var Persons = Person.bind(person1, "John", 20, "Doctor");
// var person2 = new Persons();
// console.log(person1);
// console.log(person2);


// var scope = "global";

// function constructFunction() {
//     var scope = "local";
//     return new Function("return scope");
// }
// console.log(constructFunction()());


//var map=Array.prototype.map?function(a,f){ return a.map(f)}
//    :function(a,f){
//    var results=[];
//    for(var i= 0,len= a.length;i<len;i++){
//        if(i in a) results[i]= f.call(null,a[i],i,a);
//    }
//    return results;
//};
//function mapper(f){
//    return function(a){
//        return map(a,f);
//    };
//}
//var increment = function(x){ return x+1;};
//var incrementer=mapper(increment);
//document.write(incrementer([1,2,3]));


/*不完全函数*/
//function array(a,n){
//    return Array.prototype.slice.call(a,n||0);
//}
////函数实参传递至右侧
//function partialRight(f /*,...*/){
//    var args = arguments;
//    return function(){
//        var a =array(arguments);
//        a= a.concat(array(args,1));
//        return f.apply(this,a);
//    };
//}
//函数实参传递至左侧
//function partialLeft(f /*,...*/){
//    var args = arguments;
//    return function(){
//        var a =array(args,1);
//        a= a.concat(array(arguments));
//        return f.apply(this,a);
//    };
//}
//
//
//function partial(f /*,...*/){
//    var args = arguments;
//    return function(){
//        var a = array(args,1);
//        var i = 0, j = 0;
//        for(; i < a.length; i++){
//            if(a[i] === undefined) a[i]=arguments[j++];
//        }
//        a = a.concat(array(arguments ,j))
//        return f.apply(this, a);
//    }
//}
//
//var f = function(x,y,z){
//    return x*(y-z);
//};
//console.log(partialLeft(f, 2)(3, 4));
//console.log(partialRight(f, 2)(3, 4));
//console.log(partial(f, undefined, 2)(3, 4));
//var cuberoot = partialRight(Math.pow,1/3);
//console.log(cuberoot);


//记忆
//function memorize(f){
//    var cache = {};
//    return function(){
//        var key = arguments.length+Array.prototype.join.call(arguments, ",");
//        if(key in cache){
//            return cache[key];
//        }else{
//            return cache[key] = f.apply(this, arguments);
//        }
//    };
//}
//function gcd(a,b){
//    var t;
//    if(a<b) t=b,b=a,a=t;
//    while(b!=0) t=b,b=a%b,a=t;
//    return a;
//}
//var gcdmemo=memorize(gcd);
//console.log(gcdmemo(85, 187));
//var factorial = memorize(function(n){
//    return  (n<=1)? 1 : n*factorial(n-1);
//})
//console.log(factorial(5));


// var book = {
// _year: 2004,
// edition: 1
// };
// Object.defineProperty(book, "year", {
// get: function(){
// return this._year;
// },
// set: function(newValue){
// if (newValue > 2004) {
// this._year = newValue;
// this.edition += newValue - 2004;
// }
// }
// });
// book.year = 2005;
// alert(book.edition);


function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = function(){
alert(this.name);
};
}

for(var key in Person.prototype){
	console.log(key);
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
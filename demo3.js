//nodejs内置不必安装
var util=require('util');

//函数1
function Pet(name,type){
    this.namename=name;
    this.typetype=type;
}

Pet.prototype.run=function () {
    //1  1 执行该打印  输出 runrunrun和后边的值
    console.log('run run run'+this.namename)
}

//函数2
function Dog(){

}

//DOG 继承PET的方法
util.inherits(Dog,Pet);

//2    1.1给pet传值
var p1=new Pet("旺财","狗狗");
//调用pet方法
// p1.run();

//3     1.2DOG 继承PET的方法
var d=new Dog("二哈","哈士奇");

// d.run();


//打印日期
// var datedate=new Date();
// console.log(datedate)


//4.打印DOG函数方法 DOG内没有方法  会输出未定义
// console.log(d.name)


//打印两个函数的形态
console.log(util.inspect(p1));
console.log(util.inspect(d));



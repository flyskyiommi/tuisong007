function pers(name,age) {
    
    //namennnn携带这里的方法，变量   name age调用函数
    this.namennnn=name;
    this.ageaaaa=age;
    
    this.tttt=function () {
        console.log(name+"今年"+age+"岁了");
        
    }
    
}

module.exports=pers;
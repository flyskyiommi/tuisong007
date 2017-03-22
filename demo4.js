//全局对象  给global顶级对象添加全局变量属性


//文件系统
//XMLHttpRequest   读取文档

//1.读取文档
var fs=require('fs');

console.time('fs');

//异步回调
fs.readFile('hello.txt',function (err,data) {

    if(err){
        console.error(err)
    }else{
        console.log(data.toString)
    }

})
console.timeEnd('fs');



//
// console.time('sync');
// var data=fs.readFile('hello.txt')
// console.timeEnd('sync')
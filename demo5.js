var fs=require('fs');


//写入
//1.
// var xuan={
//     name:'姓名',
//     age:'19'
// }
// xuan=JSON.toStringify(xuan);
// fs.writeFile("text.txt",'xuan',function (err) {
//     if(err){
//         console.log(err)
//     }
//
// })


//2.
fs.writeFile("text.txt",'helloxuan',function (err) {
    if(err){
        console.log(err)
    }

})


//同步写入文件
// fs.writeFileSync('text.txt','同步写入');

//先执行同步 后执行异步  后执行的会覆盖先执行的


// //删除文件
// fs.unlink("text.txt",function (err) {
//         if (err) {
//             console.log(err)
//         }
//     }
// )

//创建目录
fs.mkdir('list',function (err) {
    if (err) {
        console.log(err)
    }

})

// //删除
// fs.rmdir('list',function (err) {
//     if (err) {
//         console.log(err)
//     }
//
// })


//查看文件信息
// fs.stat('math.js',function (err,data) {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.stat('math.js',function (err,data) {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })




//读取目录
// fs.readdir('list',function (err,files) {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(files);
//
//
//         for(var i=0;i<files.length;i++){
//
//             console.log(files[i])
//         }
//
//
//
//     }
//
//
//
//
//
//
// })


//判断文件是否存在
// fs.exists('list',function (err,exist) {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('文件存在'+exist)
//     }
// })
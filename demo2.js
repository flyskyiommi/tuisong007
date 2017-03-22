function demo2() {
    //console.time('运行时长');   console.timeEnd("运行时长");两个里面的内容一样 作为输出内容
console.time('运行时长');
    
    for(var i=1;i<=10;i++){
        console.log("*")
    }
    console.timeEnd("运行时长");
}
exports.therethere=demo2;


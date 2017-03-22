// v=a+b;
// var a;
// var b;
// v=a+b;
//
// console.log(v);//NaN

//1.一竖星星

// for(var x=1;x<=5;x++){
//     //控制行数
//
//     // document.write("*"+"<br/>")
//
//
//     console.log("*")
//     for(var y=1;y<=x;y++){
//         //在一行打几个
//         // document.write(x==4&&y==4?"&":"*")
//         console.log("*")
//
//     }
//
// }



//2.repeat 三角星星
// for(var i=0;i<6;i++){
//     var str='*';
//     str=str.repeat(i);
//
//     console.log(str);
// }
//
// var s='hello';
// var s=s.repeat(3);
// console.log(s)


//3.依行递增
// for(var x=0;x<6;x++){
//     var str='*';
//     for(var y=0;y<x;y++){
//         //第一行加一个 第二行加两个  依次递增
//
//         str+='*';
//     }
//     console.log(str);
//
// }
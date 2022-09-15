    // 判斷運算式 && ||
// var billfull = 1200;
// var isvip = false;

// var andid = bullfill >= 1000 && isvip == true;
// console.log(andid);
// document.getElementById('andid').textContent=andid;
// var orid = bullfill >= 1000 || isvip == true;
// console.log(orid);
// document.getElementById('orid').textContent=orid;


    // IF運算式
// var hungry = '飽了';
// if (hungry == '飢餓') {
//     console.log('我現在好餓');
// }
// else{
//     console.log('我現在不餓');
// }


// else if 運算式

var hungry =5 ;
// 飢餓程度 1-10

function eat(food){
    console.log('我現在想吃'+food);

}

if(hungry<=3){
    eat('pizza');
}else if(hungry<=7 && hungry>3){
    eat('sara');
}else {
    console.log('我現在不想吃東西');
}
    // switch 用法

var light='bule';

 function lightfun(str){
    console.log('目前是'+str+'警戒');
}
switch(light){
    case'red':
    alert('紅色警戒');
    alert('快跑!');
    break;

    case'bule':
    lightfun(light);
    break;

    
    default:
    alert('沒有任何資料');
    break;
    }
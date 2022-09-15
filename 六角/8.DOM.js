                // queryselector 選擇



// var el = document.getElementById('titleid');

// var el = document.querySelector('.titleclass em');
// var el = document.querySelectorAll('.titleclass em');

// console.log(el);
// el[0].textContent='1234567';
// el[1].textContent='1234567';

// var emtotal=el.length;

// for(var i =0;i<emtotal;i++){
    // el[i].textContent=i+'1234567';
// }




            // setattribute 增加屬性標籤

var el =document.querySelector('.titleclass a');
// querySelector取得CLASS 或是 ID
// 將CSS樣式放到變數之中
el.setAttribute('href','https://tw.yahoo.com/')
//  setAttribute 將變數給予設定 給予HREF設定 加上網止


var el3 =document.querySelector('.titleclass a').getAttribute('href');
// getAttribute 取出裡面的值

console.log(el3);

el2=document.querySelector('.str');
el2.setAttribute('id','strid');
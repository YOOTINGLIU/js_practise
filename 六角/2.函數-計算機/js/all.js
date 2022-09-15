// document.getElementById('countId').onclick = function (){
//     var hamprice=50;
//     var cokeprice=20;

//     var hamnum = parseInt( document.getElementById('hamNumId').value)*hamprice;
//     var cokenum = parseInt( document.getElementById('cokeNumId').value)*cokeprice;


//     console.log(hamnum);
//     console.log(cokenum);
//     console.log(hamnum+cokenum);

//     document.getElementById('totalId').textContent= hamnum+ cokenum;
// }



// 計算漢堡數量

function gethamprice(num) {
    var hamprice = 50;
    var total = hamprice * num;
    return total;
}



console.log(gethamprice(6));
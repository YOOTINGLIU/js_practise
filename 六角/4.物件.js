var farm = [{
    farmer: '便當',
    chick:15,
    duck:3,
    dog:['張母是','龐德'],
    godinner :function(){
        console.log(farm.farmer+'回家吃晚餐');
    },
    poultrytotal:function(){
        var num = farm.chick +farm.duck;
        console.log('我農場總共有'+num+'家禽');
    },
},
{
    farmer: '幼婷',
    chick:15,
    duck:3,
    dog:['湯圓','芋園'],
    godinner :function(){
        console.log(farm.farmer+'回家吃晚餐');
    },
    poultrytotal:function(){
        var num = farm.chick +farm.duck;
        console.log('我農場總共有'+num+'家禽');
    },
}
];
console.log(farm[1].dog[0]);


// console.log(farm.godinner());

// // 物件用.來新增各種屬性
// farm.pig = 8;

// var home ={
//     room:3,
//     father:'tom',
//     sons:['join','bob'],
//     mom:'mary'
// }


// console.log(farm);
// console.log(farm.chick);
// console.log(farm.dog[0]);


var farms =[
    {
        framer:'卡斯柏',
    },
    {
        framer:'便當',
    }
];


console.log(farms[1].framer);
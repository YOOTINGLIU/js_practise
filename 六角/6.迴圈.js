// for 的寫法

// for (var i = 1; i < 10; i++) {
//     console.log(i + '*' + i + '=' + i * i);
// }

            // for array寫法



// var farm = [{
//     farmer: '便當',
//     chick: 15,
//     duck: 3,
//     dog: ['張母是', '龐德'],

// },
// {
//     farmer: '幼婷',
//     chick: 15,
//     duck: 3,
//     dog: ['湯圓', '芋園'],

// }
// ];
// var farmtotal = farm.length;
// for(var i=0; i<farmtotal;i++){
// console.log(farm[i].farmer);
// console.log('第'+(i+1)+'個農場主人是'+farm[i].farmer);
// }

        // for if 寫法


// var farm = [
//     {
//         farmer:'卡斯柏',
//         field:6,
//         chick:200,
//     },
//     {
//         farmer:'查理',
//         field:10,
//         chick:50,
//     },
//     {
//         farmer:'約翰',
//         field:6,
//         chick:120,
//     },
// ]
//             // 撈出農場100隻以上小雞
// var totalfarms = farm.length;
// for (i=0;i<totalfarms;i++){
//     console.log(farm[i].chick);
//     if (farm[i].chick>100){
//         console.log(farm[i].farmer+'的小雞超過100以上');
//     }
// }



            // for 加總


// var farm = [
//     {
//         farmer:'卡斯柏',
//         field:6,
//         chick:200,
//         banana:5000,
//     },
//     {
//         farmer:'查理',
//         field:10,
//         chick:50,
//         banana:1000,
//     },
//     {
//         farmer:'約翰',
//         field:6,
//         chick:120,
//         banana:3000,
//     },
// ]
// // 今年香蕉採收總數

// var farmtotal = farm.length;
// var totalbanana=0
// for(i=0; i<farmtotal;i++){
//     totalbanana+=(farm[i].banana);
    
// }

// console.log('今年的香蕉採收量'+totalbanana);


            // for 與break的運用



var farm = [
    {
        farmer:'卡斯柏',
        field:6,
        chick:100,
        banana:5000,
    },
    {
        farmer:'查理',
        field:10,
        chick:50,
        banana:1000,
    },
    {
        farmer:'約翰',
        field:6,
        chick:120,
        banana:3000,
    },
]
//我找個農場買50隻雞
var farmtotal = farm.length;
for(i=0; i<farmtotal;i++){
    if (farm[i].chick>100){
        console.log(farm[i].farmer+'小雞剛好夠');
        farm[i].chick-=50;
        console.log(farm[i].chick);
        break;
    } 
}
var farm = [
        {
            farmer:'卡斯柏',
            dogs:['捷克','波士'],
        },
        {
            farmer:'查理',
            dogs:['張母是','皮皮'],
        },
        {
            farmer:'約翰',
            dogs:['波波','糯米'],
        },
    ]

var el =document.querySelector('.list');
var farmlen=farm.length;
console.log(farmlen);
var str = '';

for(var i=0;i<farmlen;i++){
    var content = '<li>'+farm[i].farmer+'</li>';
    str+=content;
    
    console.log(content);
}

el.innerHTML = str;

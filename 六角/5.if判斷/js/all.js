

var myMonth = 5;
var thisMonth = 8;


var birthdaycheck = myMonth == thisMonth;
console.log(birthdaycheck);
document.getElementById('birthdayId').textContent = birthdaycheck;

var nowpeople = 1;
var toltalpeople = 2;
var allpeoplenoherecheck = nowpeople != toltalpeople;
console.log(allpeoplenoherecheck);
document.getElementById('peopleId').textContent = allpeoplenoherecheck;
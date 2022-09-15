// var el = document.getElementById('main');
// var str ='<h1 class="blue">123</h1>';
// console.log(str);

// // innerHTML 增加HTML標籤
// el.innerHTML=str+str;


var link='http://www.google.com';
var name ='便當'

var el=document.querySelector('.list');
el.innerHTML = '<li><a href="'+link+'">'+ name +'</a></li>';
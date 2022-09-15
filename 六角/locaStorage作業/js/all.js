// 指定 dom
var List = document.querySelector('.list');
var Send = document.querySelector('.send');
var Data = JSON.parse(localStorage.getItem('agencyData')) || [];

// 監聽與更新

Send.addEventListener('click', seadData);
List.addEventListener('click', deleteData);
listUP();
//加入列表，並同步更新網頁與 localstorage

function seadData(e) {
    var str = document.querySelector('.text').value;
    var text = {
        content: str,
    };
    Data.push(text);
    localStorage.setItem('agencyData', JSON.stringify(Data));
    document.querySelector('.text').value = '';
    listUP();
}

// 更新網頁內容
function listUP() {
    var str = '';
    var len = Data.length

    for (var i = 0; i < len; i++) {
        str += '<li data-num=' + i + '><a  class="' + "deletelist" + '" href="#' + '">刪除</a>' + Data[i].content + '</li>';
    }
    List.innerHTML = str;

};

// 刪除代辦事項


function deleteData(e) {
    var num = e.target.dataset.num;
    // console.log(num);
    if (e.target.nodeName !== "A") { return };
    Data.splice(num, 1);
    localStorage.setItem('agencyData', JSON.stringify(Data));


    listUP();
};
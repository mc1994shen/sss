// function Button () {
    
//     var x = Math.floor(Math.random()*9);
//     var y = Math.floor(Math.random()*9);
//     var z = Math.floor(Math.random()*9);
//     var abc = document.getElementsByClassName('main-grid')
//     for(var i = 0 ;i < abc.length; i++){
//         abc[i].style.backgroundColor = '#ff8c00';
//     }
//     abc[x].style.backgroundColor='red';
//     abc[y].style.backgroundColor='red';
//     abc[z].style.backgroundColor='red';
//     console.log(Math.random()*9)
// };
// 乱序/洗牌
function shuffle(a) {
    var length = a.length;
    var shuffled = new Array(length);
    for (var i = 0,rand; i < length; i++) {
        rand = Math.floor(Math.random() * ( i + 1 ));
        if (rand !== i) {
            shuffled[i] = shuffled[rand];
        }
        shuffled[rand] = a[i];
    }
    return shuffled;
}
// 随机颜色
function randomlyColor() {
    var red, blue, green;
    red = Math.floor(Math.random() * 256);
    do {
        green = Math.floor(Math.random() * 256);
    } while (green == red);
    do {
        blue = Math.floor(Math.random() * 256);
    } while (blue == red || blue == green);
    return ("rgb(" + red + "," + green + "," + blue + ")");
}
function changeColor() {
    var units = new Array();
    //初始化颜色
    var i;
    units = document.getElementsByClassName("grid");
    for (i = 0; i < units.length; i++) {
        units[i].style.backgroundColor = "rgb(255,140,0)";
    }
    //随机3盒子
    units = shuffle(document.getElementsByClassName("grid")).slice(0,3);
    //分配颜色
    for (i in units) {
        units[i].style.backgroundColor = randomlyColor();
    }
    units = document.getElementsByClassName("grid");
}
function Timer() {
    changeColor();
    t = setTimeout("Timer()",1000);
}
function start() {
    if (status == 0) {
        Timer();
        status = 1;
    } else {
        return;
    }
}
function end() {
    clearTimeout(t);
    status = 0;
    units = document.getElementsByClassName("grid");
    for (i = 0; i < units.length; i++) {
        units[i].style.backgroundColor = "rgb(255,140,0)";
    }
}
var status = 0;
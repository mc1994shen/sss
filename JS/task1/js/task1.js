
//洗牌
function Shuffle(a) {
    var length = a.length;
    for(var i = length - 1, rand;i >= 0; i--){
        rand = Math.floor(Math.random()*(i+1))
        var p = a[i];
        a[i] = a[rand];
        a[rand] = p ;  
    }
}
//设置从0到8的数组a
a = [0,1,2,3,4,5,6,7,8];
//页面加载运行函数，Shuffle（a）
Shuffle(a);
//随机抽取颜色
function randomlyColor(){
    var red,blue,green;
    red = Math.floor(Math.random() * 256);
    do {
        green = Math.floor(Math.random() * 256);
    } while (green == red);
    do {
        blue = Math.floor(Math.random() * 256);
    }while(blue == red || blue == green);
    return("rgb(" + red + "," + green + "," + blue + ")");
}
//重置颜色，并随机抽取三个数，赋予其颜色
function clear(){
    var units = document.getElementsByClassName("grid");
    for(var i = 0; i < units.length;i++){
        units[i].style.backgroundColor = "#ff8c00";
    }
    units[a.slice(0,3)[0]].style.backgroundColor = randomlyColor();
    units[a.slice(0,3)[1]].style.backgroundColor = randomlyColor();
    units[a.slice(0,3)[2]].style.backgroundColor = randomlyColor();
    console.log(a.slice(0,3)[0],a.slice(0,3)[1],a.slice(0,3)[2])
}
//设置定时运行函数Shuffle(a)和clear()
function Timer() {
    Shuffle(a);
    clear();
    t = setTimeout("Timer()",1000);
}
//开始闪
function start() {
    if (status == 0){
        Timer();
        status = 1;
    }else {
        return;
    }
}
//结束闪
function end() {
    clearTimeout(t);
    status = 0;
    units = document.getElementsByClassName("grid");
    for (i = 0;i < units.length;i++){
        units[i].style.backgroundColor = "#ff8c00";
    }
}

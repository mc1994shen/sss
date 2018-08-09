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
  //声明一个函数，名为shuffle，给它一个参数a，a为形式参数，
  //它的实际值为此函数调用了几次就为几
    var length = a.length;
  //设置一个变量，变量名为length，它的值为shuffle参数a的长度，即为a 的实际值的长度
    var shuffled = new Array(length);
  //设置一个变量数组名为shuffled，数组的容量为length，实际上容量值应该为a
    for (var i = 0,rand; i < length; i++) {
  //设置for循环，设置变量i=0，和一个空值rand，循环条件第一个为i=0；执行第一次
  //再判断i是否小于length即是否小于a，小于就再此执行，每执行一次循环最后都执行一次 i++
        rand = Math.floor(Math.random() * ( i + 1 ));
  //给刚刚设置的变量rand赋值，赋值的值为Math.random，此为0.0~1.0的数
  //但因为Math.floor，这句为向下取整，所以为0-1的数
  //后面还有个 * 即为数学的乘号，所以给rand赋值为（0~1）*（i+1）
  //意思就是第一次循环给rand赋值为（0~1）*（0+1）就是随机赋值为0~1之间的数，第二次就是0~2之间的数，直到退出循环
        if (rand !== i) {

            shuffled[i] = shuffled[rand];
        }
        shuffled[rand] = a[i];
    }

    return shuffled;
}
// function shuffle(a) {
    
//     var length = a.length;

//     for(var i = length - 1,rand; i >= 0;i--){
//         rand = Math.floor(Math.random() * (i+1));
//         var temp = a[i];
//         a[i] = a[rand];
//         a[rand] = temp;
//     }
// }

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
    console.log(units)
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
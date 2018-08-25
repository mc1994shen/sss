function Landbtn() {
    NameNumber = document.getElementById("nameNumber").value;
    KeyNumber = document.getElementById("keyNumber").value;
    let oAkjx = new XMLHttpRequest();
    console.log(NameNumber);
    oAkjx.open("POST", "/carrots-admin-ajax/a/login", true);
    oAkjx.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    oAkjx.send("name=" + NameNumber + "&pwd=" + KeyNumber);
    oAkjx.onreadystatechange = function () {
        if (NameNumber == "" || KeyNumber == "") {
            if (NameNumber == "") {
                document.getElementById("PromptText").innerHTML = "账号不能为空";
                console.log("1")
            } else {
                document.getElementById("PromptText").innerHTML = "密码不能为空";
            }
        } else {
            if (oAkjx.readyState === 4) {
                if (oAkjx.status === 200) {
                    console.log(oAkjx.responseText);
                    let Judge = JSON.parse(oAkjx.responseText)
                    if (Judge.code !== 0) {
                        document.getElementById("PromptText").innerHTML = Judge.message;
                    } else {
                        alert("登陆成功")
                        window.location.href = "http://wwww.baidu.com";
                    }
                } else {
                    console.log(oAkjx.statusText);
                }
            }
        }
    }
}
// $(".Landbutton").click(function () {
//     let NameNumber = $(".Landname").val();
//     let KeyNumber = $(".Landkey").val();
//     $.ajax({
//         type: 'POST',
//         url: '/carrots-admin-ajax/a/login',
//         data: { name: NameNumber, pwd: KeyNumber },
//         dataType: 'json',
//         success: function (data) {
//             if (NameNumber == "" || KeyNumber == "") {
//                 if (NameNumber == "") {
//                     $(".prompt").html("账号不能为空");
//                 } else {
//                     $(".prompt").html("密码不能为空");
//                 }
//             } else {
//                 if (data.code !== 0) {
//                     $(".prompt").html(data.message);
//                 } else {
//                     alert("登陆成功")
//                     window.location.href = "http://wwww.baidu.com";
//                 }
//             }
//         }
//     })
// })

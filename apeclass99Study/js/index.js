/**
 * Created by lupan on 2016/11/7.
 */

window.onload = function () {

    titleCrash();
};

// 页面加载后的标题移动碰撞 css3
function titleCrash() {
    var title = document.querySelector("#banner .text");
    title.style.width = "400px";
    title.style.opacity = 1;
    title.addEventListener("transitionend", function () {
        // 标题移动完毕后试页面震动
        var html = document.getElementsByTagName("html")[0];
        html.style.animation = "pageShake 0.3s";
    });
}
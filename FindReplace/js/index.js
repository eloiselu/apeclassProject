/**
 * Created by lupan on 2016/9/30.
 */

/*
 * 获取元素的样式
 * obj要获取样式的元素
 * name样式名称
 * */
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}

function findReplace() {
    // 展开按钮
    var show = document.getElementById("show");
    // 查找与替换按钮的外包裹span标签
    var span = document.querySelector("#buttons span");

    // 右侧查找与替换按钮
    var as = document.querySelectorAll("#buttons span a");
    // 下边查找与替换按钮
    var spans = document.querySelectorAll("#toolbox span");
    // 查找替换的主面板
    var toolbox = document.getElementById("toolbox");
    // 查找替换文本框
    var inputs = document.querySelectorAll("#toolbox input");

    // 获取关闭按钮
    var close = document.getElementById("close");

    // 获取被查找的文字
    var p = document.querySelector("p");
    var oldText = p.innerHTML;

    // 点击展开按钮显示 查找和替换
    show.onclick = function () {
        if (getStyle(span, "display") == 'none') {
            span.style.display = 'block';
        }
        else {
            span.style.display = 'none';
        }
    };

    // 点击右侧与下部查找按钮
    as[0].onclick = spans[0].onclick = function () {
        span.style.display = "none";
        toolbox.style.display = "block";
        toolbox.className = "search";
        inputs[0].value = inputs[2].value = inputs[3].value = "";
    };

    // 点击右侧与下部替换按钮
    as[1].onclick = spans[1].onclick = function () {
        span.style.display = "none";
        toolbox.style.display = "block";
        toolbox.className = "replace";
        inputs[0].value = inputs[2].value = inputs[3].value = "";
    };

    // 关闭按钮
    close.onclick = function () {
        toolbox.style.display = "none";
    };

    // 下边的文字查找按钮
    inputs[1].onclick = function () {
        var val = inputs[0].value;
        // 用户没有输入内容
        if (!val) {
            alert("请输入内容");
            return;
        }

        // 用户输入的内容没有找到 indexOf(要找的东西)
        if (oldText.indexOf(val) == -1) {
            alert("你输入的内容没找到");
            return;
        }

        // 将oldText插入到p中，覆盖之前已修改的文本
        p.innerHTML = oldText;
        // 根据输入的内容分割字符串
        var text = oldText.split(val);
        p.innerHTML = text.join('<span style="background:yellow;">' + val + '</span>');
        // 清空查询文本框内容
        inputs[0].value = '';
    };

    // 下边的文字替换按钮
    inputs[4].onclick = function () {
        var val1 = inputs[2].value;
        var val2 = inputs[3].value;
        // 被替换内容为空
        if (!val1) {
            alert("请输入要替换的内容");
            return;
        }
        // 被替换内容未找到
        if (p.innerHTML.indexOf(val1) == -1) {
            alert('你输入的内容没有找到');
            return;
        }
        // 替换内容为空
        if (!val2) {
            var result = confirm("你确定要删除内容么");

            // 判断用户取消了
            if (!result) {
                return;
            }
        }

        // 执行替换
        // 根据被替换内容分割字符串
        var text = p.innerHTML.split(val1);
        // 将分割的数组根据替换字符串进行拼接
        p.innerHTML = text.join(val2);

        // 清空替换内容
        inputs[2].value = inputs[3].value = "";
    };
}

findReplace();
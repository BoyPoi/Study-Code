/**
 * Created by Administrator on 2016/11/1.
 */


/**
 * 类名的替换，并返回一个新的类名
 * @param element
 * @param oldStr
 * @param newStr
 */
function repleaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    element.className = arr.join(" ");
}


/**
 * 获取对象内部文本
 * @param element
 * @returns {string}
 */
function getInnerText(element) {
    if (element.innerText == "string") {
        return element.innerText;
    }
    else {
        return element.textContent;
    }

}


/**
 * 设置对象内部文本
 * @param element
 * @param context
 */
function setInnerText(element, content) {
    if (element.innerText === "string") {
        element.innerText = content;
    }
    else {
        element.textContent = content;
    }
}


/**
 * nextElementSibling兼容性问题（ie678）解决方案
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nextSibling.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}


/**
 * previousElementSibling兼容性问题（ie678）解决方案
 * @param element
 * @returns {*}
 */
function getpreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;
        while (previous && previous.previousSibling.nodeType !== 1) {
            previous = previous.previousSibling;
        }
        return previous;
    }
}


/**
 * firstElementChild兼容性问题（ie678）解决方案
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;
        while (el && el.nodeType !== 1) {
            el = el.nextSibling;
        }
        return el;
    }
}


/**
 * 标签查找封装
 * @param str
 * @returns {*}
 */
function $(str) {
    var arr = [];
    if (str.indexOf("#") === 0) {
        for (var i = 1; i < str.length; i++) {
            arr.push(str[i]);
        }
        var idName = arr.join("");
        return document.getElementById(idName);
    } else if (str.indexOf(".") === 0) {
        for (var i = 1; i < str.length; i++) {
            arr.push(str[i]);
        }
        var className = arr.join("");
        console.log(className);
        return document.getElementsByClassName(className);
    } else {
        return document.getElementsByTagName(str);
    }
}


/**
 * 通过类名获取元素对象的兼容方法
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName(className)) {
        return element.getElementsByName(className);
    } else {
        var elements = element.getElementsByTagName('*');
        var fifterArr = [];
        for (var i = 0; i < elements.length; i++) {
            var arr = elements[i].className.split(" ");
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === className) {
                    fifterArr.push(elements[i]);
                    break;
                }
            }
        }
    }
    return fifterArr;
}
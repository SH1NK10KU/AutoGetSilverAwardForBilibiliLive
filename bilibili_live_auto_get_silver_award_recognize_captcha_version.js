/**
 *
 * 为了银瓜子偶也是拼了～
 * 银瓜子什么的都快到碗里来！
 *
 * 无公害自动获取并识别验证码；
 * 银瓜子领完自动停止发送请求。
 *
 * @author 記憶の中で未来の風
 * @version 0.0.9
 * @date 2018.3.8
 *
 * PS: Bilbili Live Room 4.0.0 (Build: 2018.03.06 - 15:29:44)
 * 
 */

var captchaData = "";
var captchaWidth = 0;
var captchaHeight = 0;
var number0 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var number1 = new Array(
    "1110000",
    "1100000",
    "1100000",
    "1100000",
    "1000000",
    "1000000",
    "1000000",
    "0000000",
    "0000000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000",
    "1100000");
var number2 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "1111111111100000",
    "1111111111000001",
    "1111111110000001",
    "1111111110000011",
    "1111111100000111",
    "1111111100000111",
    "1111111000001111",
    "1111110000011111",
    "1111110000011111",
    "1111100000111111",
    "1111100000111111",
    "1111000001111111",
    "1110000011111111",
    "1110000011111111",
    "1100000111111111",
    "1100001111111111",
    "1000001111111111",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000");
var number3 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "1111111111100000",
    "1111111111000001",
    "1111111100000011",
    "1111111000000111",
    "1111110000001111",
    "1111111000000111",
    "1111111100000011",
    "1111111110000001",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var number4 = new Array(
    "11111111000011111",
    "11111110000011111",
    "11111110000011111",
    "11111110000111111",
    "11111100000111111",
    "11111100000111111",
    "11111000001111111",
    "11111000001111111",
    "11111000001111111",
    "11110000011111111",
    "11110000011111111",
    "11110000011111111",
    "11100000110000011",
    "11100000110000011",
    "11100000110000011",
    "11000001110000011",
    "11000001110000011",
    "11000001110000011",
    "10000011110000011",
    "10000011110000011",
    "10000011110000011",
    "00000000000000000",
    "00000000000000000",
    "00000000000000000",
    "00000000000000000",
    "11111111110000011",
    "11111111110000011",
    "11111111110000011",
    "11111111110000011",
    "11111111110000011",
    "11111111110000011");
var number5 = new Array(
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var number6 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000011111111111",
    "0000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var number7 = new Array(
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100001",
    "0000011111100001",
    "0000011111000001",
    "0000011111000001",
    "1111111111000011",
    "1111111111000011",
    "1111111110000011",
    "1111111110000011",
    "1111111110000111",
    "1111111110000111",
    "1111111100000111",
    "1111111100000111",
    "1111111100000111",
    "1111111100001111",
    "1111111000001111",
    "1111111000001111",
    "1111111000001111",
    "1111111000011111",
    "1111110000011111",
    "1111110000011111",
    "1111110000011111",
    "1111110000111111",
    "1111100000111111",
    "1111100000111111",
    "1111100000111111",
    "1111000001111111",
    "1111000001111111");
var number8 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "1000001111000001",
    "1000000110000001",
    "1110000000000111",
    "1111000000001111",
    "1110000000000111",
    "1000000000000001",
    "1000001111000001",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var number9 = new Array(
    "1000000000000001",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "1111111111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000011111100000",
    "0000000000000000",
    "0000000000000000",
    "0000000000000000",
    "1000000000000001");
var plus = new Array(
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "00000000000000000",
    "00000000000000000",
    "00000000000000000",
    "00000000000000000",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111100000111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111",
    "11111111111111111");
var minus = new Array(
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "000000000",
    "000000000",
    "000000000",
    "000000000",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111",
    "111111111");
var captchaBinarySignature = new Array(number0, number1, number2, number3, number4, number5, number6, number7, number8, number9, plus, minus);

Array.prototype.contains = function(item){
    return RegExp(item).test(this);
};

function canGetFreeSilverAward() {
    var timer = document.querySelector(".count-down");
    if ("00:00" == timer.innerText) {
        return true;
    }
    return false;
}

function clickFreeSilverAwardBox() {
    var box = document.querySelector(".box-icon");
    if (box !== null) {
        box.click();
    }
}

function clickGetFreeSilverAwardBtn() {
    var getFreeSilverAwardBtn = document.querySelector(".bl-button");
    if (getFreeSilverAwardBtn !== null) {
        getFreeSilverAwardBtn.click();
    }
}

function clickRefreshCaptchaBtn() {
    var refreshCaptchaBtn = document.querySelector(".refresh-captcha");
    if (refreshCaptchaBtn !== null) {
        refreshCaptchaBtn.click();
    }
}

function clearPreviousCanvas() {
    var canvas = document.querySelectorAll("#canvas");
    for (var i = 0; i < canvas.length; i++) {
        var subCanvas = canvas[i];
        subCanvas.parentNode.removeChild(subCanvas);
    }
}

function createCanvas() {
    var parent = document.querySelector(".input-ctnr");
    if (parent !== null) {
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        canvas.style.display = "none";
        parent.appendChild(canvas);
        return canvas;
    }
    return false;
}

function getNewCaptchaImageData() {
    clearPreviousCanvas();
    if (createCanvas()) {
        var content = createCanvas().getContext('2d');     
        var time = new Date().getTime();    
        var img = new Image();
        var url = "http://api.live.bilibili.com/lottery/v1/SilverBox/getCaptcha?ts=" + time;
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.withCredentials = true;
        request.onload = function(e) { 
            if(this.status == 200 || this.status == 304) {
                img.src = JSON.parse(this.responseText).data.img;
                img.onload = function() {
                    captchaWidth = img.width;
                    captchaHeight = img.height;
                    content.drawImage(img, 0, 0, captchaWidth, captchaHeight);
                    captchaData = content.getImageData(0, 0, captchaWidth, captchaHeight).data;
                };
            }
        };
        request.send(null);
    }
}

function binarizeCaptchaImageAsString() {
    var captchaImgBinaryString = "";
    for (var rPixel = 0, length = captchaData.length; rPixel < length; rPixel += 4) {
           if ((captchaData[rPixel] + captchaData[rPixel+1] + captchaData[rPixel+2])/3 < 127) {
            captchaImgBinaryString += "0";
           } else {
            captchaImgBinaryString += "1";
        }
    }
    return captchaImgBinaryString;
}

function dilateBinaryCaptcha(captchaString) {
    var dilatedCaptcha = "";
    for (var index = captchaWidth + 1; index < captchaString.length - captchaWidth - 1; ) {
        if (index % captchaWidth === 0) {
            index += 2;
        } else {
            dilatedCaptcha += (captchaString[index-captchaWidth-1] + captchaString[index-captchaWidth] + captchaString[index-captchaWidth+1] + captchaString[index-1] + captchaString[index] + captchaString[index+1] + captchaString[index+captchaWidth-1] + captchaString[index+captchaWidth] + captchaString[index+captchaWidth+1]) > 1 ? 1:0;
            index++;
        }
    }
    return dilatedCaptcha;
}

function logBinaryCaptcha(binary) {
    var formalizedBinaryLog = "";
    for (var index = 0, length = binary.length; index < length; index++) {
        if (index % captchaWidth === 0) {
            formalizedBinaryLog += "\n";
        }
        formalizedBinaryLog += binary[index];
    }
    return formalizedBinaryLog;
}

function recognizeCaptcha(binary) {
    var captcha = "";
    for (var index = captchaWidth * 4; index < captchaWidth * 5 - 1; index++) {
        for (var indexOfCaptchaBinarySignature = captchaBinarySignature.length; indexOfCaptchaBinarySignature > 0; indexOfCaptchaBinarySignature--) {
            for (var line = 0; line < captchaBinarySignature[indexOfCaptchaBinarySignature-1].length; ) {
                if (binary.substr(index + captchaWidth * line, captchaBinarySignature[indexOfCaptchaBinarySignature-1][line].length) == captchaBinarySignature[indexOfCaptchaBinarySignature-1][line]) {
                    line++;
                    if (line == captchaBinarySignature[indexOfCaptchaBinarySignature-1].length) {
                        if ((indexOfCaptchaBinarySignature-1) == 11) {
                            captcha += " - ";
                        } else if ((indexOfCaptchaBinarySignature-1) == 10) {
                            captcha += " + ";
                        } else {
                            captcha += (indexOfCaptchaBinarySignature - 1) % 10;
                        }    
                    }
                } else {
                    break;
                }
            }
        }        
    }
    return captcha;
}

function calculateCaptcha(captcha) {
    var result = captcha.split(" ");
    if (result[0] === "") {
        result[0] = 0;
    }
    if (result[2] === "") {
        result[2] = 0;
    }
    if (result[1] == "+") {
        result[0] = Number(result[0]) + Number(result[2]);
    }
    if (result[1] == "-") {
        result[0] = Number(result[0]) - Number(result[2]);
    }
    return result[0];
}

function inputCaptcha(captcha) {
    var captchaInputTextField = document.querySelector(".link-input");
    captchaInputTextField.click();
    captchaInputTextField.value = captcha;
}

function noMoreSilverAward() {
    var status = document.querySelector(".status-text > div");
    if (status !== null) {
        var statusText = status.innerText;
        if (statusText.indexOf('今天已经木有宝箱惹') != -1) {
            return true;
        }
    }
    return false;
}

function getFreeSilverAward() {
    if (canGetFreeSilverAward()) {
        clickFreeSilverAwardBox();
        setTimeout(function () {
            getNewCaptchaImageData();
            var binary = binarizeCaptchaImageAsString();
            console.log(logBinaryCaptcha(binary));
            var recognized_captcha = recognizeCaptcha(binary);
            var result = calculateCaptcha(recognized_captcha);
            console.log("Captcha:"+recognized_captcha);
            console.log("Captcha Result:" + result);
            // inputCaptcha(result);
            // clickGetFreeSilverAwardBtn();
            var time = new Date().getTime();
            var url = "http://api.live.bilibili.com/FreeSilver/getAward?time_start="+(time)+"&end_time="+(time+Math.round(Math.random(1)*5000))+"&captcha=" + result;
            var request = new XMLHttpRequest();
            request.open("GET", url);
            request.withCredentials = true;
            request.onload = function(e) { 
                if(this.status == 200 || this.status == 304){
                    if (this.responseText.indexOf('"code":0') !== -1) {
                        window.location.reload(); // Reload the page in Chrome Extension to avoid the script expire. 
                    }
                }
            };
            request.send(null);
        }, 5000);
    }    
}

var timer;
function autoGetFreeSilverAward() {
    timer = window.setInterval(function() {getFreeSilverAward();}, 10000);
    var clearTimer = window.setInterval(function () {
        if (noMoreSilverAward()) {
            clearInterval(timer);
        }
    }, 1000);
}

autoGetFreeSilverAward();

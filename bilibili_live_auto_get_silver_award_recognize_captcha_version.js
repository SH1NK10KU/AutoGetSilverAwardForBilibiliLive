/**
 *
 * 为了银瓜子偶也是拼了～
 * 银瓜子什么的都快到碗里来！
 *
 * 无公害自动获取并识别验证码；
 * 银瓜子领完自动停止发送请求。
 *
 * @author 記憶の中で未来の風
 * @version 0.0.7
 * @date 2017.1.21
 *
 */

var number0 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var number1 = new Array(
	"0001111",
	"0011111",
	"0011111",
	"0011111",
	"0111111",
	"0111111",
	"0111111",
	"1111111",
	"1111111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111",
	"0011111");
var number2 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"0000000000011111",
	"0000000000111110",
	"0000000001111110",
	"0000000001111100",
	"0000000011111000",
	"0000000011111000",
	"0000000111110000",
	"0000001111110000",
	"0000001111100000",
	"0000011111000000",
	"0000011111000000",
	"0000111110000000",
	"0001111100000000",
	"0001111100000000",
	"0011111000000000",
	"0011110000000000",
	"0111110000000000",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111");
var number3 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"0000000000011111",
	"0000000001111110",
	"0000000011111100",
	"0000000111111000",
	"0000001111110000",
	"0000000111111000",
	"0000000011111100",
	"0000000001111110",
	"0000000000111111",
	"0000000000011111",
	"0000000000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var number4 = new Array(
	"00000001111100000",
	"00000001111100000",
	"00000001111100000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000111110000000",
	"00000111110000000",
	"00000111110000000",
	"00001111100000000",
	"00001111100000000",
	"00001111100000000",
	"00011111001111100",
	"00011111001111100",
	"00011111001111100",
	"00111110001111100",
	"00111110001111100",
	"00111110001111100",
	"01111100001111100",
	"01111100001111100",
	"01111100001111100",
	"11111111111111111",
	"11111111111111111",
	"11111111111111111",
	"11111111111111111",
	"00000000001111100",
	"00000000001111100",
	"00000000001111100",
	"00000000001111100",
	"00000000001111100",
	"00000000001111100");
var number5 = new Array(
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var number6 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111100000000000",
	"1111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var number7 = new Array(
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011110",
	"1111100000111110",
	"1111100000111110",
	"0000000000111110",
	"0000000000111100",
	"0000000001111100",
	"0000000001111100",
	"0000000001111100",
	"0000000001111000",
	"0000000011111000",
	"0000000011111000",
	"0000000011111000",
	"0000000011110000",
	"0000000111110000",
	"0000000111110000",
	"0000000111110000",
	"0000001111100000",
	"0000001111100000",
	"0000001111100000",
	"0000001111100000",
	"0000011111000000",
	"0000011111000000",
	"0000011111000000",
	"0000011111000000",
	"0000111110000000",
	"0000111110000000");
var number8 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"0111110000111111",
	"0111111101111110",
	"0001111111111000",
	"0000111111110000",
	"0001111111111000",
	"0111111111111110",
	"1111110000111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var number9 = new Array(
	"0111111111111110",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"0000000000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111100000011111",
	"1111111111111111",
	"1111111111111111",
	"1111111111111111",
	"0111111111111110");
var plus = new Array(
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"11111111111111111",
	"11111111111111111",
	"11111111111111111",
	"11111111111111111",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000011111000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000",
	"00000000000000000");
var minus = new Array(
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"111111111",
	"111111111",
	"111111111",
	"111111111",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000",
	"000000000");
var empty = new Array(" ");
var captchaBinarySignature = new Array(number0, number1, number2, number3, number4, number5, number6, number7, number8, number9,
	                                   plus, minus);

function canGetFreeSilverAward() {
	var timer = document.querySelector(".count-down-node");
	if ("00:00" == timer.innerText) {
		return true;
	}
	return false;
}

function clickFreeSilverAwardBox() {
	var box = document.querySelector(".treasure-box");
	box.click();
}

function getSilverNotice() {
	return document.querySelector("#silver-notice-div");
}

function getCaptchaImg() {
	var parent = document.querySelector(".main-section.room-intro");
	var canvasElement = document.createElement("canvas");
	canvasElement.setAttribute("id", "canvas");
	parent.appendChild(canvasElement);

	var content = canvas.getContext('2d');
	var img = new Image;
	img.onload = function() {
	    content.drawImage(img, 0, 0);
	    var data = content.getImageData(0, 0, img.width, img.height).data;//读取整张图片的像素。
	    // console.log(data, data.toString());
	}
	img.src = "http://live.bilibili.com/FreeSilver/getCaptcha?ts=" + (new Date().getTime());
}

function removeCaptchaImg() {
	var canvasElement = document.querySelector("#canvas");
	canvasElement.parentNode.removeChild(canvasElement);
}

var imgWidth = 300;
var imgHeight = 150
function binarizeCaptchaImg() {
	var content = canvas.getContext('2d');
	var data = content.getImageData(0, 0, imgWidth, imgHeight).data;
	var captchaImgBinary = "";
	for (var rPixel = 0, length = data.length; rPixel < length; rPixel += 4) {
	   	if (data[rPixel] > 127) {
	   		captchaImgBinary += "0";
	   	} else {
	   		captchaImgBinary += "1";
	   	}
	}
	return captchaImgBinary;
}

function logCaptchaImgBinary(binary) {
	var formalizedBinaryLog = "";
	for (var index = 0, length = binary.length; index < length; index++) {
		if (index % imgWidth == 0) {
			formalizedBinaryLog += "\n";
		}
		formalizedBinaryLog += binary[index];
	}
	// console.log(formalizedBinaryLog);
	return formalizedBinaryLog;
}

function recognizeCaptcha(binary) {
	var recognized_captcha = "";
	for (var index = imgWidth * 4; index < imgWidth * 5 - 200; index++) {
		for (var indexOfCaptchaBinarySignature = captchaBinarySignature.length; indexOfCaptchaBinarySignature > 0; indexOfCaptchaBinarySignature--) {
			for (var line = 0; line < captchaBinarySignature[indexOfCaptchaBinarySignature-1].length; ) {
				if (binary.substr(index + imgWidth * line, captchaBinarySignature[indexOfCaptchaBinarySignature-1][line].length) == captchaBinarySignature[indexOfCaptchaBinarySignature-1][line]) {
					line++;
					if (line == captchaBinarySignature[indexOfCaptchaBinarySignature-1].length) {
						if ((indexOfCaptchaBinarySignature-1) == 11) {
							recognized_captcha += " - ";
						} else if ((indexOfCaptchaBinarySignature-1) == 10) {
							recognized_captcha += " + ";
						} else {
							recognized_captcha += (indexOfCaptchaBinarySignature - 1) % 10;
						}
						
					}
				} else {
					break;
				}
			}
		}		
	}
	return recognized_captcha;
}

function calculateCaptcha(captcha) {
	var result = captcha.split(" ");
	if (result[0] == "") {
		result[0] = 0;
	}
	if (result[2] == "") {
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
	var captchaInputTextField = document.querySelector(".live-input");
	captchaInputTextField.value = captcha;
}

function clickGetFreeSilverAwardBtn() {
	var getFreeSilverAwardBtn = document.querySelector(".get-award-btn");
	getFreeSilverAwardBtn.click();
}

function clickCloseBtn() {
	var closeBtn = document.querySelector(".tip-content > .close-btn.right-top")
	if (closeBtn) {
		closeBtn.click();
	}
}

function noMoreSilverAward() {
	if (document.querySelector("span.toast-text") != null) {
		var toastInnerText = document.querySelector("span.toast-text").innerText;
		if (toastInnerText.indexOf('这个宝箱过期了！是不是在哪里开了一个新的') != -1) {
			return true;
		}
	}
	return false;
}

function getFreeSilverAward() {
	if (canGetFreeSilverAward()) {
		clickFreeSilverAwardBox();
		getCaptchaImg();
		// console.log(new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/,' '));
		setTimeout(function () {
			var binary = binarizeCaptchaImg();
			var formalizedBinary = logCaptchaImgBinary(binary).replace(/\n/g, "");
			var recognized_captcha = recognizeCaptcha(formalizedBinary);
			var result = calculateCaptcha(recognized_captcha);
			console.log("Captcha:"+recognized_captcha);
			console.log("Captcha Result:" + result);
			// console.log(new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/,' '));
			removeCaptchaImg();
			inputCaptcha(result);
			clickGetFreeSilverAwardBtn();
			// clickCloseBtn();
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
	}, 200);
}

autoGetFreeSilverAward();
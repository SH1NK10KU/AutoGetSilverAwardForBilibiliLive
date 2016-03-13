/**
 *
 * 为了银瓜子偶也是拼了～
 * 银瓜子什么的都快到碗里来！
 * 
 * ╮（╯_╰）╭【爆破版】 
 * 
 * Step1: 自行登陆bilibili并打开任意直播界面;
 * Step2: 修改你的专属luckyNum,再执行哦0v0;
 * Step3: 复制该文件代码;
 * Step4: 打开浏览器开发者工具栏并选中Console面板;
 * Step5: 粘帖脚本按回车[Enter],可以去干别的事啦;
 * 
 * 宝箱由3分钟、6分钟、10分钟3种宝箱组成一组，每日最多可领取3组（默认）。—— 直播在线宝箱规则
 * 故建议75-90分钟后刷新页面确认是否已领取所有宝箱。
 * 
 * PS: 瓜子领完请关闭页面，不然每秒发起请求个数是逐渐增加的，对bilibili可是不好的-0-～
 *
 * @author 記憶の中で未来の風
 * @version 0.0.1
 * @date 2016.3.9
 *
 */

var luckyNum = 66; // 别忘了修改你的幸运数字-0-

var silverNum = Number(document.querySelector(".seed-silver-text").getAttribute("data-seed-silver"));

function canGetFreeSilverAward() {
	var timer = document.querySelector(".treasure-count-down");
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

function recognizeCaptcha() {
	var captcha;
	captcha = luckyNum;
	return captcha;
}

function inputCaptcha(captcha) {
	var captchaInputTextField = document.querySelector("#freeSilverCaptchaInput");
	captchaInputTextField.value = captcha;
}

function clickGetFreeSilverAwardBtn() {
	var getFreeSilverAwardBtn = document.querySelector("#getFreeSilverAward");
	getFreeSilverAwardBtn.click();
}

function clickCloseBtn() {
	var closeBtn = document.querySelector(".tip-content > .close-btn.right-top")
	if (closeBtn) {
		closeBtn.click();
	}
}

function getFreeSilverAward() {
	if (canGetFreeSilverAward()) {
		clickFreeSilverAwardBox();
		if (getSilverNotice()) {
			inputCaptcha(recognizeCaptcha());
			clickGetFreeSilverAwardBtn();
		}
		clickCloseBtn();
	}
}

function autoGetFreeSilverAward() {
	window.setInterval(function() {getFreeSilverAward();}, 1000);
}

var auto;
auto = autoGetFreeSilverAward();


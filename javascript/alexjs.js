//验证码
function getCode(strCode){ //外部函数要传入进来 
	var verifyCode = "";
	for (var i = 0; i < 4; i++) {
		verifyCode += strCode.charAt(parseInt(Math.random()*strCode.length));
	}
	return verifyCode;//返回的是一个字符串,要把他写到innerHTML中去
}

//封装获取元素的函数
function $(selector){ //外部函数要传入进来 

	var start = selector.charAt(0);//把字符串的第一个字符拿出来,下面要进行判断
	var sel = selector.substring(1);//把字符串的第一个代表选择器的符号截取掉
	if (start == "#") {
		return document.getElementById(sel);//sel才是去掉井号的id名字
	}else if(start == "."){
		return document.getElementsByClassName(sel);
	}else{
		return document.getElementsByTagName(selector);//标签名前面没有符号不用截取
	}
}

//水平匀速动画
function constantAnimation(ele,current,target){//需要用到的数据传进来
	clearInterval(ele.timer);//开始先清除定时器,防止有多个定时器
	ele.timer = setInterval(function(){
		//step判断是往左还是往右,current>target的时候,left是越来越小,盒子就往左走,所以要用-10,反之.
		var step = current > target ? -10:10;
		current += step;
		ele.style.left = current + "px";
		if (step == -10) {//往左走的
			if (current <= target) {//往左走的停止条件
				clearInterval(ele.timer);
			}				
		}else{//往右走(step == 10)
			if (current >= target) {//往右走的停止条件
				clearInterval(ele.timer);
			}
		}
	}, 5);
}


//变速动画
function variableAnimation(ele,current,target,orientation){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var step = (target-current)/10;
		current += step;
		if (orientation == "left") {//左右 target的+-来判断.500和-500
			ele.style.left = current + "px";
		}else{//上下 target的+-来判断.500和-500
			ele.style.top = current + "px";
		}		
		//Math.abs(num) 取绝对值 1abs1 1abs-1
		if (Math.abs(target-current) <= 0.1) {
			clearInterval(ele.timer);
			current = target;
		}
	},5)
}



function constantAnimationWindow(current,target){//需要用到的数据传进来
	clearInterval(window.timer);//开始先清除定时器,防止有多个定时器
	window.timer = setInterval(function(){
		//step判断是往左还是往右,current>target的时候,left是越来越小,盒子就往左走,所以要用-10,反之.
		var step = current > target ? -50:50;
		current += step;
		
		if (step == -50) {//往左走的
			if (current <= target) {//往左走的停止条件
				clearInterval(window.timer);
				current = target;
			}				
		}else{//往右走(step == 10)
			if (current >= target) {//往右走的停止条件
				clearInterval(window.timer);
				current = target;
			}
		}
		window.scrollTo(0, current);
	}, 5);
}
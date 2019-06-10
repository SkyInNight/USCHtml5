		var square;//田 横条 凸 左 七 0-4下标代表  五种形状
		var squArr  = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];//图形的坐标位置
		var target  = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];//改变后的图形位置
		var direction; //方向
		var timer;//定时器
		var score = 0;//分数
		var scoreBox = document.getElementById("scoreBox");//显示分数的盒子
		var wall_height = 26;//墙体高度
		var wall_width = 20;//墙体宽度
		//是否开始游戏
		var begin  = true;
		var speed = 1000;
		function stratGame(){
			//如果设置了游戏开始
			if(begin == true){
				//开始绘图
				ranSquare();
				//自动下降
				timer = setInterval("moveDown()",speed);
				draw();
				//不允许再开始
				begin=false;

			}else{
				alert("游戏已经开始");
			}
		}
		//变型的方法
		function deformation(){
			//根据形状来变化
				switch(square){
					case 0://为田字型不需要改变
					break;
					case 1://为横条
					if(direction%2){//当为真的时候 值为1的时候变横条 否则变竖条
						//隐藏开始的位置
						hidden();
						//给变化后的位置赋值
						for(var i=0;i<4;i++){
						target[i][0] =squArr[0][0];
						target[i][1] =squArr[0][1]+i;
						}

					}else{
						//隐藏开始的位置
						hidden();
						//给变化后的位置赋值
						for(var i=0;i<4;i++){
						target[i][0] =squArr[0][0]+i;
						target[i][1] =squArr[0][1];
						}
					}
				break;
				case 2://丁字形 四种状态
					switch(direction%4){
						case 0:
						hidden();
						target[0][0] = squArr[1][0];
						target[0][1] = squArr[1][1]+1;
						target[1][0] = squArr[1][0];
						target[1][1] = squArr[1][1];
						target[2][0] = squArr[1][0];
						target[2][1] = squArr[1][1]-1;
						target[3][0] = squArr[1][0]+1;
						target[3][1] = squArr[1][1];
						break;
						case 1:
						hidden();
						target[0][0] = squArr[1][0]-1;
						target[0][1] = squArr[1][1];
						target[1][0] = squArr[1][0];
						target[1][1] = squArr[1][1];
						target[2][0] = squArr[1][0]+1;
						target[2][1] = squArr[1][1];
						target[3][0] = squArr[1][0];
						target[3][1] = squArr[1][1]-1;
						break;
						case 2:
						hidden();
						target[0][0] = squArr[1][0];
						target[0][1] = squArr[1][1]+1;
						target[1][0] = squArr[1][0];
						target[1][1] = squArr[1][1];
						target[2][0] = squArr[1][0];
						target[2][1] = squArr[1][1]-1;
						target[3][0] = squArr[1][0]-1;
						target[3][1] = squArr[1][1];
						break;
						case 3:
						hidden();
						target[0][0] = squArr[1][0]-1;
						target[0][1] = squArr[1][1];
						target[1][0] = squArr[1][0];
						target[1][1] = squArr[1][1];
						target[2][0] = squArr[1][0]+1;
						target[2][1] = squArr[1][1];
						target[3][0] = squArr[1][0];
						target[3][1] = squArr[1][1]+1;
						break;
					}
				break;
				case 3://左字俩种状态
					switch(direction%2){
						case 0:
						hidden();
						target[0][0] = squArr[2][0]-1;
						target[0][1] = squArr[2][1]+1;
						target[1][0] = squArr[2][0];
						target[1][1] = squArr[2][1]+1;
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0]+1;
						target[3][1] = squArr[2][1];
						break;
						case 1:
						hidden();
						target[0][0] = squArr[2][0]-1;
						target[0][1] = squArr[2][1]-1;
						target[1][0] = squArr[2][0]-1;
						target[1][1] = squArr[2][1];
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0];
						target[3][1] = squArr[2][1]+1;
						break;
					}
				break;
				case 4://七字四种状态
					switch(direction%4){
						case 0:
						hidden();
						target[0][0] = squArr[2][0]-1;
						target[0][1] = squArr[2][1]+1;
						target[1][0] = squArr[2][0];
						target[1][1] = squArr[2][1]+1;
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0];
						target[3][1] = squArr[2][1]-1;
						break;
						case 1:
						hidden();
						target[0][0] = squArr[2][0]+1;
						target[0][1] = squArr[2][1]+1;
						target[1][0] = squArr[2][0]+1;
						target[1][1] = squArr[2][1];
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0]-1;
						target[3][1] = squArr[2][1];
						break;
						case 2:
						hidden();
						target[0][0] = squArr[2][0]+1;
						target[0][1] = squArr[2][1]-1;
						target[1][0] = squArr[2][0];
						target[1][1] = squArr[2][1]-1;
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0];
						target[3][1] = squArr[2][1]+1;
						break;
						case 3:
						hidden();
						target[0][0] = squArr[2][0]-1;
						target[0][1] = squArr[2][1]-1;
						target[1][0] = squArr[2][0]-1;
						target[1][1] = squArr[2][1];
						target[2][0] = squArr[2][0];
						target[2][1] = squArr[2][1];
						target[3][0] = squArr[2][0]+1;
						target[3][1] = squArr[2][1];
						break;
					}
				break;

			}

		}
		// function getSrceenWH(){
		// 	w = $(window).width();
		// 	h = $(window).height();
		// 	$('#dialogBg').width(w).height(h);
		// }
		// window.onresize = function(){
		// 	getSrceenWH();
		// }
		// $(window).resize();
		window.onload = function(){
			// getSrceenWH();
			// 	//显示弹框
			// $('#dialogBg').fadeIn(300);
			// $('#dialog').removeAttr('class').addClass('animated bounceIn ').fadeIn();
			// //关闭弹窗
			// $('.submitBtn').click(function(){
			// 	wall_width = $('#wall_width').val();
			// 	wall_height = $('#wall_height').val();
			// 	$('#dialogBg').fadeOut(300,function(){
			// 		$('#dialog').addClass('bounceOutUp').fadeOut();
			// 	});
			// });
			initWall();
				//键盘按下事件
				document.onkeydown = function (e) { // 按键事件
					code = e.keyCode || e.which;
					switch(code){
						case 13:
						console.log("回车");
						stratGame();
							break;
						case 37:
						console.log("左");
						move("left");
							break;
						case 38:
						console.log("上");
						move("up");
						break;
						case 39:
						console.log("右");
						move("right");
						break;
						case 40:
						console.log("下");
						moveDown();
						break;

					}
				}
		}
		//消除的方法
		function checkLines(){
			for(var i=wall_height-1;i>1;i--){
				var check = true;
			for(var j=1;j<wall_width-1;j++){

				if(document.getElementsByTagName("td")[i*wall_width+j].style.backgroundColor != "blueviolet")
				{
					check = false;
					break;
				}

			}
			//检查是否有相同的一行 执行消除
			if(check){
				score+=100;
				scoreBox.innerHTML = "您当前的分数为"+score;
				//难度提高
				speed = 1000 - (score/10);
				// 这里那位老师漏了一个十分重要的代码，因为setInterval中时间一旦设定了就固定了，所以这里还需要刷新已下架计时器的下落时间
				timer = setInterval("moveDown()",speed);
				for(var k=i;k>1;k--){//	行
				for(var L=1;L<wall_width-1;L++){//列
					document.getElementsByTagName("td")[k*wall_width+L].style.backgroundColor = document.getElementsByTagName("td")[(k-1)*wall_width+L].style.backgroundColor;
				}
				}
			}
			}


		}
		function moveDown(){
			hidden();
			//其实就是x的值不断加大
			target = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
			for(var i=0;i<4;i++){
				 target[i][0] = squArr[i][0]+1;
				 target[i][1] = squArr[i][1];
			}
			//console.log(canMove())
			if(canMove()){
				//隐藏之前的块
				squArr = target;
			}else{
				draw();
				//到底了随机生成一个
				checkLines();
				ranSquare();
			}
			checkLines();
			draw();
		}
	//		移动的方法
		function move(dir){
			//先初始化移动后的位置
			target = [[-1,-1],[-1,-1],[-1,-1],[-1,-1]]
			//隐藏需要移动的块
			hidden();
			//设置移动的新位置的坐标
			for(var i=0;i<4;i++){
			//x轴的位置
				target[i][0] = squArr[i][0];
			//y轴的位置 左移减1 右移加1
			switch(dir){
				case "left":
				target[i][1] = squArr[i][1]-1;
				break;
				case "right":
				target[i][1] = squArr[i][1]+1;
				break;
				case "up":
				deformation();
//				direction++;
				break;
			}
			}
			if(canMove()){
				squArr = target;
				direction++;
			}
			draw();
		}
	// 隐藏旧的块
	    function hidden(){
				for (var i=0;i<4;i++) {
				document.getElementsByTagName("td")[squArr[i][0]*wall_width+squArr[i][1]].style.backgroundColor = "white";
				}
	    }
	//碰撞检测的方法
	   function canMove(){
	   	//当你移动的位置的背景颜色为红色则不能移动
	   	for (var i=0;i<4;i++) {
	   	if(document.getElementsByTagName("td")[target[i][0]*wall_width+target[i][1]].style.backgroundColor == "red" || document.getElementsByTagName("td")[target[i][0]*wall_width+target[i][1]].style.backgroundColor == "blueviolet")
	   		return false;
	   	}
	   	return true;
	   }
		//随机生成图形的方法
		function ranSquare(){
			square=Math.floor(Math.random()*5);
			switch(square){
				case 0:
				squArr = [[1,wall_width/2-1],[1,wall_width/2],[2,wall_width/2-1],[2,wall_width/2]];
				direction =0;
				break;
				case 1:
				squArr = [[1,wall_width/2-2],[1,wall_width/2-1],[1,wall_width/2],[1,wall_width/2+1]]
				direction=0;
				break;
				case 2:
				squArr = [[1,wall_width/2-1],[2,wall_width/2-1],[3,wall_width/2-1],[2,wall_width/2]]
				direction=0;
				break;
				case 3:
				squArr = [[1,wall_width/2-1],[1,wall_width/2],[2,wall_width/2],[2,wall_width/2+1]]
				direction=0;
				break;
				case 4:
				squArr = [[1,wall_width/2-1],[1,wall_width/2],[2,wall_width/2],[3,wall_width/2]]
				direction=0;
				break;

			}
		}
		//画图形的函数
		function draw(){
			for (var i=0;i<4;i++) {
				// 直接在这里添加一个判断结束函数。
				if (document.getElementsByTagName("td")[squArr[i][0]*wall_width+squArr[i][1]].style.backgroundColor == "blueviolet"){
					gameover();
				}else{
					document.getElementsByTagName("td")[squArr[i][0]*wall_width+squArr[i][1]].style.backgroundColor = "blueviolet";
				}
			}
		}
		//设置墙体
		function initWall(){
			drawtable();
			for (var i=0;i<wall_width;i++) {
				document.getElementsByTagName("td")[i].style.backgroundColor = "red";
				document.getElementsByTagName("td")[(wall_height-1)*wall_width+i].style.backgroundColor = "red";
			}
			for (var i=0;i<wall_height;i++) {
				document.getElementsByTagName("td")[wall_width*i].style.backgroundColor = "red";
				document.getElementsByTagName("td")[wall_width*i+wall_width-1].style.backgroundColor = "red";
			}
		}
		function gameover(){
			con = confirm("游戏结束，是否重新开始？");
			if (con == true){
				restart();
			}else{
				window.close();
			}
		}
		function restart(){
			for (var i=1;i<wall_height-1;i++) {
				for (var j = 1;j<wall_width-1;j++){
					document.getElementsByTagName("td")[wall_width*i+j].style.backgroundColor = "white";
				}
			}
			score = 0;
			scoreBox.innerHTML = "您当前的分数为"+score;
		}

		function drawtable(){
			var tab = document.getElementById("table");
			for (var i = 0;i<wall_height;i++){
				var tr = document.createElement("tr");
				for (var j = 0;j<wall_width;j++){
					var td = document.createElement("td");
					tr.appendChild(td);
				}
				tab.appendChild(tr);
			}
		}
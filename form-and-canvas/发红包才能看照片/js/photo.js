// 第五单元 5-2 发红包才能看照片
var canvasWidth = 877;//申明画布的宽
var canvasHeight = 672;//申明画布的高
var canvas = document.getElementById("myCanvas");//获取画布
var context = canvas.getContext("2d");//获取画布的上下文
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var image = new Image();//申明图片
var radius = 50;//申明半径
// 这里务必注意，需要填写的是要调用页面和图片的相对路径，js脚本最终是要嵌入页面中的，或者调用绝对路径也是可以的
image.src = "imgs/pic.jpg";//获取图片路径
image.onload = function(e){
    initCanvas();//初始画s布
}
function  initCanvas() {
    Region = {x:Math.random()*(canvas.width-2*radius)+radius,y:Math.random()*(canvas.height-2*radius)+radius,r:radius}
    draw(Region);//绘制图片
}
// 绘制圆形，用clip()方法剪切圆形区域
function setRegion(Region) {
    context.beginPath();
    context.arc(Region.x,Region.y,Region.r,0,Math.PI*2,false);
    context.clip();
}
function draw(){
    // 用于每次清除上一次绘制的圆形，保证只显示一个圆形区域
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    setRegion(Region);
    context.drawImage(image,0,0);
    context.restore();
}
// 单击事件reset()方法，在该方法中调用InitCanvas方法，每次在不同位置绘制圆形区域
function reset() {
    initCanvas();
}
// 单击事件show方法，在该方法中调用draw(image)方法，使圆形半径大于画布，这时就可以绘制完整的图片了，也就是收到红包的效果
function show() {
    Region.r = 2*Math.max(canvas.width,canvas.height);
    draw(image,Region);
}
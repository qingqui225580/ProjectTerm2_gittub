/**
 * 产品详情核心js
 */
$(function(){
    // 调用插件函数
    magnifier({
		magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height :470,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2//缩放比例
	});
})
// 乐购商场首页js

// 当页面加载成功
$(function() {
    $('#banner').tyslide({
        boxh: 465, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    // 图书电子小轮播
    $('.ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 电子书tab
    // $('.ebboks-list').eq(1).hide();
    // $('.ebboks-list').eq(2).hide();
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    $(".ebooks-nav>li").mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })

    // 新书列表手风琴效果
    $('.ebooks .right-box ul>li').mouseenter(function() {
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();
        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();
        $(this).find('.desc').show();
    })
})
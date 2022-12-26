// 乐购商场首页js

// 当页面加载成功
$(function() {
    // 大盒子轮播
    $('#bannerInner').tyslide({
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
    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();
    $(".ebooks-nav>li").mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    });

    // 新书列表手风琴效果
    $('.ebooks .right-box ul>li').mouseenter(function() {
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();
        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();
        $(this).find('.desc').show();
    });

    // 服装 运动 童装 轮播
    $('.csc-lunbo').tyslide({
        boxh: 335, //盒子的高度
        w: 430, //盒子的宽度
        h: 335, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 40, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    // 服装tab
    $('.clothes-list').eq(1).hide();
    $('.clothes-list').eq(2).hide();
    $(".clothes-nav>li").mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.clothes-list').eq(index).show().siblings('.clothes-list').hide();
    });

    // 户外运动tab
    $('.sports-list').eq(1).hide();
    $('.sports-list').eq(2).hide();
    $(".sports-nav>li").mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.sports-list').eq(index).show().siblings('.sports-list').hide();
    });

    // 童装tab 
    $('.children-clothes-list').eq(1).hide();
    $('.children-clothes-list').eq(2).hide();
    $(".children-clothes-nav>li").mouseenter(function() {
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.children-clothes-list').eq(index).show().siblings('.children-clothes-list').hide();
    });

    // 推广商品切换
    $('.promotion .top ul li').mouseenter(function() {
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
            // 内容切换
            // 获取对应索引
        var index = $(this).index();
        // 左右移动
        $('.promotion .content .inner-box').animate({
            'top': -index * 600
        }, 300)

    });

    // 二维码滑出效果
    $('.qr-code .ticket').hover(function() {
        // 让二维码滑出来
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    }, function() {
        // 让二维码收回去
        $('.qr-code div').stop(true).animate({
            left: '0px'
        })
    });

    // 顶部搜索框交互
    $(document).scroll(function() {
        var topDistance = $('html ,body').scrollTop();
        // 判断
        if (topDistance > 500) {
            // 大于滑出来
            $('.top-search-box').slideDown(300);
        } else {
            // 否则收回去
            $('.top-search-box').slideUp(300);
        }
    });

    // 楼梯跳转
    $('.floor li').click(function() {
        // 获取索引
        var index = $(this).index();
        // 选中每一个板块到顶部的偏移
        var topOffset = $('.floorBox').eq(index).offset().top;
        // 让滚动条到相应位置
        $('html ,body').animate({
            scrollTop: topOffset - 50
        })
    });
})
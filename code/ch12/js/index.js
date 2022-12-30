// 乐购商场首页js

// 当页面加载成功
$(function() {
    $('.banner').tyslide({
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
    // 推广商品切换
    $('.promotion .promotion-title ul li').mouseenter(function(){
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')

        // 内容切换
        // 获取对应的索引
        var index = $(this).index(); //0 => left: 0*1170, 1 => left:-1*1170,3=>left:-2*1170
        console.log(index)
        console.log( $('.promotion .promotion-content .inner-box'))
    //左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left': -index * 1170
        },300)
        
        
    })
    // 返回顶部
    // 绑定滚动事件
    $(document).scroll(function(){
        // 获取距离顶部的距离
        var topDistance=$('html,body').scrollTop();
        // 判断
        if(topDistance>500){
            $('.backToTop').fadeIn();

        }else{
            $('.backToTop').fadeOut();

        }
    })
    // 返回顶部功能
    $('.backToTop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },300)
    })
    // 二维码滑出效果
    $('.qr-code .ticket').hover(function(){
        //让二维码滑出来
        $('.qr-code div').stop(true).animate({//stop(true)停止动画
            left:'-100px'
        })
    },function(){
         //让二维码收回去
         $('.qr-code div').stop(true).animate({
            left:'0px'
        })
    })
    // 顶部搜索框交互
    $(document).scroll(function(){
        //获取到顶部距离
        var topDistance=$('html, body').scrollTop();
        if(topDistance>500){
            //如果滚动距离大于500就滑下来
            $('.top-search-box').slideDown(300)

        }else{
            //否则，收回去
            $('.top-search-box').slideUp(300)

        }
    })
    // 楼层跳转效果
    $('.floor li').click(function(){
        //获取索引
        var index=$(this).index();
        //选中每一个板块到顶部的偏移
        var topOffset=$('.floorBox').eq(index).offset().top;//offset().top获取绑定元素上边框对相对于html上边界的偏移量
        //让滚动条滚到这个位置
        $('html,body').animate({
           scrollTop:topOffset-100
        })

    })


})
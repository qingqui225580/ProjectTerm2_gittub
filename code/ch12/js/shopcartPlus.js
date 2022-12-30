/**
 * 购物车功能JS
 */
$(function(){
    // 把三个类型的input分别先获取
    var $theadInput=$('thead input[type=checkbox]');  //表头中的全选
    var $bodyInput=$('tbody input[type=checkbox]');  //表格中的每一行的选择框
    var $allPriceInput=$('.totalPrice input[type=checkbox]'); //计算总价中的全选框
    // 全选
    /**
     * 1、给表头中的全选按钮，绑定点击事件 点击的时候 获取到它的选中状态（true/false）
     * 2、给表格中的每一行数据的input选择框，赋值为表头的选中状态（true/false）
     * 3、给计算总价中的全选框，也赋值为表头的选中状态（true/false）
     */
    //表头的全选框
    $theadInput.change(function(){
        // alert('1')
        var chackState=$(this).prop('checked');       //获取全选框的选中状态
        // console.log(chackState)
        $bodyInput.prop('checked',chackState)        //把选中状态给表格中的选择框
        $allPriceInput.prop('checked',chackState)    //把选中状态给计算总价中的全选框
        allTotal();//总计
    })
    /**
     * 计算总价的全选框
     * 1、给计算总价的全选按钮 绑定点击状态，获取选中状态(true/false)
     * 2、把状态给表头的全选框
     * 3、把状态给表格中的选择框
     */
    $allPriceInput.change(function(){
        var chackState=$(this).prop('checked');        //获取计算总价的全选状态
        $theadInput.prop('checked',chackState)        //赋值给表头的全选框
        $bodyInput.prop('checked',chackState)        //赋值给表格中的选择框
        allTotal();//总计
    })
    /**
     * 表格中的选择框 反过来影响两个全选框
     * 1、给表格中的选择框绑定点击事件
     * 2、定一个标杆 flag=true
     * 3、循坏表格中的选择框
     * 4、获取每一个选择框的选中状态
     *      判断：如果有一个是false，那么就不是全选 flag=false
     * 5、把flag的值赋值给两个全选框（因为flag就是对应选中状态）
     */
    $bodyInput.change(function(){ //给表格中单选框绑点击事件
        // alert('1')
        var flag=true;  //定标杆为true
        $bodyInput.each(function(index,input){   //循坏表格input
            var checkState=$(this).prop('checked'); //获取表单的选中状态
            if(checkState ===false){  //如果有一个等于false
                flag=false;//标杆变为false（全选状态变为false）
            }
        })
        $theadInput.prop('checked',flag)//把状态赋值给头部全选框
        $allPriceInput.prop('checked',flag)//把状态赋值给计算价格全选框
        allTotal();//总计
    })
    /**
     * 加法功能：
     *     1.获取+按钮，绑定点击事件
     *     2.点击的时候获取后面输入框的值
     *     3.输入框的值自增
     *     4.将自增的值，重新赋值给后面的输入框
     */
    $('.add').click(function(){//给+绑定事件
        var count=parseInt($(this).next().val());//获取后面输入框的值
        count++;//自增
        $(this).next().val(count)//将自增的值 赋值给后面的输入框
        //调用小计
        subTotal($(this),count);
        allTotal();//总计
    })
    /**
     * 减法功能：
     *      1.给-绑定点击事件
     *      2.获取前面输入框的值
     *      3.值自减，边界判断，如果小于1，那么等于1 否则等于自己
     *      4.把减少后的值 重新赋值给前面的输入框
     */
    $('.reduce').click(function(){  //给-绑定事件
        var count =parseInt($(this).prev().val()); //获取前面输入框的值
        count--; //自减
        count=count<1?1:count;      //边界判断：如果小于1，那么等于1 否则等于自己
        $(this).prev().val(count)  //把减少后的值 重新赋值给前面的输入框
         //调用小计
         subTotal($(this),count);
         allTotal();//总计
    })
    /**
     * 封装一个小计函数：（点击+或-的时候 需要调用小计功能）
     */
    function subTotal(dom,count){
        var singlePrice=parseFloat(dom.closest('tr').find('.price').text());//找到单价

        var subTotalPrice=singlePrice*count;//单价*数量=小计
        dom.closest('tr').find('.subprice').text(subTotalPrice.toFixed(2))//把小计的结果渲染对应的位置，保留两位小数
    }
    /**
     * 总计功能体现：（头部全选 计算总价全选 表格的选择框+- 删除 六个地方调用总计）、
     *                1.定义一个变量 用于保存总价 定义一个变量 用于保存已选商品 数量
     *                2.获取所有表格中的选择框，循环，获取选中状态，判断
     *                3.如果选中，那么就要累加这一行的小计
     */
    function allTotal(){
        var allPrice=0; //定义一个变量 用于保存总价
        var selectedCount=0; //定义一个变量 用于保存已选商品 数量
        $('tbody input[type=checkbox]').each(function(index,input){    //获取表格中的选择框 循环
            var checkState=$(this).prop('checked');//获取选中状态
            if(checkState){ //判断：如果是true
                allPrice +=parseFloat($(this).closest('tr').find('.subprice').text());//累加这一行的小计
                selectedCount++; //数量+1
            }
        })
        //渲染
        $('.total').text(allPrice.toFixed(2));//渲染总价
        $('.count').text(selectedCount);//渲染数量
    }
    /**
     * 关于下面的删除功能：模拟，不是真正的逻辑 是“伪”的
     */
    $('.del').click(function(){
        $(this).closest('tr').remove()
        getGoodsCount();//重新计算商品数量
        allTotal()//计算总价
    })
    //删除选中
    $('.delChecked').click(function(){
        $('tbody input[type=checkbox]').each(function(index,input){    //获取表格中的选择框 循环
            var checkState=$(this).prop('checked');//获取选中状态
            if(checkState){ //判断：如果是true
                $(this).closest('tr').remove() //干掉自己
            }
        })
        getGoodsCount();//重新计算商品数量
        allTotal()//计算总价
    })   
    //封装一个获取全部商品的函数
    function getGoodsCount(){
        //获取数量
        var goodsCount=$('table tbody tr').length;
        //渲染
        $('.goodsCount').text(goodsCount)
    }
    getGoodsCount();//页面加载调用一次
})
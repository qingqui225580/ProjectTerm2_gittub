/*购物车js文件 */

$(function() {
    // 全选
    /*
    1.点击表头全选框 获取表头全选框状态
    2.表格中的选择框需要一致
    3.结算中全选状态一致
     */
    // 定义三个变量
    var $theadInput = $('table thead input[type=checkbox]'); //头部选择框
    var $bodyInput = $('table tbody input[type=checkbox]'); //中间选择框
    var $allPriceInput = $('.totalPrice-left input[type=checkbox]'); //结算选择框

    $theadInput.change(function() {
            // 获取选中状态
            var state = $(this).prop('checked');
            // 表格中的选择框需要一致and 结算中全选状态一致
            $bodyInput.prop('checked', state);
            $allPriceInput.prop('checked', state);
        })
        // 2.结算中的选择框，也需要同样的功能
    $allPriceInput.change(function() {
            //   获取选中状态 
            var state = $(this).prop('checked');
            // 状态一致
            $bodyInput.prop('checked', state);
            $theadInput.prop('checked', state);
        })
        // 表单中的选中状态  反过来影响全选
    $bodyInput.change(function() {
            // 顶一个标杆
            var flag = true;
            // 总价
            var totalPrice = 0;
            // 循环表格中所有选择框的选中状态
            $bodyInput.each(function(i, input) {
                    if (!$(input).prop('checked')) {
                        flag = false;
                    } else {
                        totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
                    }
                })
                // 把状态用来改变全选框
            $theadInput.prop('checked', flag)
            $allPriceInput.prop('checked', flag)
                // 渲染到总价位置
            $('.totalone').text(totalPrice.toFixed(2));
        })
        // 数量的加减功能
        // 加
    $('.add').on('click', function() {
            // 下一个input节点
            var $nextInput = $(this).next();
            // 获取输入框的值
            var oldVal = parseInt($nextInput.val());
            // 自增
            oldVal++;
            // 重新赋值给这个输入框
            $nextInput.val(oldVal);
            // 小计
            subTotalPrice(oldVal, $(this));
        })
        // 减少
    $('.reduce').on('click', function() {
            // 上一个input节点
            var $prevInput = $(this).prev();
            // 获取输入框的值
            var oldVal = parseInt($prevInput.val());
            // 自减
            oldVal--;
            oldVal = oldVal < 1 ? 1 : oldVal; //如果小于一那么就等于一 否则就等于自己  
            // 重新赋值给这个输入框
            $prevInput.val(oldVal);
            // 小计
            subTotalPrice(oldVal, $(this));
        })
        // 抽取小计的函数
    function subTotalPrice(val, dom) {
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        // 把小计结果放入dom对应位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }
    // 删除
    $('.del').click(function() {
            // 删除整行
            $(this).closest('tr').remove();
        })
        // 总价计算
    $bodyInput.each(function(i, input) {
        // 判断选中状态 如果被选中的那么就需要计算
        if ($(input).prop('checked')) {
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        }

    })
})
$("input[type=button]").on("click",function(){
    $.getJSON('https://www.yiketianqi.com/free/week?unescape=1&appid=75921288&appsecret=TVeWr8xP',function(data){
        console.log(data);
        var con=template('txt',data);
        $("#content").html(con)
    })
    var chartDom = document.getElementById('box');
          var myChart = echarts.init(chartDom);
          var option;
          const colors = ['#5470C6', '#EE6666'];
          option = {
            color: colors,
            tooltip: {
              trigger: 'none',
              axisPointer: {
                type: 'cross'
              }
            },
            legend: {},
            grid: {
              top: 70,
              bottom: 50
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  onZero: false,
                  lineStyle: {
                    color: colors[1]
                  }
                },
                axisPointer: {
                  label: {
                    formatter: function (params) {
                      return (
                        '温度  ' +
                        params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      );
                    }
                  }
                },
                // prettier-ignore
                data: ['4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28']
              },
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  onZero: false,
                  lineStyle: {
                    color: colors[0]
                  }
                },
                axisPointer: {
                  label: {
                    formatter: function (params) {
                      return (
                        '温度  ' +
                        params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                      );
                    }
                  }
                },
                // prettier-ignore
                data: ['4-22', '4-23', '4-24', '4-25', '4-26', '4-27', '4-28']
              }
            ],
            yAxis: [
              {
                type: 'value',
              min:5,
              max:35,
              axisLabel:{
                  formatter:'{value}℃',
              }
              }
            ],
            series: [
              {
                name: '白天气温数据',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                emphasis: {
                  focus: 'series'
                },
                data: [12, 10, 10, 10, 11, 9, 9]
              },
              {
                name: '夜间气温数据',
                type: 'line',
                smooth: true,
                emphasis: {
                  focus: 'series'
                },
                data: [8, 8, 8, 8, 8, 5, 3]
              },
            ]
          };
          option && myChart.setOption(option);
})
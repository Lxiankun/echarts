(function () {
    // 监控区域tab栏切换
    let choseTab = document.getElementsByClassName('choseTab');
    //   array.from 变成真正的数组
    choseTab = Array.from(choseTab);
    // console.log(choseTab);
    // showTab 切换内容
    let showTab = document.getElementsByClassName('showTab');
    choseTab.forEach(function (itemvalue, ind) {
        itemvalue.setAttribute('index', ind);
        itemvalue.onclick = function () {
            let index_ = this.getAttribute('index');
            console.log(index_);
            for (var i = 0; i < choseTab.length; i++) {
                choseTab[i].classList.remove('active');
                choseTab[index_].classList.add('active');
                showTab[i].style.display = 'none';
                showTab[index_].style.display = 'block';
            }
        }
    });
})();

// 点位分布统计通
(function () {
    // 1. 实例化对象
    let myechart = echarts.init(document.querySelector('.pie'));
    // 2. 指定配置项和数据
    var option = {
        // legend: {
        //     // top: 'bottom'
        // },
        // toolbox: {
        //     show: false,
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: true, readOnly: false },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 4
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };
    // 3. 配置项和数据给我们的实例化对象

    myechart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function () {
        myechart.resize();
    });
    window.addEventListener('resize', function () {
        myechart.resize();
    });
})();


// 用户统计

(function () {
    // 1. 实例化对象
    let myechart = echarts.init(document.querySelector('.bar'));
    let item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 工具提示隐藏
        // 注意：tootip的extraCss只在tooltip.trigger 为 'item' 时有效。
        tooltip: {
            extraCssText: 'opacity:0'
        },


    };
    // 2. 指定配置项和数据
    var option = {

        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            // 是否显示网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        tooltip: {
            trigger: 'item',
            // 触发的时候 效果  shadow 阴影
            //                line 虚线
            //                none 没效果
            axisPointer: {
                type: 'none'
            }

        },
        xAxis: {
            type: 'category',
            data: ['郑州', '', '北京', '', '合肥', '', '...', '', '杭州', '', '上海', '', '重庆'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#71f2fb"
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#71f2fb"
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        series: [
            {

                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#00fffb' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#0061ce' }
                    ])
                },
                data: [
                    2100,

                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    item,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240,

                ],
                name: 'Direct',
                type: 'bar',
                barWidth: '60%'
            }
        ]
    };
    // 3. 配置项和数据给我们的实例化对象

    myechart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function () {
        myechart.resize();
    });
    window.addEventListener('resize', function () {
        myechart.resize();
    });
})();


// 订单模块 订单显示隐藏 订单自动切换
(function () {
    //  找到所有a标签 365天 90天 30天 24小时
    let a_ = document.getElementsByClassName('days')[0].children;
    // 对应天数的数据
    let orderdatas_ = document.getElementsByClassName('orderdatas');
    // 订单框
    let order_ = document.getElementsByClassName('order')[0];
    let index_ = 0;
    let timer = null;
    // console.log(a_);
    a_ = Array.from(a_);
    a_.forEach(function (value, ind) {
        value.setAttribute('index', ind);
        value.onclick = function () {
            index_ = this.getAttribute('index');
            // console.log(index_);
            for (var i = 0; i < a_.length; i++) {
                a_[i].classList.remove('active');
                a_[index_].classList.add('active');
                orderdatas_[i].classList.add('datanone');
                orderdatas_[index_].classList.remove('datanone');
            }
        }
    });

    // tab栏自动切换
    function zidong() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= a_.length) {
                index_ = 0;
            }
            a_[index_].click();
        }, 2000);
    }
    zidong();

    // 鼠标移到订单框时定时器停止
    // 移出时开始
    order_.onmouseenter = function () {
        clearInterval(timer);
    }
    order_.onmouseleave = function () {
        zidong(), 2000;
    }
})();


// 销售统计图

(function () {
    // 销售统计图数据来源
    let data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    // 年 季 月 周
    let sellitem = document.getElementsByClassName('sellitem');
    // console.log(sellitem);
    sellitem = Array.from(sellitem);
    let insell = document.getElementsByClassName('insell')[0];
    let index_ = 0;
    let timer = null;
    let myChart = echarts.init(document.querySelector('.sline'));
    let option = {
        color: ['#00f2f1', '#ed3f35'],
        // title: {
        //     // text: '销售额统计',
        //     textStyle: {
        //         fontSize: 14,
        //         color: 'white',
        //     },
        //     // // subtext: '单位/万',
        //     // subtextStyle: {
        //     //     color: 'skyblue',
        //     //     fontSize: 12,

        //     // }

        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            // top: 20,
            // right: 5,
            textStyle: {
                fontSize: 12,
                color: '#4c9bfd'// 图例文字颜色
            },
            right: '6%'// 距离右边10%
        },
        grid: {
            top: '20%',
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: '#012f4a',// 边框颜色
            height: '78%'
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '3月', '5yue', '7月', '9月', '11月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            },
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                smooth: true,
                data: data.year[1]
            },

        ]
    };
    myChart.setOption(option);


    // tab 栏自动切换

    sellitem.forEach(function (value, ind) {
        value.setAttribute('index', ind);
        value.onclick = function () {
            index_ = this.getAttribute('index');
            for (var i = 0; i < sellitem.length; i++) {
                sellitem[i].classList.remove('ac');
                sellitem[index_].classList.add('ac');
            }

            // 获取自定义属性时间
            let dtime = this.getAttribute('data-time');
            option.series[0].data = data[dtime][0];
            option.series[1].data = data[dtime][1];
            // 注意必须重新调用
            myChart.setOption(option);
        }
    });

    // 当鼠标移到inner 框时 暂停 移出 开始

    insell.onmouseenter = function () {
        clearInterval(timer);
    }
    insell.onmouseleave = function () {
        sellzidong(), 2000;
    }

    // 自动切换

    function sellzidong() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= sellitem.length) {
                index_ = 0;
            }
            sellitem[index_].click();
        }, 2000);
    }
    sellzidong();


    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function () {
        myChart.resize();
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });

})();


// 渠道分布 雷达图

(function () {
    let myChart = echarts.init(document.querySelector('.radar'));
    var option = {
        radar: {
            //控制圆的大小
            radius: '60%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            // 整个雷达图 有几个圈
            splitNumber: 4,
            axisName: {
                //雷达图 文字的颜色
                color: '#4c9bfd',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '0%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: [[90, 100, 56, 11, 34]],
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },


            }
        ]
    };

    myChart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    // 页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function () {
        myChart.resize();
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
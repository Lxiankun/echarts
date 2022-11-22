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
        tooltip: {
            extraCssText: 'opacity:0'
        }

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
            trigger: 'axis',
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
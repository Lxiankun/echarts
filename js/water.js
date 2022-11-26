(function () {
    let mychart = echarts.init(document.querySelector('.water'));
    const value = 60.35;
    let option = {
        // backgroundColor: 'rgba(225,225,225,.2)',
        graphic: [
            {
                type: "group",
                left: "center",
                top: "60%",
                children: [
                    {
                        type: "text",
                        z: 100,
                        left: "10",
                        top: "middle",
                        style: {
                            fill: "#fff",
                            text: "整体进度",
                            font: "14px 宋体正文",
                        },
                    },
                ],
            },
        ],
        series: [
            {
                type: 'liquidFill',
                radius: '90%',
                data: [
                    value / 100,
                    {
                        value: (value - 10) / 100,
                        direction: 'left'
                    }
                ],
                backgroundStyle: {
                    borderWidth: 1,
                    color: 'transparent'
                },
                label: {
                    normal: {
                        color: '#27e5f1',
                        insideColor: '#f7e8c1',
                        left: '50%',
                        top: '40%',
                        textAlign: 'center',
                        textStyle: {
                            fontSize: 30,
                            fontWeight: '600',
                            color: '#fff',
                            textAlign: 'center',
                            textBorderColor: 'rgba(0, 0, 0, 0)',
                            textShadowColor: '#000',
                            textShadowBlur: '0',
                            textShadowOffsetX: 0,
                            textShadowOffsetY: 1
                        }
                    }
                },
                color: [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: ['#324791'] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: ['#449090'] // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }],
                outline: {
                    show: true,
                    borderDistance: 5,
                    itemStyle: {
                        borderWidth: 0,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#0b2355' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#195b9d' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            }
        ]
    };

    mychart.setOption(option);
    // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
    window.addEventListener('load', function () {
        mychart.resize();
    });
    window.addEventListener('resize', function () {
        mychart.resize();
    });
})();
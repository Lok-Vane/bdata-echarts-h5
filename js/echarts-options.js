function echartsInit(DOM, option) {
    let EChart = echarts.init(DOM);
    EChart.setOption(option);
    // 窗口大小变化监听，图像大小自适应
    window.addEventListener('resize', () => {
        EChart.resize();
    })
}

let option_A = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '10px',
        left: '0%',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['旅游', '教育', '游戏', '医疗', '电商', '社交', '金融'],
        // data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        axisTick: {
            // 可以保证刻度线和标签对齐
            alignWithLabel: true
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        // 坐标轴线条样式 不显示
        axisLine: {
            show: false,
            lineStyle: {

            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2
            }
        },
        // Y轴分割线样式
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        // 柱形宽度
        barWidth: '35%',
        itemStyle: {
            // 柱形样式 圆角
            barBorderRadius: 5
        },
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};

// .line .B 数据
let yearData = [{
        year: '2019', // 年份
        data: [ // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
        year: '2020', // 年份
        data: [ // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
];
let option_B = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // 上方图例组件样式
        textStyle: {
            color: "#4c9bfd"
        },
        right: "10%"
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true, // 刻度
        show: true, // 边框
        borderColor: '#012f4a'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, // 去除轴间距
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#4c9bfd',
            fontSize: 12
        },
        // 坐标轴线条样式 不显示
        axisLine: {
            show: false
        },
        data: [
            '1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'
        ]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#4c9bfd',
            fontSize: 12
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        // Y轴分割线样式
        splitLine: {
            lineStyle: {
                color: "#012f4a",
            }
        }
    },
    color: ['#00f2f1', '#d3f35'], // 折线颜色
    series: [{
            name: '员工入职',
            type: 'line',
            // stack: '总量', // 数据层叠
            smooth: true, // 是否平滑显示
            data: yearData[0].data[0]
        },
        {
            name: '员工离职',
            type: 'line',
            // stack: '总量',
            smooth: true, // 是否平滑显示
            data: yearData[0].data[1]
        }
    ]
};

let option_C = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        // 距离底部为0%
        bottom: "0%",
        // 小图标的宽度和高度
        itemWidth: 10,
        itemHeight: 10,
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        // 修改图例组件的文字为 12px
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12
        }
    },
    series: [{
        name: '年龄分布',
        type: 'pie',
        // 设置饼形图在容器中的位置  默认值
        center: ["50%", "50%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        // 扇形旁边的文字
        label: {
            show: false,
            // position: 'center'
        },
        // 文字与图形的连线
        labelLine: {
            show: false
        },
        data: [
            { value: 1, name: "20岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" }
        ],
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
    }]
};

let colorList = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
let option_D = {
    tooltip: {
        // 触发方式 axis 坐标轴 可选 axis / item（柱状图） / none
        trigger: 'none'
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        top: "10%",
        left: '22%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show: false, // 不显示X轴
    },
    // 左右两侧的Y轴
    yAxis: [{
        type: 'category',
        inverse: true, // 正序反序
        axisTick: {
            // 不显示刻度
            show: false,
        },
        axisLine: {
            // 不显示Y轴线
            show: false,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        data: ['Html5', 'CSS3', 'JavaScript', 'Vue', 'Angular']
    }, {
        inverse: true, // 正序反序
        axisTick: {
            // 不显示刻度
            show: false,
        },
        axisLine: {
            // 不显示Y轴线
            show: false,
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        data: [702, 350, 610, 793, 664]
    }],
    series: [{
            name: '条',
            type: 'bar',
            barCategoryGap: 50, // 柱子之间的距离
            barWidth: 10, // 柱子宽度
            yAxisIndex: 0,
            itemStyle: {
                barBorderRadius: 20,
                // color: "red"
                color: function(params) {
                    return colorList[params.dataIndex % colorList.length];
                }
            },
            // 柱子内的文字
            label: {
                show: true,
                position: 'inside',
                // 会自动解析 data 里的数据
                formatter: '{c}%'
            },
            data: [70, 34, 60, 78, 69]
        },
        {
            name: '框',
            type: 'bar',
            barCategoryGap: 50, // 柱子之间的距离
            barWidth: 15, // 柱子宽度
            yAxisIndex: 1,
            itemStyle: {
                barBorderColor: "#00c1de",
                color: "none",
                borderWidth: 3,
                barBorderRadius: 15,
            },
            data: [100, 100, 100, 100, 100]
        }
    ]
};

let option_E = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        top: '0%',
        textStyle: {
            color: "rgba(255, 255, 255, .5)",
            fontSize: 12
        }
    },
    grid: {
        left: '10px',
        top: '30px',
        right: '10px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07",
            "08", "09", "10", "11", "12", "13", "14", "15", "16", "17",
            "18", "19", "20", "21", "22", "23", "24", "25", "26",
            "26", "28", "29", "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.2)"
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: { show: false },
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        },
        axisLabel: {
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12
            }
        },
        // 修改分割线的颜色
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        }
    }],
    series: [{
            name: 'A桩',
            type: 'line',
            // stack: '总量',
            areaStyle: {
                // 渐变色，只需要复制即可
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, [{
                            offset: 0,
                            color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            }, // 有 areaStyly 属性才会有背景颜色
            smooth: true, // 是否平滑显示
            lineStyle: {
                color: "#0184d5",
                width: 2
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20,
                40, 30, 40, 30, 40, 30, 40, 30, 60, 20,
                40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40
            ],
        },
        {
            name: 'B桩',
            type: 'line',
            // stack: '总量',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, [{
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            smooth: true, // 是否平滑显示
            lineStyle: {
                color: "#00d887",
                width: 2
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
            itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [130, 10, 20, 40, 30, 40, 80, 60, 20,
                40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40,
                80, 70, 30, 40, 30, 120, 20, 99, 50, 20
            ],
        }
    ]
};

let option_F = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //     left: 'center',
    //     top: 'bottom',
    // },
    series: [{
        name: '面积模式',
        type: 'pie',
        radius: ["10%", "70%"],
        center: ['50%', '50%'],
        // roseType: 'radius',
        roseType: 'area',
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
            fontSize: 10
        },
        // 文字与图形的连线
        labelLine: {
            show: true,
            length: 6,
            length2: 8
        },
        data: [
            { value: 20, name: '云南' },
            { value: 26, name: '北京' },
            { value: 24, name: '山东' },
            { value: 25, name: '河北' },
            { value: 20, name: '江苏' },
            { value: 25, name: '浙江' },
            { value: 30, name: '四川' },
            { value: 42, name: '湖北' }
        ]
    }]
}
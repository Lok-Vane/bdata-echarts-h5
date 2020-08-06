// document.addEventListener('DOMContentLoaded', function() {
//     (function() {
//         let t = null;
//         t = setTimeout(time, 1000);

//         function time() {
//             clearTimeout(t);
//             let date = new Date();
//             let tips = `当前时间：`;
//             let temp = `${date.getFullYear()}-
//                 ${(date.getMonth()+1).toString().padStart(2,'0')}-
//                 ${(date.getDate()).toString().padStart(2,'0')}`;
//             document.querySelector('.showTime').innerHTML = `${tips}${temp} 
//                 ${(date.getHours()).toString().padStart(2,'0')}:
//                 ${(date.getMinutes()).toString().padStart(2,'0')}:
//                 ${(date.getSeconds()).toString().padStart(2,'0')}`;
//             t = setTimeout(time, 1000);
//         }
//     })();

//     const echart_A = document.querySelector('.bar .A');
//     const echart_B = document.querySelector('.line .B');
//     const echart_C = document.querySelector('.pie .C');
//     const echart_D = document.querySelector('.bar .D');
//     const echart_E = document.querySelector('.line .E');
//     const echart_F = document.querySelector('.pie .F');
//     const echart_MAP = document.querySelector('.map .chart');

//     echartsInit(echart_A, option_A);

//     echartsInit(echart_B, option_B);
//     $('.line h3').on('click', 'a', function() { // 事件委托
//         option_B.series[0].data = yearData[$(this).index()].data[0];
//         option_B.series[1].data = yearData[$(this).index()].data[1];
//         $(this).addClass('active').siblings('a').removeClass('active');
//         echartsInit($('.line .B')[0], option_B);
//     });

//     echartsInit(echart_C, option_C);

//     echartsInit(echart_D, option_D);

//     echartsInit(echart_E, option_E);

//     echartsInit(echart_F, option_F);

//     echartsInit(echart_MAP, option_MAP);
// });

$(function() {
    (function() {
        let t = null;
        t = setTimeout(time, 1000);

        function time() {
            clearTimeout(t);
            let date = new Date();
            let tips = `当前时间：`;
            let temp = `${date.getFullYear()}-
                ${(date.getMonth()+1).toString().padStart(2,'0')}-
                ${(date.getDate()).toString().padStart(2,'0')}`;
            document.querySelector('.showTime').innerHTML = `${tips}${temp} 
                ${(date.getHours()).toString().padStart(2,'0')}:
                ${(date.getMinutes()).toString().padStart(2,'0')}:
                ${(date.getSeconds()).toString().padStart(2,'0')}`;
            t = setTimeout(time, 1000);
        }
    })();

    echartsInit($('.bar .A')[0], option_A);

    echartsInit($('.line .B')[0], option_B);
    $('.line h3').on('click', 'a', function() { // 事件委托
        option_B.series[0].data = yearData[$(this).index()].data[0];
        option_B.series[1].data = yearData[$(this).index()].data[1];
        $(this).addClass('active').siblings('a').removeClass('active');
        echartsInit($('.line .B')[0], option_B);
    });

    echartsInit($('.pie .C')[0], option_C);

    echartsInit($('.bar .D')[0], option_D);

    echartsInit($('.line .E')[0], option_E);

    echartsInit($('.pie .F')[0], option_F);

    echartsInit($('.map .chart')[0], option_MAP);
});
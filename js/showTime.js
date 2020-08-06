// document.addEventListener('DOMContentLoaded', function() {
//     let t = null;
//     t = setTimeout(time, 1000);

//     function time() {
//         clearTimeout(t);
//         let date = new Date();
//         let tips = `当前时间：`;
//         let temp = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,'0')}`;
//         document.querySelector('.showTime').innerHTML = `${tips}${temp} ${(date.getHours()).toString().padStart(2,'0')}:${(date.getMinutes()).toString().padStart(2,'0')}:${(date.getSeconds()).toString().padStart(2,'0')}`;
//         t = setTimeout(time, 1000);
//     }
// });

$(function() {
    let t = null;
    t = setTimeout(time, 1000);

    function time() {
        clearTimeout(t);
        let date = new Date();
        let tips = `当前时间：`;
        let temp = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,'0')}`;
        document.querySelector('.showTime').innerHTML = `${tips}${temp} ${(date.getHours()).toString().padStart(2,'0')}:${(date.getMinutes()).toString().padStart(2,'0')}:${(date.getSeconds()).toString().padStart(2,'0')}`;
        t = setTimeout(time, 1000);
    }
});
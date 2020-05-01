"use strict"

let x = document.querySelector('.xNumber');
let k = document.querySelector('.kNumber');
let show_res = document.querySelector('.show_res');
let cosinus = document.querySelector('.cosinus');

show_res.onclick = function () {
    let xnum = +x.value;
    let knum = +k.value;
    if (knum < 0) {
        alert("Ошибка! Введите положительное число");
    } else {
        let sum = 1;
        let term = 1;
        let fct;
        let y = 2;
        let m;
        for (let i = 1; i < knum; i++) {
            fct = 1;
            for (let j = 1; j <= y; j++){
                fct = fct * j;
            }
            term = term * (-1);
            m = term * Math.pow(xnum, y) / fct;
            sum = sum + m;
            y += 2;
        }
        cosinus.innerHTML = sum.toFixed(3);
    }
}
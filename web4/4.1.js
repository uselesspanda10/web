"use strict"

let lenght = document.querySelector('.lenght');
let height = document.querySelector('.height');
let result = document.querySelector('.show_result');
let p = document.querySelector('.result');
let clear = document.querySelector('.clear');

result.onclick = function () {
    let lenghtA = +lenght.value;
    let heightH = +height.value;
    if (lenghtA < 0) {
        alert("Ошибка! Введите положительное число");
    } else if (heightH < 0) {
        alert("Ошибка! Введите положительное число");
    } else {
        p.innerHTML = lenghtA * heightH;
    }
}

clear.onclick = function () {
    lenght.value = "";
    height.value = "";
    p.innerHTML = "";
}
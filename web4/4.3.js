"use spict"

let generate = document.querySelector('.generate');
let change = document.querySelector('.change');
let arr = [];

generate.onclick = function () {
    for (let i = 0; i < 8; i++) {
        arr[i] = [];
        for (let j = 0; j < 8; j++) {
            arr[i][j] = Math.round(Math.random() * (100 + 100) - 100);
        }
    }
    let html = '<table>';
    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('table').innerHTML = html;
}

change.onclick = function () {
    let max = 0;
    let td = 0;
    for (let i = 0; i < 8; i++) {
        let cur = 0;
        for (let j = 0; j < 8; j++) {
            if (arr[j][i] > 0) {
                cur ++;
            } 
        }
        if (cur > max) {
            max = cur;
            td = i;
        }
    }
    for (let i = 0; i < 8; i++) {
        let cur;
        cur = arr[i][td];
        arr[i][td] = arr[i][7-i];
        arr[i][7-i] = cur;
    }
    let html = '<table>';
    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('table').innerHTML = html;
}
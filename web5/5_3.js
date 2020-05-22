let table = [
    {
        text: 'Животные',
        children: [{
            text: 'Млекопитающие',
            children: [{ text: 'Коровы' }, { text: 'Ослы' },
            { text: 'Собаки' }, { text: 'Тигры' }]
        },
        {
            text: 'Другие',
            children: [{ text: 'Змеи' }, { text: 'Птицы' },
            { text: 'Ящерицы' },]
        }
        ]
    },
    {
        text: 'Рыбы',
        children: [{
            text: 'Аквариумные',
            children: [{ text: 'Гуппи' }, { text: 'Скалярии' }]
        },
        {
            text: 'Морские',
            children: [{ text: 'Морская форель' }]
        }
        ]
    }
];

let list = $('body');
function createList(table) {
    let ul = $('<ul>').appendTo(list)
    for (let i in table) {
        let li = $('<li>', {
            text: table[i]['text'],
            class: 'active',
        }).appendTo(ul);

        list = li;

        if (table[i]['children']) {
            createList(table[i]['children']);
        }
    }
}
createList(table)


$('li').each(function() {
    console.log(
        $(this).contents()[0],
        $(this).find('li').length
    );
});

$('li').click(function (event) {
    $(this).contents().slideToggle('fast');
    if ($(this).contents().length > 1) {
        $(this).toggleClass('passive');
    }
    event.stopPropagation();
});
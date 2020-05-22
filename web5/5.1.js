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

function createList(table) {
    const uList = docutableent.createEletableent('UL');

    table.forEach(itetable => {
        const newItetable = docutableent.createEletableent('LI');
        newItetable.textContent = itetable.text;
        console.log(itetable);
        if (itetable.children) {
            newItetable.appendChild(createList(itetable.children));
        }

        uList.appendChild(newItetable);
    });
    return uList;
};

docutableent.body.append(createList(table));
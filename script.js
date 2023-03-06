let minValueInput = prompt('Минимальное число для игры', '0');
let minValue = parseInt(  isNaN(minValueInput) ? '0': minValueInput);
let maxValue = parseInt(prompt('Максимальное число для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

const button = document.getElementById('btnRetry');

function startGame () {
    minValue = parseInt(prompt('Минимальное число для игры', '0'));
    maxValue = parseInt(prompt('Максимальное число для игры', '100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    gameRun = true;
}

button.addEventListener('click', resetGame); 

function resetGame () {
    startGame ();
    console.log('Yes');
    orderNumber = 0;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
}

document.getElementById('btnRetry').addEventListener('click', function resetGame () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    answerNumber = Math.floor((minValue + maxValue) / 2);
})

let randomPhrase = function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    console.log(Math.floor(Math.random() * (max - min +1)+ min));
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)+ min);
}

function getRandomFailPhrase () {
    var randomValue = randomPhrase(1, 8);

    switch (randomValue) {
        case 1:
            answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            break;
        case 2:
            answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
            break;
        case 3:
            answerField.innerText = `Ты вообще загадал число?\n\u{1F92D}`;
            break;
        case 4:
            answerField.innerText = `Не получилось. Ничего, попробуем в другой раз!\n\u{1F643}`;
            break;
        case 5:
            answerField.innerText = `Это неизвестное мне число\n\u{1FAE2}`;
            break;
        case 6:
            answerField.innerText = `На самом деле я не умею считать\n\u{1F92B}`;
            break;
        case 7:
            answerField.innerText = `Сегодня не мой день\n\u{1F972}`;
            break;
        case 8:
            answerField.innerText = `Это слишком сложно\n\u{1FAE0}`;
            break;
    }
}

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
       if (minValue === maxValue) {
            getRandomFailPhrase  ();
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        maxValue = answerNumber;
        if (minValue === maxValue) {
            getRandomFailPhrase  ();
            gameRun = false;
        } else {
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase = (phraseRandom === 2)
document.getElementById('btnEqual').addEventListener('click', function () {
   
   if (orderNumberField.innerText = orderNumber) {
    const phraseRandom = Math.round(Math.random() * 3);
    const answerPhrase = (phraseRandom === 2) ?
        `Я всегда угадываю\n\u{1F60E}`:
        `А я еще ничего\n\u{1F60F}`;
    const answerPhrase1 = (phraseRandom === 1) ?
        `Мне понравилось, давай еще раз!\n\u{1F913}`:
    answerField.innerText = answerPhrase;
    answerField.innerText = answerPhrase1;
    gameRun = false;
   }
})


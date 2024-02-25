// Находим элменты на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')


// Отслеживаем клик на кнопку минус
btnMinus.addEventListener('click', () => {
    // Проверяем, что бы счётчик был больше еденицы
    if ( parseInt(counter.innerText) > 1 ) {
        // Изменяем текст в счетчике на еденицу
        counter.innerText = --counter.innerText
    }
})

// Отслеживаем клик на кнопку плюс
btnPlus.addEventListener('click', () => {
    counter.innerText = ++counter.innerText 
})


// Добавляем прослушку на всё окно
window.addEventListener("click", (event) => {

    // Обьявляем переменную для счётчика
    let counet;
    
    // Проверяем клик строго по кнопкам Плюс либо Минус
    if ( event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
        // Находим обёртку счетчика
        const counterWrapper = event.target.closest(".counter-wrapper");

        // Находим див с числом счетчика
        counter = counterWrapper.querySelector("[data-counter]");
    }

   
    


  // Проверяем является ли элемент кнопкой Плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText
  }

  // Проверяем является ли элемент кнопкой Минус
  if (event.target.dataset.action === "minus") {


    // Проверяем что бы счётчик был больше 1
    if( parseInt(counter.innerText) > 1 ) {
      // Изменяем текст в счетчике, уменьшая его на еденицу
        counter.innerText = --counter.innerText
        // Проверка на товар который находится в корзине
    } else if ( event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
       // Удаляем товар из корзины
       event.target.closest('.cart-item').remove();


       
        // Отображение статуса корзины Пустая / Полная
       toggleCartStatus()

       calcCartPriceAndDelivery()
    }
    
    
    
  }

  // Проверяем клик на плюс или минус внутри корзины
  if ( event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper') ) {
    calcCartPriceAndDelivery()
  }
});

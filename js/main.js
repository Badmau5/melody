$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каджый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */

  // функция при наведении мыши на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляет активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записывает значение текущего этажа в счетчик справа
  });

  counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
    
    if (currentFloor < 18) { // максимальное значение счетчика этажей
      
      currentFloor++; // прибавили один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }); // форматируем переменную с этажом что бы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записывает значение текущего этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляет активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечивает текущий этаж
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});

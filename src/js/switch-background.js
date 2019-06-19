// <!-- Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение
//  из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), 
// используй функцию randomIntegerFromInterval.

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const body = document.querySelector('body');
  const startBtn = document.querySelector(".js-start");
  const stopBtn = document.querySelector(".js-stop");

  let interval = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function chengeBackground(){
  const colorItem = colors.forEach(el => console.log(el));
  body.style.background = colorItem;
}

  // isActive: false;
  // if(!isActive)
  // isActive: true;


startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
  console.log('New Color!')
}, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  console.log("stopped setting color!");
});

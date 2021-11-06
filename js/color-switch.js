const refs = {
  colors: [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ],
  body: document.querySelector('body'),
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]'),
  randomIntegerFromInterval: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  changeColor() {
    newColor = this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
    if (newColor === currentColor) {
      newColor = this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
      this.body.style.background = newColor;
    } else {
      this.body.style.background = newColor;
      currentColor = newColor;
    }
  },
};

let currentColor, newColor = '#FFFFFF';
let timerId = null;

refs.startButton.addEventListener("click", () => {
  refs.startButton.setAttribute("disabled", true);
  timerId = setInterval(() => {
  refs.changeColor();
  }, 1000);
});

refs.stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  refs.startButton.removeAttribute("disabled");
});
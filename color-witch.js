const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalID = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function alternateBodyColor() {
  let currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  bodyRef.style.backgroundColor = currentColor;
}

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action=start]');
const btnStopRef = document.querySelector('[data-action=stop]');

console.log(bodyRef, '\n', btnStartRef, '\n', btnStopRef);
console.log(btnStartRef.attributes);

function hndlStarpUp() {
  if (btnStartRef.hasAttribute('disabled')) {
    btnStartRef.toggleAttribute('disabled');
  }
  if (!btnStopRef.hasAttribute('disabled')) {
    btnStopRef.toggleAttribute('disabled');
  }
}
function hndlStartBtn(event) {
  if (!btnStartRef.hasAttribute('disabled')) {
    btnStartRef.toggleAttribute('disabled');
  }
  if (btnStopRef.hasAttribute('disabled')) {
    btnStopRef.toggleAttribute('disabled');
  }

  // console.log(bodyRef.style.backgroundColor);
  intervalID = setInterval(alternateBodyColor, 1000);
}
function hndlStopBtn(event) {
  if (btnStartRef.hasAttribute('disabled')) {
    btnStartRef.toggleAttribute('disabled');
  }
  if (!btnStopRef.hasAttribute('disabled')) {
    btnStopRef.toggleAttribute('disabled');
  }
  clearInterval(intervalID);
}
addEventListener('load', hndlStarpUp);
btnStartRef.addEventListener('click', hndlStartBtn);
btnStopRef.addEventListener('click', hndlStopBtn);

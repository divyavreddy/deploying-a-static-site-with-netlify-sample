const ballotButton = document.getElementById('ballot-button');
const voteSelection1 = document.getElementById('option1');
const voteSelection2 = document.getElementById('option2');

voteSelection1.addEventsListener('click', switchBackground);
voteSelection2.addEventsListener('click', switchBackground);
ballotButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}
/*
function changeBackground1() {
  const red = 240;
  const green = 255;
  const blue = 255;
  const color = `rgb(${red}, ${green}, ${blue})`;
  const backgroundColor1 = color;
  document.body.style.backgroundColor1 = backgroundColor1;
}

function changeBackground2() {
  const red = 255;
  const green = 0;
  const blue = 0;
  const color = `rgb(${red}, ${green}, ${blue})`;
  const backgroundColor2 = color;
  document.body.style.backgroundColor2 = backgroundColor2;
}*/

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

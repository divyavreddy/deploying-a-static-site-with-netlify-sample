const ballotButton = document.getElementById('ballot-button');
const voteSelection1 = document.getElementById('option1');
const voteSelection2 = document.getElementById('option2');

voteSelection1.addEventsListener('click', changeBackground1);
voteSelection2.addEventsListener('click', changeBackground2);
ballotButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function changeBackground1() {
  const backgroundColor = rgb(240, 255, 255);
  document.body.style.backgroundColor = backgroundColor;
}

function changeBackground2() {
  const backgroundColor = rgb(255, 0, 0);
  document.body.style.backgroundColor = backgroundColor;
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

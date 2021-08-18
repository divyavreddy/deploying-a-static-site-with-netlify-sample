const ballotButton = document.getElementById('ballot-button');
const voteSelection = document.getElementById('options');

voteSelection.addEventsListener('click');
ballotButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}
/*
function tally() {
  const list = voteSelection;
  document.body
}*/

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

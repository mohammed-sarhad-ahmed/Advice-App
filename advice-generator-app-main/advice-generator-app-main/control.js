const dice = document.querySelector(".Dice");
const Advice = document.querySelector(".Advice");
const ID = document.querySelector("#Advice-Id");
const state = {
  id: "",
  advice: "",
};
dice.addEventListener("click", GetQuote);
async function GetQuote() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  state.advice = data.slip.advice;
  state.id = data.slip.id;
  render();
}
function render() {
  Advice.innerText = state.advice;
  ID.innerText = state.id;
}

const text =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, dolorem sequi ipsum perferendis incidunt consectetur architecto rem saepe amet nihil!";

const spanText = document.querySelector(".text");
let indexText = 0;
const time = 40;
const indexNumber = () => {
  spanText.textContent += text[indexText];
  indexText++;
  if (indexText == text.length) {
    clearInterval(index);
  }
};
const index = setInterval(indexNumber, time);

const mark = document.querySelector(".mark");

const appear = () => {
  mark.classList.toggle("appear");
};

setInterval(appear, 400);

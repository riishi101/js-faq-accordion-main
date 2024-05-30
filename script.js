const plusCheck = document.getElementsByClassName("plus");
const minusCheck = document.getElementsByClassName("minus");
const answerCheck = document.getElementsByClassName("faq-answer");

for (let i = 0; i < plusCheck.length; i++) {
  let plus = plusCheck[i];
  let minus = minusCheck[i];
  let answer = answerCheck[i];

  plus.addEventListener("click", () => {
    plus.style.display = "none";
    answer.style.display = "flex";
    minus.style.display = "flex";
  });

  minus.addEventListener("click", () => {
    minus.style.display = "none";
    answer.style.display = "none";
    plus.style.display = "flex";
  });
}

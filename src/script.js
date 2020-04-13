var button = document.querySelector("button");
button.addEventListener("click", function () {
  const result = document.querySelector("#result");
  let score = 0;

  let q1GivenAnswer; // this is where the givem answer to q1 will be stored
  const q1Radios = document.querySelectorAll(".q1"); // Grab all the radio boxes for g1

  //Determine which of that ratio boxes for q1 is checked and set it value to the given answer
  q1Radios.forEach((radio) => {
    if (radio.checked) {
      q1GivenAnswer = radio.value;
    }
  });

  // Check if given answer matches the correct answer and update score
  if (q1GivenAnswer === "a") score++;

  // var q2Radios = document.querySelectorAll(".q2");
  // var q3Radios = document.querySelectorAll(".q3");

  // var question1 = document.getElementById("one").value;
  // console.log(question1);
  // var question2 = document.getElementById("two").value;
  // console.log(question2);
  // var question3 = document.getElementById("three").value;
  // console.log(question3);
  // var result = document.getElementById("result");
  // var myanswer = document.getElementById("totale");
  // if (question1 === "q1a") {
  //   currentmarks++;
  // }
  // if (question2 === "q2a") {
  //   currentmarks++;
  // }
  // if (question3 === "q3a") {
  //   currentmarks++;
  // }

  result.innerHTML = `${"YOUR MARKS: " + score}`;
  // myanswer.innerHTML = `${"Total Correct Answer : " + youranswer}`;
});

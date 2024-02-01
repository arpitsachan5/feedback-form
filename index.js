let starsContainer = document.getElementById("stars");
let active = -1;
let ratings = [];


function resetStars() {
   active = -1;
   for (let i = 0; i < 5; i++) {
       stars[i].src = "./1088px-Five-pointed_star.svg.png";
   }
   document.getElementById("display-star-value").innerHTML = ""; // Reset displayed value
}

for (let i = 0; i < 5; i++)
 {
    let starImg = document.createElement("img");
    starImg.src = "./1088px-Five-pointed_star.svg.png";
    starImg.className = "star-style";
    starsContainer.appendChild(starImg);
    starImg.addEventListener("mouseover" , () => onStartHover(i));
    starImg.addEventListener("mouseleave" , onStarOut);
    starImg.addEventListener( "click" , () => onStarClick(i));
 }

 let stars = document.querySelectorAll(".star-style");

 function onStartHover(i) {
    fill(i)

 }

 function fill(ratingValue) {
    for(let i = 0; i<5 ; i++ ) {
        if(i<=ratingValue) {
            stars[i].src = "./1117px-Orange_star.svg.png"
        } else {
            stars[i].src = "./1088px-Five-pointed_star.svg.png";
        }
    }

 }

 function onStarOut() {
    fill(active);

 }

 function onStarClick(i) {
    active= i;
    let j = i+1;
    if (j == 1) {
      document.getElementById("display-star-value").innerHTML = "Strongly Disagree";
    }
    if (j == 2) {
      document.getElementById("display-star-value").innerHTML = "Slightly Disagree";
    }
    if (j == 3) {
      document.getElementById("display-star-value").innerHTML = "Neutral";
    }
    if (j == 4) {
      document.getElementById("display-star-value").innerHTML = "Slightly Agree";
    }
    if (j == 5) {
      document.getElementById("display-star-value").innerHTML = "Strongly Agree ";
    }

    console.log("Rating for question", currentQuestionIndex + 1, "is:", j);
    ratings[currentQuestionIndex] = j;

    console.log(j);
    fill(active);
 }

 const questions = [
   "Interview process was smooth?",
   "I was told what was expected from me during the interview?",
   "Interviewer has explained edvi's operating model and I understood it well?",
   "Please rate the interviewer based on communication, clarity of thoughts etc.",
   "How would you rate the interviewer's ability to answer your questions?",
];
let currentQuestionIndex = 0;
function changeQuestion() {
   const questionContainer = document.getElementById("question-container");
   const questionElement = document.getElementById("question");
   const nextButton = document.getElementById("nextButton");

   if (currentQuestionIndex > 0 && ratings[currentQuestionIndex - 1] === undefined) {
      alert("Please answer the current question before moving to the next one.");
      return;
  }
   resetStars();
   currentQuestionIndex++;
   if (currentQuestionIndex <= questions.length) {
      if (currentQuestionIndex < questions.length) {
          questionElement.innerText = `Question ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex]}`;
      } else {
          questionContainer.innerHTML = "<p>Thank you for answering all questions!</p>";
          console.log("Ratings for each question:", ratings);
          return;
      }

      nextButton.innerText = "Next";
  }
}

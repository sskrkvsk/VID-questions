//using selectors inside the element
// traversing the dom

// first method
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     let parent = event.currentTarget.parentElement.parentElement;
//     parent.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");

// in each article we selecting it's button and adding an EventListenet to it that adds the class to artile
questions.forEach((question) => {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

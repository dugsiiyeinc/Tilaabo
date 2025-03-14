// const todoBtn = [...document.querySelectorAll(".todo-btn")];

document.body.addEventListener("click", (e) => {
  //   console.log(
  //     e.target.className !== "box-btn-btn box-btn todo-btn" &&
  //       e.target.className !== "box-btn-bottom box-btn todo-btn"
  //   );
  if (
    e.target.className !== "box-btn-btn box-btn todo-btn" &&
    e.target.className !== "box-btn-bottom box-btn todo-btn"
  )
    return;

  generateHtml();
});

const generateHtml = () => {
  const textBox = document.querySelector(".text-card");
  const textCard = document.createElement("div");
  textCard.classList.add("box-card");
  //   textCard.style.marginBottom = "12px";

  const h3 = document.createElement("h3");
  h3.className = "bottom-dash-box-title";
  h3.textContent = "Daily Exercise Routine";

  const p = document.createElement("p");
  p.className = "bottom-dash-box-desc";
  p.textContent =
    "Successfully built a habit of exercising for 30 minutes every day to stay fit and energized.";

  textCard.append(h3, p);
  textBox.appendChild(textCard);

  console.log(textCard);
};

// const classNames = (nameClass) => {

// }

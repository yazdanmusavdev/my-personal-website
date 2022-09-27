const menue = document.querySelector("#menue");
const list = document.querySelector(".list");
const cross = document.querySelector("#close");
const navbar = document.querySelector("#navbar");

let isOpen = false;
menue.addEventListener("click", () => {
  list.style.display = "block";
  menue.style.margin = "20px";
  isOpen = true;
  if (isOpen) {
    menue.style.display = "none";
    cross.style.display = "block";
  }
});

cross.addEventListener("click", () => {
  list.style.display = "none";
  menue.style.display = "block";
  cross.style.display = "none";
});
// end of mobile navbar

// accordion section
const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

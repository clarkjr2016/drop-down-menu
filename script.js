const dropBtn = document.querySelectorAll(".dropbtn");

dropBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dropdownContent = e.target.nextElementSibling;
    dropdownContent.classList.toggle("hide");
  });
});

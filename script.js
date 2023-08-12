const navBar = document.querySelector("nav"); //selecting the whole navbar

const foundationLinks = navBar.querySelectorAll("ul"); //selecting all of the ul links and collects them in a nodelist

foundationLinks.forEach((link) => {
  const childLinks = document.querySelectorAll(".childlinks");
  childLinks.forEach((childlink) => {
    childlink.style.display = "none";
  });
}); // this loops through the collection of foundation links and then through the child links and then hides all of them upon the screen loading

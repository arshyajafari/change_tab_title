const focusPage = document.title;
var faviconLink = document.querySelector("link[rel='icon']");

window.addEventListener("blur", () => {
  faviconLink.href = "./img/sad.svg";
  document.title = "Come back!";
});

window.addEventListener("focus", () => {
  faviconLink.href = "./img/happy.svg";
  document.title = focusPage;
});

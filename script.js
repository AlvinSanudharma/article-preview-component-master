const share = document.querySelector(".share");
const shareIcon = document.querySelector(".share-img");

shareIcon.addEventListener("click", function (e) {
  if (e.target === shareIcon) {
    if (window.innerWidth <= 750) {
      share.classList.toggle("active-share-mobile");
      return;
    }
    share.classList.toggle("active-share-desktop");
  }
});

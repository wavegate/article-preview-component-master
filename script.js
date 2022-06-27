const tooltip = document.getElementById("tooltip");
const shareButton = document.getElementById("shareButton");
const main = document.getElementById("main");
const textSection = document.getElementById("textSection");

shareButton.addEventListener("click", () => {
  tooltip.style.display = "flex";
  shareButton.classList.add("selected");
  if (matchMedia("(max-width: 375px)").matches) {
    textSection.style.paddingBottom = "14px";
  }
});

addEventListener("click", (event) => {
  if (!tooltip.contains(event.target) && !shareButton.contains(event.target)) {
    tooltip.style.display = "none";
    shareButton.classList.remove("selected");
    if (matchMedia("(max-width: 375px)").matches) {
      textSection.style.paddingBottom = "24px";
    }
  }
});

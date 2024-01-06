const initialSlider = () => {
  const slideButtons = document.querySelectorAll(".flow-button");
  const imageList = document.querySelector(".image-list");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-silde" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};

window.addEventListener("load", initialSlider);

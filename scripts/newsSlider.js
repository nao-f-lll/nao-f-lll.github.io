const initialNewsSlider = () => {
  const slideButtons = document.querySelectorAll(".news-flow-button");
  const imageList = document.querySelector(".news-image-list");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "news-prev-silde" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleNewsSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleNewsSlideButtons();
  });
};

window.addEventListener("load", initialNewsSlider);

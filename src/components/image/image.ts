document
  .querySelectorAll<HTMLDivElement>(".img-wrapper")
  .forEach((imgWrapper) => {
    const showBlurredImage =
      imgWrapper.getAttribute("data-blurred-image") === "true";
    const originalImg = imgWrapper?.querySelector<HTMLImageElement>("img");
    // Creating a new image for setting the loaded state
    const newImage = new Image();
    newImage.src = originalImg?.src ?? "";
    newImage.onload = () => originalImg?.setAttribute("data-loaded", "true");
    // Creating blurred image when showBlurredImage is true
    if (showBlurredImage) {
      // Cloning the original image
      const clonedImg = originalImg?.cloneNode(true) as HTMLImageElement;
      clonedImg.className = `blurred-img ${
        // For customization
        imgWrapper.getAttribute("data-blurredImg-className") || ""
      }`;

      clonedImg.ariaHidden = "true"; // For accessibility
      imgWrapper.appendChild(clonedImg);
    }
  });

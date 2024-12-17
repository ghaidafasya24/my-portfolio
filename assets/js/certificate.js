 // Show the modal with animation
 function showImageModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = imageSrc;
    modal.classList.remove("hidden");
    setTimeout(() => {
      modalContent.classList.add("scale-100", "opacity-100");
      modalContent.classList.remove("scale-95", "opacity-0");
    }, 50);
  }

  // Close the modal with animation
  function closeImageModal() {
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.classList.add("scale-95", "opacity-0");
    modalContent.classList.remove("scale-100", "opacity-100");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300); // Match animation duration
  }
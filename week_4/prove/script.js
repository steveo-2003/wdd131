document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <button class="close-btn" aria-label="Close Modal">&times;</button>
        <img src="" alt="Full Image">
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector("img");
    const closeButton = modal.querySelector(".close-btn");

    galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
            modalImage.src = img.src.replace("norris-sm.jpg", "norris-full.jpg");
            modal.style.display = "flex";
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
        modalImage.src = "";
    };

    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
});

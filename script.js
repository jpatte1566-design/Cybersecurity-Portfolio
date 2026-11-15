
document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".travel-photo");

    photos.forEach(function (photo) {
        photo.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";

            const enlargedPhoto = document.createElement("img");
            enlargedPhoto.src = photo.src;
            enlargedPhoto.alt = photo.alt;

            lightbox.appendChild(enlargedPhoto);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});

const carouselImages = document.querySelectorAll('.carousel-image');
        let currentIndex = 0;

        function showImage(index) {
            carouselImages.forEach((image, idx) => {
                if (idx === index) {
                    image.style.opacity = 1;
                } else {
                    image.style.opacity = 0;
                }
            });
        }

        function changeImage() {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            showImage(currentIndex);
        }

        setInterval(changeImage, 3000); // Change image every 3 seconds
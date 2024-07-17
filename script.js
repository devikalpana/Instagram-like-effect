document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const heartOverlay = document.querySelector('.heart-overlay');

    imageContainer.addEventListener('dblclick', () => {
        heartOverlay.classList.add('active');
        setTimeout(() => {
            heartOverlay.classList.remove('active');
        }, 500);
    });
});
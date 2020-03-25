let preloaderBlock = document.querySelector('.preloader');


window.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        preloaderBlock.style.transition = 'cubic-bezier(0.65, 0.04, 0.4, 1.08) 0.3s';
        preloaderBlock.style.transform = 'translateY(-100%)';
        // preloaderBlock.style.display = 'none';
    }, 5000);
});
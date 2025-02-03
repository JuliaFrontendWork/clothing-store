function accordion() {
    const btns = document.querySelectorAll('.mobile-links__main-btn'); 
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const content = btn.nextElementSibling;
            const svgIcon = btn.querySelector('.icon.icon--arrov');
            
            if (content) {
                content.classList.toggle('mobile-sub-list--hide');
            }
            
            if (svgIcon) {
                svgIcon.classList.toggle('icon--arrov--active'); 
            }
        });
    });
}

export default accordion;
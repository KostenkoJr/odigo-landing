(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.scrollY > 50)
        {
            header.classList.add('header_scroll_active');
        }
        else {
            header.classList.remove('header_scroll_active');
        }
    };
})();
const links = document.querySelectorAll('.menu__link');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        event.target.closest('.menu__item').childNodes.forEach(node => {
            if (node.classList?.contains('menu_active')) {
                node.classList.remove('menu_active');
            } else if (node.classList?.contains('menu_sub')) {
                node.classList.add('menu_active');
            } 
        });
    })
});

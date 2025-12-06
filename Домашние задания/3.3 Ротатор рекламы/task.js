const rotatorCases = document.querySelectorAll('.rotator__case');

setInterval(_ => {
    const currentCase = document.querySelectorAll('.rotator__case_active')[0];
    currentCase.classList.remove('rotator__case_active');
    if (currentCase.nextSibling.nextElementSibling) {
        currentCase.nextSibling.nextElementSibling.classList.add('rotator__case_active');
    } else {
        rotatorCases[0].classList.add('rotator__case_active');
    }
}, 1000);
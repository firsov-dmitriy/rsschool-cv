const onClockHeaderNavItem = () => {
    const headerNav = document.querySelector('.header-nav');

    if (!headerNav) return;

    headerNav.addEventListener('click', (e) => {
        const currentSelectItems = document.querySelectorAll('.header-nav__active');
        const clickedElement = e.target;


        if (!clickedElement) return;



        if (!clickedElement.classList.contains('header-nav__list')) {
            currentSelectItems.forEach((item) => {
                item.classList.remove('header-nav__active');
            });
            clickedElement.classList.add('header-nav__active');

        }
    });
};

onClockHeaderNavItem();
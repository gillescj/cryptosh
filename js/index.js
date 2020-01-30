import { elements } from "./views/base.js";

// Events

elements.sideNavBtn.addEventListener('click', () => {
    elements.sideNav.style.visibility = 'visible';
});

elements.sideNavClose.addEventListener('click', () => {
    elements.sideNav.style.visibility = 'hidden';
});

elements.sideNavOption.forEach(option => {
    option.addEventListener('click', () => {
        elements.sideNav.style.visibility = 'hidden';
    });
});

import '../style/style.scss';
import { elements } from './views/base.js';

import AOS from 'aos';

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

// AOS.init({
//     once: true,
//     duration: 1000,
//     delay: 0
// });

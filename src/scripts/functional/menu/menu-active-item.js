// Active menu item
import React, { useEffect } from 'react';

const ScrollComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = window.scrollY;
            const blocks = document.querySelectorAll('.block-bg');
            const headerHeight = document.querySelector('.header').clientHeight;

            blocks.forEach((el, i) => {
                if (el.offsetTop - headerHeight <= scrollDistance) {
                    const menuLinks = document.querySelectorAll('.menu a');
                    menuLinks.forEach((el) => el.classList.remove('active'));

                    const activeLink = document.querySelectorAll('.menu li')[i].querySelector('a');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div></div>
};

export default ScrollComponent;

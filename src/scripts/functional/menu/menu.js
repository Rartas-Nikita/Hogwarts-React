import React, { useEffect } from 'react';

const MobileMenu = () => {
  const openMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      mobileMenu.style.visibility = 'inherit';
      mobileMenu.style.opacity = 1;
    }
  };

  const closeMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      mobileMenu.style.visibility = 'hidden';
      mobileMenu.style.opacity = 0;
    }
  };

  const checkMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
      if (mobileMenu.style.visibility === 'hidden') {
        openMenu();
      } else {
        closeMenu();
      }
    }
  };

  const handleClick = (event) => {
    const classClicked = event.target.className;
    if (classClicked === 'mobile-menu') closeMenu();
    if (classClicked === 'logo__img mobile') checkMenu();
  };

  useEffect(() => {
    const menuLink = document.querySelectorAll('.menu__link');

    const handleLinkClick = () => {
      closeMenu();
    };

    menuLink.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    document.addEventListener('click', handleClick);

    return () => {
      menuLink.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });

      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div></div>;
};

export default MobileMenu;








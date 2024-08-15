import React, { useEffect } from 'react';

const ModalFunctional = () => {
    const closeModal = () => {
        const modalElem = document.querySelector('.modal');
        if (modalElem) {
            modalElem.style.visibility = 'hidden';
            modalElem.style.opacity = 0;
        }
    };

    const openModal = () => {
        const modalElem = document.querySelector('.modal');
        if (modalElem) {
            modalElem.style.visibility = 'visible';
            modalElem.style.opacity = 1;
        }
    };

    const handleClick = (event) => {
        const classClicked = event.target.className;
        if (classClicked === 'modal' || classClicked === 'modal__close') {
            closeModal();
        }
    };

    useEffect(() => {
        const buttonElems = document.querySelectorAll('.btn');
        buttonElems.forEach((btn) => {
            btn.addEventListener('click', openModal);
        });

        document.addEventListener('click', handleClick, false);

        return () => {
            buttonElems.forEach((btn) => {
                btn.removeEventListener('click', openModal);
            });

            document.removeEventListener('click', handleClick, false);
        };
    }, []);
    return (<div>
    </div>);
};

export default ModalFunctional;
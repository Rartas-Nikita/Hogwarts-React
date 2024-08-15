import React, { useEffect } from 'react';

const YourComponent = () => {

  useEffect(() => {
    const formsButton = document.querySelectorAll('.contacts_button');
    const inputs = document.querySelectorAll('input');
    const popupAlert = document.querySelector('.popup-alert');
    const popupInner = document.querySelector('.popup-alert__inner');
    const form = document.querySelectorAll('.form');

    const serializeForm = (event) => {
      let name = event.target.querySelector('[name="name"]').value;
      let child_name = event.target.querySelector('[name="child_name"]').value;
      let child_age = event.target.querySelector('[name="child_age"]').value;
      let phone_number = event.target.querySelector('[name="phone_number"]').value;
      return { name, child_name, child_age, phone_number };
    };

    const closeModal = () => {
    document.querySelector('.modal').style.visibility = 'hidden';
    document.querySelector('.modal').style.opacity = 0;
    }

    const clearForm = () => {
      inputs.forEach((inp) => {
        inp.value = '';
      });
      formsButton.forEach((btn) => {
        btn.value = 'Отправить';
        btn.style.color = 'gray';
        btn.style.boxShadow = 'none';
      });
    };

    async function popupForm(msg, visibility, opacity) {
      popupInner.innerHTML = msg;
      popupAlert.style.visibility = visibility;
      popupAlert.style.opacity = opacity;
    }

    async function sendData(data) {
      return await fetch('https://school-hogwarts.online/api/v1/request/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    }

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      let data = serializeForm(event);
      formsButton.forEach((btn) => {
        btn.value = 'Отправка...';
      });
        const response = await sendData(data);
        formsButton.forEach((btn) => {
          btn.value = 'Отправить';
        });
        if (response.status === 200) {
          let msg = 'Благодарим за заявку! Мы свяжемся с Вами в ближайшее время!';
          popupForm(msg, 'visible', 1);
          setInterval(() => popupForm(msg, 'hidden', 0), 3000);
          clearForm();
          closeModal();
        } else {
          let msg = 'Ошибка отправки. Попробуйте еще раз.';
          popupForm(msg, 'visible', 1);
          setInterval(() => popupForm(msg, 'hidden', 0), 3000);
        }
    };

    const checkValidity = (event) => {
      const formNode = event.target.form;
      const isValid = formNode.checkValidity();
      formNode.querySelectorAll('.contacts__button').disabled = !isValid;

      if (isValid) {
        formsButton.forEach((btn) => {
          btn.style.color = '#000';
          btn.style.boxShadow = '0px 4px 15px 0px rgba(0, 0, 0, 0.35)';
        });
      } else {
        formsButton.forEach((btn) => {
          btn.style.color = 'gray';
          btn.style.boxShadow = 'none';
        });
      }

      formNode.querySelectorAll('.contacts_button').disabled = !isValid;
    };

    form.forEach((frm) => {
      frm.addEventListener('input', checkValidity);
      frm.addEventListener('submit', handleFormSubmit);
    });

    return () => {
      form.forEach((frm) => {
        frm.removeEventListener('input', checkValidity);
        frm.removeEventListener('submit', handleFormSubmit);
      });
    };
  }, []);

  return <div></div>; 
};

export default YourComponent;
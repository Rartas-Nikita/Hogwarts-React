import React, { useEffect } from 'react';
import IMask from 'imask'; 

const PhoneMask = () => {
  useEffect(() => {
    const phoneInputs = document.querySelectorAll('.telephone');
    phoneInputs.forEach((input) => {
      IMask(input, { mask: '+7 000 000-00-00' });
    });
  }, []);
  return (<div>
  </div>)
};

export default PhoneMask;
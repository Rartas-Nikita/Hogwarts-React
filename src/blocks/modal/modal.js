import React from 'react'
import PhoneMask from '../../scripts/functional/modal/phone-mask'
import '../../style/elements/modal.css'

function Modal() {
    return (  
        <div>
            <div className="modal">
                <form className="modal__container substrate form">
                    <p className="contacts__appellation  appellation">Заполните небольшую анкету, и Вам позвонят!</p>
                    <div className="contacts__application">
                        <p className="contacts__application-text">Имя родителя</p>
                        <input className="contacts__application-value" name="name" type="text" placeholder="Введите имя родителя" required />
                    </div>
                    <div className="contacts__application">
                        <p className="contacts__application-text">Имя ребенка</p>
                        <input className="contacts__application-value" name="child_name" type="text" placeholder="Введите имя ребенка" required />
                    </div>
                    <div className="contacts__application">
                        <p className="contacts__application-text">Возраст ребенка</p>
                        <input className="contacts__application-value" name="child_age" type="number" placeholder="Введите возраст ребенка" required />
                    </div>
                    <div className="contacts__application">
                        <p className="contacts__application-text">Телефон</p>
                        <input className="contacts__application-value telephone" type="tel" name="phone_number" placeholder="Введите номер телефона" required />
                    </div>
                    <input className="contacts_button button" type="submit" value="Отправить" />
                    <button type="button" className="modal__close">&#10006;</button>
                </form>
            </div>
            <PhoneMask/>
        </div>
    )
}

export default Modal
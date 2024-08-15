import React from 'react'
import '../../style/blocks/contacts.css'
import label from '../../image/contacts/label.png'
import telephone from '../../image/contacts/telephone.png'
import watch from '../../image/contacts/watch.png'

function Contacts() {
    return (
        <div>
            <div>
                <div className="contacts block-bg" id="contacts">
                    <div className="container">
                        <div className="contacts__title title">Где наша платформа 9¾?</div>
                        <div className="contacts__info">
                            <div className="contacts__column substrate">
                                <div className="contacts__map" style={{ position: "relative", overflow: "hidden" }}><a href="https://yandex.ru/maps/org/hogwarts/28997433433/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Hogwarts</a><a href="https://yandex.ru/maps/39/rostov-na-donu/category/foreign_language_courses/184106160/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Курсы иностранных языков в Ростове‑на‑Дону</a><iframe src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.713530%2C47.223143&mode=search&oid=28997433433&ol=biz&source=mapframe&utm_source=mapframe&z=16.68" width="100%" height="100%" frameBorder="1" allowFullScreen={true} style={{ position: "relative" }}></iframe></div>
                                <div className="contacts__list">
                                    <img className="contacts__img" src={label} />
                                    <a href="https://yandex.ru/maps/-/CDUAnGnk" target="_blank" className="contacts__text">г. Ростов-на-Дону, пер. Семашко 48А, 2 этаж, офис 4</a>
                                </div>
                                <div className="contacts__list">
                                    <img className="contacts__img" src={telephone} />
                                    <span className="contacts__text"><a href="tel:+79934567595">+7 (993) 456-75-95</a></span>
                                </div>
                                <div className="contacts__list">
                                    <img className="contacts__img" src={watch} />
                                    <span className="contacts__text">пн-пт 9:00-20:00</span>
                                </div>
                            </div>
                            <form className="contacts__form form" name="costdata">
                                <p className="contacts__appellation appellation">Заполните небольшую анкету, и Вам позвонят!</p>
                                <div className="contacts__application">
                                    <p className="contacts__application-text">Имя родителя</p>
                                    <input className="contacts__application-value" type="text" name="name" placeholder="Введите имя родителя" required />
                                </div>
                                <div className="contacts__application">
                                    <p className="contacts__application-text">Имя ребенка</p>
                                    <input className="contacts__application-value" type="text" name="child_name" placeholder="Введите имя ребенка" required />
                                </div>
                                <div className="contacts__application">
                                    <p className="contacts__application-text">Возраст ребенка</p>
                                    <input className="contacts__application-value" type="number" name="child_age" placeholder="Введите возраст ребенка" required />
                                </div>
                                <div className="contacts__application">
                                    <p className="contacts__application-text">Телефон</p>
                                    <input className="contacts__application-value telephone" type="tel" name="phone_number" placeholder="Введите номер телефона" required />
                                </div>
                                <input className="contacts_button button" type="submit" value="Отправить" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts
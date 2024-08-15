import React from 'react'
import '../../style/blocks/teachers.css'
import dot from '../../image/general/dot.png'
import teachers from '../../image/teachers/teachers_img.jpg'

function Teachers() {
    return (
        <div>
            <div className="teachers block-bg" id="teachers">
                <div className="container">
                    <div className="title">
                        <span>Преподаватели</span>
                    </div>
                    <div className="teachers__info substrate">
                        <div className="teachers__img" style={{ backgroundImage: 'url('+ teachers +')' }}></div>
                        <div className="teachers__column">
                            <div className="teachers__appellation appellation"><span>Екатерина Сергеевна</span></div>
                            <div className="teachers__text"><span>Учитель с 7-летним опытом преподавания английского языка юным
                                волшебникам и волшебницам. Найдет индивидуальный подход к каждому ученику. С творчеством
                                подходит к своей работе!</span></div>
                            <div className="teachers__list">
                                <img className="teachers__list-img" src={dot} />
                                <span className="teachers__list-text">С отличием окончила Тихоокеанский Государственный
                                    университет</span>
                            </div>
                            <div className="teachers__list">
                                <img className="teachers__list-img" src={dot} />
                                <span className="teachers__list-text">Прошла языковую и педагогическую стажировку в Германии
                                    (Университет Дуйсберг-Эссен)</span>
                            </div>
                            <div className="teachers__list">
                                <img className="teachers__list-img" src={dot} />
                                <span className="teachers__list-text">Награждена Золотым дипломом от Всероссийского
                                    педагогического
                                    собрания</span>
                            </div>
                            <div className="teachers__list">
                                <img className="teachers__list-img" src={dot} />
                                <span className="teachers__list-text">Является призером краевого конкурса “Педагогический
                                    серфинг” в
                                    номинации “Стремление к профессиональному развитию</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teachers
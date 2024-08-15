import React from 'react'
import '../../style/blocks/about-us.css'
import dots from '../../image/general/dot.png'

function AboutUs() {
    return (
        <div>
            <div className="about_us block-bg" id='about_us'>
                <div className="container">
                    <div className='title'>
                        <span>О нас</span>
                    </div>
                    <div className="about_us__info">
                        <div className="about_us__column substrate">
                            <div className="about_us__appellation appellation"><span>Welcome to Hogwarts!</span></div>
                            <div className="about_us__text"><span>Мы приглашаем детей окунуться в волшебный мир изучения
                                английского языка!</span></div>
                            <div className="about_us__text"><span>С нами вам не будет скучно:</span></div>
                            <div className="about_us__list">
                                <img className="about_us__list-img" src={dots} />
                                <span className="about_us__list-text">Обучим чтению и письму, правилам грамматики, расширим словарный запас и поможем овладеть коммуникативными навыками.</span>
                            </div>
                            <div className="about_us__list">
                                <img className="about_us__list-img" src={dots} />
                                <span className="about_us__list-text">Занятия проходят по современным учебным пособиям с использованием игровых методик обучения.</span>
                            </div>
                            <div className="about_us__list">
                                <img className="about_us__list-img" src={dots} />
                                <span className="about_us__list-text">На первых занятиях вы познакомитесь со знаменитой Распределяющей шляпой!</span>
                            </div>
                            <div className="about_us__list">
                                <img className="about_us__list-img" src={dots} />
                                <span className="about_us__list-text">А в течение года вы сможете принять участие в захватывающих, образовательных квестах и веселых праздниках!</span>
                            </div>
                            <div className="about_us__list">
                                <img className="about_us__list-img" src={dots} />
                                <span className="about_us__list-text">Первое занятие бесплатно!</span>
                            </div>
                            <button className="about_us__btn button btn">Записаться</button>
                        </div>
                        <div className="about_us__img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
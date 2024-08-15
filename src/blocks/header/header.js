import React from 'react'
import '../../style/elements/nav.css'
import logo from '../../image/header/logo.png'
import logo_mobile from '../../image/header/logo_mobile.png'
import MobileMenu from '../../scripts/functional/menu/menu'
import ScrollComponent from '../../scripts/functional/menu/menu-active-item'

function Header() {
    return (
        <div>
            <div className="mobile-menu" style={{ visibility: "hidden" }} >
                <ul className="mobile-menu__list">
                    <li className="menu__item">
                        <a className="menu__link" href="#about_us">О нас</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#news">Новости</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#teachers">Преподаватели</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#price">Цены</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#contacts">Контакты</a>
                    </li>
                </ul>
                <div className="header__button">
                    <button className="header__button-contact button btn">Записаться</button>
                </div>
            </div>
            <div className="header">
                <div className="header__block"></div>
                <div className="header__inner">
                    <a className="logo" href="#main">
                        <img className="logo__img" src={logo} />
                    </a>
                    <div className="logo-mobile">
                        <img className="logo__img mobile" src={logo_mobile} />
                    </div>
                    <div className="menu">
                        <ul className="menu__list">
                            <li className="menu__item ">
                                <a className="menu__link main-link active " href="#about_us"></a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#about_us">О нас</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#news">Новости</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#teachers">Преподаватели</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#price">Цены</a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="header__button">
                    <button className="header__button-contact button btn">Записаться</button>
            </div>
            </div>
                <MobileMenu/>
                <ScrollComponent/>
        </div>
    )
}

export default Header
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import '../../style/extra/swiper-bundle.min.css';
import '../../style/blocks/price.css'
import price_group from '../../image/price/price_group.jpg'
import price_individual from '../../image/price/price_individual.jpg'

function Price() {
    return (
        <div>
            <div className="price block-bg" id="price">
                <div className="container">
                    <div className="title">
                        <span>Цены</span>
                    </div>
                    <div className="price__block-indicator substrate">
                        <div className="price__block-indicator-text">
                            <p className="price__block-indicator-apellation apellation" id="price__block-indicator-apellation-group">Групповые</p>
                            <p className="price__block-indicator-apellation apellation" id="price__block-indicator-apellation-ind">Индивидуальные</p>
                        </div>
                        <div className="price__block-indicator-bg-row">
                            <div className="price__block-indicator-bg indicator-apellation_active"></div>
                            <div className="price__block-indicator-bg"></div>
                        </div>
                    </div>
                        <Swiper
                        spaceBetween={32}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={
                            {650: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }}
                        }
                        pagination={
                            {clickable: true}
                        }
                        modules={[Autoplay, Pagination]}
                        className='PriceSwiper'
                        >
                            <SwiperSlide>
                            <div className="price__block substrate" id="price__block-group">
                                <div className="price__block-column">
                                    <div className="price__img" style={{ backgroundImage: 'url('+ price_group +')' }}></div>
                                    <p className="price__appellation appellation">Групповые занятия</p>
                                    <p className="price__text">Дети от 6 до 14 лет</p>
                                    <p className="price__text">Цена: <span className="price__text-bold">3400 &#8381;</span></p>
                                    <p className="price__text">8 занятий по 60 минут</p>
                                </div>
                                <button className="price_button button btn">Записаться</button>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="price__block substrate" id="price__block-individual">
                                <div className="price__block-column">
                                    <div className="price__img" style={{ backgroundImage: 'url('+ price_individual +')' }}></div>
                                    <p className="price__appellation appellation ">Индивидуальные занятия</p>
                                    <p className="price__text">Дети от 6 лет</p>
                                    <p className="price__text">Цена: <span className="price__text-bold">1000 &#8381;</span></p>
                                    <p className="price__text">Занятие 60 минут</p>
                                </div>
                                <button className=" price_button button btn">Записаться</button>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    <div className="price__title title">
                        <span>Акции</span>
                    </div>
                    <Swiper
                        spaceBetween={32}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={
                            {650: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }}
                        }
                        pagination={
                            {clickable: true}
                        }
                        modules={[Autoplay, Pagination]}
                        className='MySwiper'
                        >
                            <SwiperSlide>
                            <div className="price__stock substrate swiper-slide">
                                <p className="price__stock-appellation appellation">Friendship - Дружба</p>
                                <p className="price__stock-text">Приведи друга и получи скидку в 500 рублей на следующий месяц обучения.</p>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="price__stock substrate swiper-slide">
                                <p className="price__stock-appellation appellation">First - Первый</p>
                                <p className="price__stock-text">Первое занятие бесплатно!</p>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="price__stock substrate swiper-slide">
                                <p className="price__stock-appellation appellation">Welcome - Добро пожаловать</p>
                                <p className="price__stock-text">Для наших первых учеников скидка 500 рублей на 2 месяца обучения.</p>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Price
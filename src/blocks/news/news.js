import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import '../../style/extra/swiper-bundle.min.css';
import '../../style/blocks/news.css'
import news1 from '../../image/news/news1.jpg'
import news2 from '../../image/news/news2.jpg'

function News() {
    return (
        <div>
            <div className="news block-bg" id="news">
                <div className="container">
                    <div className="title">
                        <span>Новости</span>
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
                        >
                        <div className="news__row swiper-wrapper">
                            <SwiperSlide>
                            <div className="news__block substrate swiper-slide">
                                <div className="news__img" style={{ backgroundImage: 'url('+ news1 +')' }}></div>
                                <div className="news__title appellation">
                                    <span>Ура! Открытие!</span>
                                </div>
                                <div className="news__text ">
                                    <span>Юные волшебники и волшебницы, приготовьте свои мантии, шляпы и волшебные палочки! И, разумеется, не забудьте свой билет на Хогвартс-экспресс! Мы отправляемся в путь. Приглашаем Вас в нашу школу по адресу <b>ул. Семашко 48 а , 2 этаж офис 4</b>.</span>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="news__block substrate swiper-slide second">
                                <div className="news__img" style={{ backgroundImage: 'url('+ news2 +')' }}></div>
                                <div className="news__title appellation">
                                    <span>Символ школы!</span>
                                </div>
                                <div className="news__text">
                                    <span>Одним из главных символов школы является Распределяющая шляпа! На первых занятиях ребята смогут поучаствовать в церемонии распределения. Шляпа подскажет подходящий факультет!</span>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News
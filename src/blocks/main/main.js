import React from 'react'
import '../../style/blocks/main.css'
import arrow from '../../image/main/Arrow.png'

function Main() {
    return (
        <div>
            <div className="main block-bg" id="main">
                <div className="container">
                    <div className="main__block"></div>
                    <div className="main__nameblock">
                        <div className="main__text">Современная школа английского языка</div>
                        <div className="main__name">Hogwarts</div>
                    </div>
                    <div className="main__arrow">
                        <a href="#about_us"><img className="main__arrow-img" src={arrow} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

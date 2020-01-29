import React from 'react';
 
import {mainImg} from './Main';
 

const Footer = ()=>{
    const footerImg = require('../images/footer_img.png');
    return(
        <div className='footer'>
            <div className='footer__backgroundImg'>
                <img src={mainImg} width= '311px' alt=''/>
            </div>
            <div className='footer__text'>
                <h1>
                    для кого
                </h1>
                <p className='footer__oneP'>
                    При максимально выдерживаемой нагрузке в <b>100 кг</b> отлично подойдёт, 
                    как для подрастающего поколения, так и для более взрослых «наездников».
                </p>
                <p className='footer__twoP'>
                    Это единственный гироскутер со специальным детским режимом езды.
                </p>
                <button className='footer__btn'>
                    <div className='footer__btn-item'>
                        перейти в каталог
                    </div>
                </button>
            </div>
            <div className='footer__img'>
                <img  src={footerImg} width='740' height='552' alt=''/>
                <p className='footer__img-text'>
                    4.0 Rizor
                </p>
            </div>
        </div>
    )
}





















export default Footer;
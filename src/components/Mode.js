import React from 'react';
import {mainImg} from './Main'
import {video} from './Main';

const Mode = ()=>{
    const modeVideo = require('../images/mode_video.png')
    return(
        <div className='mode'>
            <div className='mode__img'>
                <img src={mainImg} width= '311px' alt=''/>
            </div>
            <div className='mode__text'>
                <h1>
                    режимы
                </h1>
                <p>
                    Помимо «умной» подсветки,<b>Hovertrax 4.0</b> снабжён двумя скоростными режимами. 
                </p>
                <ul>
                    <li> Один для продвинутых пользователей</li>
                    <li> Второй для новичка</li>
                </ul>
                <div className='mode__nam'>
                    <div className='mode__nam-first'>
                        <span className='first-nam'>13</span><span className='distance'>км/ч</span>
                        Максимальная скорость
                    </div>
                    <div className='mode__nam-last'>
                        <span className='last-nam'>2</span>
                        Скоростных режима
                    </div>
                </div>
            </div>
            <div className='mode__video'>
                <div className='mode__video-stick'>
                    {/* <img className='mode__video-stickPointer' src={ }/> */}
                </div>
                <div className='mode__video-text'>
                    Смотреть видео
                </div>
                <div className='mode__video-teangle'>
                    <div className='mode__video-teangleItem'>

                    </div>
                </div>
                <div className='mode__video-video'>
                    <video src={video} width='730' height='511' poster={modeVideo} alt=''/>
                </div>
            </div>
        </div>
    )
}












export default Mode;
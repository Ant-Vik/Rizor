import React from 'react';


export const video = require('../images/01.mp4');
export const mainImg = require('../images/img_main.png');
const Main =()=>{
    
    const arrow = require('../images/arrow.png');
    const stick = require('../images/stcick.png');
    const poster = require('../images/posterVideo.png');
   

    /*
    const onVideoClick = () => {
        document.querySelector('.heading').style.display = 'hidden'
    }
    */

    return(
        <main>
            <div className='container'>
                <div className='container__main-img'>
                <img src={mainImg} width= '311px' alt='' className='container__main-item'/>
                </div>
                <div className='container__main-text'>
                    <h1 className="container__main-heading">
                        RIzor Hovertrax 4.0
                    </h1>
                    <p>
                        Маневренность, легкость, экологичность
                    </p>
					<img className='container__main-arrow' src={arrow} width="11" alt=''/>		
                </div>
                <div className='container__main-video'>
                    <div className="container__main-videoTriangle">
                        <div className="container__main-videoTriangleItem">
                                    
                        </div>
                    </div>
                    <div className='container__main-top'>
                        <p className='container__main-videoText'>Смотреть видео</p>
                        <img src={stick} width='20' alt=''/>
                    </div>
                    <video className='container__main-video-item' src={video} poster={poster} controls="default"></video>
                </div>
            </div>
        </main>
        
    )
}






export default Main;
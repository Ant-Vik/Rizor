import React from 'react';
import {video} from './Main';

const Design =()=>{
    const designPoster = require('../images/designPoster.png')
    const board = require('../images/board.png')
    const stickBoard = require('../images/stick_02.png')
    const stickPointer = require('../images/stick_03.png')
    return(
        <div className='design'>
            <div className='design__video'>
                <video className='design__video-item' poster={designPoster} src={video} controls='default'/>
            </div>
            <div className='design__item design__item-one'>
                <p className="design__item-header">
                    преимущества
                </p>
                <h1 className='design__item-heading'>
                    дизайн
                </h1>
                <div className='design__item-text'>
                    <p className='design__item-text-header'>
                        Внешний вид скутера дышит идеями футуризма: 
                    </p>
                    <ul className='design__item-text-list'>
                        <li>плфвные линии</li>
                        <li>подсветка светодиодными индекаторами</li>
                        <li>рельефные бамперы, оснащенные защитными панелями.</li>
                    </ul>
                </div>
            </div>
            <div className='design__item-two'>
                <h1>
                    цвет
                </h1>
                <p>
                    Модель представлена сразу в нескольких цветах. 
                </p>
                <div className='circle-list'>
                    <div className='circle-item yellow'></div>
                    <div className='circle-item blue'></div>
                    <div className='circle-item red'></div>
                    <div className='circle-item grey'></div>
                    <div className='circle-item black'></div>
                </div>
                <img className='stickPointer' src={stickPointer} alt=''/>
                <img  className='stickBoard' src={stickBoard} alt=''/>
                <img className='boardImg' src={board} alt=''/>
            </div>
            <div className='design__item-three'>
                <h1>
                    4.0 RIzor
                </h1>
            </div>
        </div>
    )
}










export default Design;
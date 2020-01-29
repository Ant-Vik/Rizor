import React from 'react';

const Header =()=> {
    const logo = require('../images/logo.png')
return(
    <header>
        <div className='navigation'>
            <div className='navigation__logo'>
                <img src={logo} width="156" alt='' className='navigation__logo-img'/>
            </div>
            <div className="linkList">
                <a href="#" className='navigation__link navigation__link-active'>Преимущества</a>
                <a href="#" className='navigation__link'>характеристики</a>
                <a href="#" className='navigation__link'>для кого</a>
            </div>
            <div className="right-line">
                <div className="right-line__top">
                    
                </div>
                <div className="right-line__circle">
                    <div className="empty-circle">
                        
                    </div>
                    <div className="circle">
								
					</div>
				</div>
				<div className="right-line__bottom">
							
				</div>
			</div>
        </div>
    </header>
)
}



export default Header;
import React from 'react';
import './Header.css';


class Header extends React.Component{
    render(){
        return(
            <header>
            <div className='logo'></div>
            <h1>Територія Твого Права</h1>
            <div className='Sign'></div>
            </header>
          
        );
    }
}

export default Header
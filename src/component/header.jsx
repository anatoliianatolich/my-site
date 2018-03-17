import React from 'react';
import './Header.css';
import Logo from './court-justice.png';
import Userpic from './userpic.png';
import styledComponents from 'styled-components';


const header = styledComponents.header`
    display: flex;
    min-width: 1024px;
    height: 150px;
    border-radius: 5px solid grey;
    background: rgb(159, 164, 230);
    justify-content: space-between;
    align-items: center;
`;

class Header extends React.Component{
    render(){
        return(
            <header>
            <div className='logo'>
                <img className="logo-img" src={Logo}/>
            </div>
            <h3 className='header-title'>Територія твого Права</h3>
            <div className='sign'>
                <img className="sign-img" src={Userpic}/>
                <button className='button-sign'>Вхід/Sign in</button>
            </div>
            </header>
        );
    }
}



export default Header

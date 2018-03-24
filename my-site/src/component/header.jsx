import React from 'react';
import './style/Header.css';
import Logo from './images/court-justice.png';
import Userpic from './images/userpic.png';
import styledComponents from 'styled-components';


const Header1 = styledComponents.header`
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
            <Header1>
            <div className='logo'>
                <img className="logo-img" src={Logo}/>
            </div>
            <h3 className='header-title'>Територія твого Права</h3>
            <div className='sign'>
                <img className="sign-img" src={Userpic}/>
                <button className='button-sign'>Вхід/Sign in</button>
            </div>
            </Header1>
          
        );
    }
}

// const Header = styled.h1`
//     font-size: 2.5em;
//     color: blue;
//     border: 2px solid red;
// `;

export default Header
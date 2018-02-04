import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';


class Body extends React.Component{
    render(){
        return(
            <div className='body1'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Body 

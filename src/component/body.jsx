import React from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';


class Body extends React.Component{
    render(){
        return(
            <div className='Body'>
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Body
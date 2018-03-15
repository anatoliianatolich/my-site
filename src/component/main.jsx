import React from 'react';
import listOfDocument from './constructor/listOfDocument.jsx'
import civilSuitofCriminal from './constructor/civilSuitofCriminal.jsx'
import './main.css';
//import styledComponents from 'styled-components';



class Main extends React.Component{
    render(){
        return(
            <div className="mainNav">
                <nav>
                <ul>
                    <a href=""><li>Головна</li></a>
                    <a href=""><li>Інформація для інвесторів</li></a>
                    <a href="" onClick={constructorClick}><li>Конструктор документів</li></a>
                </ul>
                </nav>
                <main>
                    {/* <listOfDocument/>
                    <civilSuitofCriminal/> */}
                    {/* зміна контенту */}
                <div className='content'></div>
                <div className='coment'></div>
                <div className='constructor_document'></div>
                </main>
            </div>         
        );
    }
}
function constructorClick() {
    console.log("clickWork", "clicked");
}

export default Main
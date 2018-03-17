import React from 'react';
import listOfDocument from './constructor/listOfDocument.jsx'
import civilSuitofCriminal from './constructor/civilSuitofCriminal.jsx'
import './main.css';
import styledComponents from 'styled-components';



class Main extends React.Component{
    
    render(){
        return(
            <div className="mainNav">    
                <div className='content'></div>
                <div className='coment'></div>
                <div className='constructor_document'></div>
            </div>         
        );
    }
}

export default Main
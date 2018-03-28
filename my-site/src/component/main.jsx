import React from 'react';
import './style/main.css';
// import styledComponents from 'styled-components';



class Main extends React.Component{
    render(){
        const {name} = this.props;
        return(
            <div className="mainNav">
                <nav>
                <ul>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>{name}</li>
                </ul>
                </nav>
                <main>
                <div className='content'>content</div>
                <div className='coment'>coment</div>
                <div className='constructor_document'>constructor_document</div>
                </main>
            </div>         
        );
    }
}

export default Main
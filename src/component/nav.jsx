import React from 'react';
import "./style/nav.css"
// static propTypes = {
// };
// static defaultProps = {};


class Nav extends React.Component{
    render(){
        return(
            <div className="Nav">
                <ul>
                    <a href=""><li>Головна</li></a>
                    <a href=""><li>Інформація для інвесторів</li></a>
                    <a onClick={this.openList}><li>Конструктор документів</li></a>
                </ul>
            </div>
        );
    }
}

function openList(evt) {
    console.log(evt);
}




export default Nav

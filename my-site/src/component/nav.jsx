import React, { Component } from "react";
import UserPic from "./images/userpic.png";
import "./style/nav.css";

export default class Nav extends Component {
    render(){
        const {name, text, date} = this.props;
        return (
            <nav className="testNav">
                <div>
                    <p>{name}</p>
                    <img src={UserPic}/>
                </div>
                <div>
                    <p>{text}</p>
                </div>
                <p>{JSON.stringify(date)}</p>
            </nav>
        );
    }
}
import React from "react";
import "./styles.css";
import Theme from './ThemeContext'

const Dark = "btn btn1"
const Light = "btn btn2"
const cTheme = Theme.currentTheme;

function User(props) {
    return (
        <div className="user">
            <span>This is a user named {props.name}. </span>
            <img src={props.avatar}></img>
            <br></br>
            <button className={Dark}>Press me.</button>
        </div>
    );
}

export default User;
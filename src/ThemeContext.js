import React, {useState, useEffect} from "react";
import "./styles.css";

function Theme(props) {
    const Dark = "btn btn1"
    const Light = "btn btn2"

    const [theme, setTheme] = useState(Dark);

    /*useEffect(() => {
        theme 
    });*/

    return (
        <button className={theme} onClick={() => setTheme(props.theme)}>{props.text}</button>
    );
}

export default Theme;
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

/*
* HTML <a>태그는 새로고침 되므로,
* <Link> 태그 to 속성을 이용
* (해당 속성 이용을 위해서는 Navigation이 router 안에 위치해야 함)
*/

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
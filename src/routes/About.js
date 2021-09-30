import React from "react";
import "./About.css";

function About(props) {
    return (
        <div className="about__container">
            <span>About this page:</span>
            <span>
                React Fundamentals.<br/>
                Creating my first React App.<br/>
                "Movie Web Service"
            </span>
            <span>
                Creating React Component, Protection with PropTypes, Rendering the Movies, Styling the Movies, Building the Router and I pushed this project to my GitHub repository.
            </span>
            <span>
                <a href="https://github.com/SeojinB/movie_app_2021.git" target="_blank" rel="noreferrer">👉 movie_app_2021.git</a>
            </span>
        </div>
    );
}

export default About;
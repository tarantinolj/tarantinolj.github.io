 import React from "react";


 export default function MainContent(){
    return(
        <div className="main--content">
            <h2>Sluinkou Andrew</h2>
            <h4>Frontend Developer</h4>
            <a href="https://github.com/tarantinolj/" className="github">gitHub page</a>
            <div className="buttons-item">
                <button className="button">
                <i class="fa-solid fa-envelope fa-xl"></i>
                <a href="mailto:tarantinolj@mail.ru"> Send Email</a></button>
            </div>
            <div className="content">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Computer games. Jogging. Pull-ups on the crossbar. Watching serials. Walking down the street. Biking.</p>
            </div>
        </div>
    )
 }
import React from "react";
import "./Sobre.css"

function SobreBox (props) {
    return (
        <div className="sobre-box">
            <div className="sobre-img">
                <img src={props.image}/>
            </div>

            <div className="sobre-texto">
                <h2> {props.title} </h2>
                <p> Linkedin: {props.linkedin} <br/> 
                Github: {props.github}</p>
            </div>

        </div>
    )
}

export default SobreBox;
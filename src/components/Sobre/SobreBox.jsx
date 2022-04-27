import React from "react";
import "./Sobre.css"

function SobreBox (props) {
    return (
        <div className="sobre-box">
            <div className="sobre-img">
                <img src={props.image}/>
            </div>

            <div className="sobre-texto">
                <h3> {props.title} </h3>
                <a href={props.linkedin}> • Linkedin</a>
                <br></br>
                <a href={props.github}> • Github</a>
            </div>

        </div>
    )
}

export default SobreBox;
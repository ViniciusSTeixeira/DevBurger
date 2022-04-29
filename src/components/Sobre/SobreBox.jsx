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
                <a href={props.linkedin}> <strong> Linkedin</strong></a>
                <br></br>
                <a href={props.github}>  <strong>Github</strong></a>
            </div>

        </div>
    )
}

export default SobreBox;
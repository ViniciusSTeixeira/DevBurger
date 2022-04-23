import React from "react";

function SobreBox (props) {
    return (
        <div className="sobre-box">
            <div className="sobre-img">
                <img src={props.image}/>
            </div>

            <div className="sobre-texto">
                <h2> {props.title} </h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat iusto illum consequatur laboriosam cum corrupti tempora quis? Consequatur necessitatibus nam natus dolore repudiandae ipsa sit magnam aliquid esse distinctio.</p>
            </div>

        </div>
    )
}

export default SobreBox;
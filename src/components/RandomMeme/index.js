import React from "react";

function RandomMeme(props) {
    return (
        <div>
            <img scr={props.src} alt={props.name}></img>
        </div>
    )
}

export default RandomMeme;
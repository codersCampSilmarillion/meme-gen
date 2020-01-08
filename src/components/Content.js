//content.js
import React from "react";


export default ({ close }) => (
    <div className="modal">
        <a className="close" onClick={close}>
            &times;
    </a>
        <div className="header"> Your Meme </div>
        <div className="content">
            {" "}
            <img src="{value}"></img>
        </div>
    </div>
);
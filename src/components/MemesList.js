import React from 'react';
import './css/app.css';
import MemeCard from './memeCard'

const MemesList = (props) => {
    const memes = props.memes.map((meme) => {
        return <MemeCard meme = {meme} key = {meme.id} />
    })

    return ( 
        <div className="mem-list" >
            { memes } 
        </div>
    )
};

export default MemesList
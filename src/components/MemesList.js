import React from 'react';

const MemesList = (props) => {
    const memes = props.memes.map((meme) => {
        return <img src = { meme.url }
        />
    })

    return ( <
        div > { memes } <
        /div>
    )
};

export default MemesList
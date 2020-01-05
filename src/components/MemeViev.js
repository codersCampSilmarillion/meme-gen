import React, {Component} from 'react';
import ImageZoom from 'react-medium-image-zoom'

function meme(props) {
    let width = props.width * 1.5;
    let heigh = props.height * 1.5;
    return (
        <ImageZoom
            image={{
                src: props.src,
                alt: props.name,
                style: { width: props.width, height: props.height }
            }}
            zoomImage={{
                src: props.src,
                alt: props.name,
                style: { width, height }
            }}
        />
    )
}

export default meme;
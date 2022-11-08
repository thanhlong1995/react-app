import React from 'react';

function Video(props) {
    return (
        <video width={props.width} height={props.height} controls>
            <source src={props.src} type="video/mp4" />
        </video>
    );
}

export default Video;

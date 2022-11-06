
import React from 'react';

const Video = ({src}) => {

    return (
        <video controls >
            <source src={src} type="video/mp4"/>
        </video>
    )

}

export default Video;
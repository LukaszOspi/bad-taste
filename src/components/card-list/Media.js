import React from 'react'

const Media = (props) => {
    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w92${props.img}`|| './src/assets/img-placeholder.png'} alt="poster-image"></img>
            </div>
            <div><h1>{props.title}</h1></div>
            <div>{props.year}</div>
        </div>
    )
}

export default Media

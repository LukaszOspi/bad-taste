import React from 'react'
import MediaList from './MediaList'


const CardList = ({swipedMedias}) => {
    
    return (
        <div>
            <MediaList swipedMedias={swipedMedias} />
            </div>
    )

}

export default CardList;
import React from 'react'

import './Gallery.css'
import GalleryItem from "../../GalleryItem/GalleryItem";



function Gallery(props){
    React.Children.forEach(GalleryItem(), function[(
            <GalleryItem/>
    )]);

    return (
        <p>
            <a src={e.image}>{props.message}</a>
            <small><i>{props.author}</i></small>
        </p>
  )
}

export default Gallery;

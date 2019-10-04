import React from 'react'

import './GalleryItem.css'



function GalleryItem(props){
  return (
    <p>
      <q>{props.message}</q>
      <small><i>{props.author}</i></small>
    </p>
  )
}

export default GalleryItem;

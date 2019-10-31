import React from 'react'

import './Picture.css'



function Picture(props){
  return (
    <p>
      <q>{props.message}</q>
      <small><i>{props.author}</i></small>
    </p>
  )
}

export default Picture;

import React from 'react'

import './Description.css'



function Description(props){
  return (
    <p>
      <q>{props.message}</q>
      <small><i>{props.author}</i></small>
    </p>
  )
}

export default Description;

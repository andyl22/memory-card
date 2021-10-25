import React from 'react'

function Cards(props) {

  return (
    <div className='card' onClick={props.onClick}>
      <img className ='card-img' src={props.imgUrl} alt={props.name}/>
      <p className='card-details'>{props.name}</p>
    </div>
  )
}

export default Cards;
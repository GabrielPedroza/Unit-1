import React from 'react'

const Card = ({image, title, url, alt}) => {
  return (
    <div className='container'>
        <img src={`${image}`} alt={`${alt}`} width={250} height={250} />
        <h2>{title}</h2>
        <a href={`${url}`}>Learn More!</a>
    </div>
  )
}

export default Card
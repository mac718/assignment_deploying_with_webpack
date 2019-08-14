import React from 'react';

const PhotoLinks = ({ links }) => {
 let photoLinks = links.map( (link, i) => {
    return <li key={i}><a href={link}>{link}</a></li>
  })
  return (
    <ul className='PhotoLinks'>{photoLinks}</ul>
  )
}

const PhotoList = ({ photos }) => {
  return(
    <PhotoLinks links={ photos } />
  )
}

export default PhotoList

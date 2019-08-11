require('./style.css')

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
//import PhotoList from './components/PhotoList'

const PhotoLinks = ({links}) => {
 let photoLinks = links.map( link => {
    return <li><a href={link}>{link}</a></li>
  })
  return (
    <ul className='PhotoLinks'>{photoLinks}</ul>
  )
}

class PhotoList extends Component {
  constructor(){
    super()
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/5')
      .then( response => {
        // if (!response.ok) {
        //   console.log(response.statusText, response.status)
        // }
        return response.json()
      })
      .then(json => {
        this.setState({ photos: json.message })
      })
  }

  render() {
    const {photos} = this.state

   
   
    return(
      <PhotoLinks links={photos} />
    )
    
  }
}


ReactDOM.render(<PhotoList />, document.getElementById('root'));
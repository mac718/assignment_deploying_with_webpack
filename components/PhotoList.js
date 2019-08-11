import React, { Component } from 'react';

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
        if (!response.ok) {
          console.log(response.statusText, response.status)
        }
        return response.json
      })
      .then(json => {
        this.setState({ photos: json.message })
      })
  }

  render() {
    let photos = this.state.photos

    let photoLinks = photos.map( link => {
      return <p>{link}</p>
    })

    return(
      <div>{photoLinks}</div>
    )
  }
}

export default PhotoList

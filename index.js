require('./style.css')

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PhotoList from './components/PhotoList'

class App extends Component {
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
        return response.json()
      })
      .then(json => {
        this.setState({ photos: json.message })
      })
  }

  render() {
    const { photos } = this.state

    return (
      <div className='App'>
        <h1>Some Random Dog Photos</h1>
        <PhotoList photos={ photos } />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
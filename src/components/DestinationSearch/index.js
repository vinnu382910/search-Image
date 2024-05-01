// Write your code here

import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)
    return (
      <div className="card-cont">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-cont">
          <input
            type="search"
            className="search-cont"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <button className="search-button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-image"
              alt="search icon"
            />
          </button>
        </div>
        <ul className="list-cont">
          {searchResults.map(eachImg => (
            <DestinationItem imgDetails={eachImg} key={eachImg.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

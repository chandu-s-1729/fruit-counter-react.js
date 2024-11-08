// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onIncrementMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncrementBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count"> {mangoCount} </span> mangoes
            <span className="fruit-count"> {bananaCount} </span>
            bananas
          </h1>
          <div className="fruits-cards-container">
            <div className="single-fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onIncrementMangoCount}
                className="eat-btn"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="single-fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onIncrementBananaCount}
                className="eat-btn"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

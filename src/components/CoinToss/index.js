// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coin: 0,
    total: 0,
    head: 0,
    tail: 0,
  }

  changeCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({coin: tossResult})

    if (tossResult > 0) {
      this.setState(prev => ({head: prev.head + 1}))
    } else this.setState(prev => ({tail: prev.tail + 1}))

    this.setState(prev => ({total: prev.total + 1}))
  }

  render() {
    const {coin, total, head, tail} = this.state
    return (
      <div className="container">
        <div className="coinContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          {coin ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}

          <button className="button" type="button" onClick={this.changeCoin}>
            Toss Coin
          </button>
          <div className="coin">
            <p className="t">Total:{total}</p>
            <p className="t">Heads:{head}</p>
            <p className="t">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

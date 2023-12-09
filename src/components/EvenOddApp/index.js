// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  number = () => {
    const {count} = this.state
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="para">Count is Even</p>
          ) : (
            <p className="para">Count is Odd</p>
          )}
          <button className="button1" type="button" onClick={this.number}>
            Increment
          </button>
          <p className="para1">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

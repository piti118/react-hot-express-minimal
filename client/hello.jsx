import React from 'react';
// import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: '', count: 0 }
  }

  click() {
    console.log(this.xxxxx.yyy)
  }

  timeClick() {
    const self = this
    fetch('/time')
      .then(res => res.json())
      .then(function (json) {
        self.setState({ ...this.state, time: json.time })
      })
  }

  countClick() {
    let count = this.state.count
    count = count + 1
    this.setState({ ...this.state, count })
  }

  render() {
    const { time, count } = this.state
    return (<div>
      <h1 ref="header">
        Hello World!
      </h1>
      <div>
        <p ref="data">{count}</p>
        <button onClick={() => this.countClick()} ref="morebutton">More Click</button>
      </div>
      <div>
        <p>Time now <span ref="timespan">{time}</span></p>
        <button onClick={() => this.timeClick()} ref="timebutton">Update Time</button>
      </div>
      <div>
        <p>
          Clicking this button should give you an error.
          It should give a nice line map to actual in chrome.
        </p>
        <button onClick={() => this.click()}>Error</button>
      </div>
    </div>)
  }
}

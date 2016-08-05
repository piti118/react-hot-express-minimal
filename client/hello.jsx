import React from 'react';
import Counter from './Counter.jsx'
// import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: '', count: 0, rs: null }
  }

  click() {
    console.log(this.xxxxx.yyy)
  }

  timeClick() {
    const self = this
    fetch('/time')
      .then(res => res.json())
      .then(x => { console.log(x, 'aaaaa'); return x })
      .then((json) => {
        self.setState({ ...self.state, time: json.time })
      })
  }
  // click --> fetch -----------> res --> parse --> setState ---> render
  countClick() {
    let count = this.state.count
    count = count + 1
    this.setState({ ...this.state, count })
  }

  reverseClick() {
    const s = this.refs.txtinput.value
    const rs = s.split('').reverse().join('');
    // this.setState({...this.state, 'rs': rs})
    this.setState({ ...this.state, rs })
  }

  // reverseClick --> ref -->> compute reverse --> rs --> setState --> render

  render() {
    const { time, count, rs } = this.state
    const mystring = 'AAAAAAAA'
    console.log('rendereeeeeed')
    return (<div>
      <h1 ref="header">
        Hello May!
      </h1>
      <Counter label={mystring} />
      <Counter label="Ham Counter" />
      <div>
        <p>Time now <span ref="timespan">{time}</span></p>
        <button onClick={() => this.timeClick()} ref="timebutton">Update Time</button>
      </div>
      <div>
        <p>Reverse Me</p>
        <input type="text" ref="txtinput"></input>
        <button onClick={() => this.reverseClick()} >Reverse</button>
        <div>
          <span> Result: </span> <div>{rs}</div>
        </div>
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

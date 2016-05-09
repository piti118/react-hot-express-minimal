import "babel-polyfill";
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props){
    super(props)
    this.state = {time:''}
  }

  click() {
    console.log(this.xxxxx.yyy)
  }

  timeclick(){
    const self = this
    fetch('/time')
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        self.setState({time: json.time})
      })
  }

  render() {
    const time = this.state['time'];
    return <div>
      <h1>
        Hello World!
      </h1>
      <div>
        <p>Time now {time}</p>
        <button onClick={()=>this.timeclick()}>Update Time</button>
      </div>
      <p>
        Clicking this button should give you an error.
        It should give a nice line map to actual in chrome.
      </p>
      <button onClick={()=>this.click()}>Error</button>
    </div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));

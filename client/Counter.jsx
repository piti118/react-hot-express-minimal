import React from 'react';
// import ReactDOM from 'react-dom';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  // click --> fetch -----------> res --> parse --> setState ---> render
  countClick() {
    let count = this.state.count
    count = count + 1
    this.setState({ ...this.state, count })
  }

  // reverseClick --> ref -->> compute reverse --> rs --> setState --> render

  render() {
    const { count } = this.state
    const { label } = this.props
    console.log('rendereeeeeed')
    return (
      <div>
        <span> {label} </span>
        <p ref="data">{count}</p>
        <button onClick={() => this.countClick()} ref="morebutton">More Click</button>
      </div>
    )
  }
}

// Counter.propTypes = {
//   label: React.PropTypes.string,
// };
//
// Counter.defaultProps = {
//   label: 'Default Label'
// }

import React, {Component} from 'react'

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="{this.props.url}" alt=""/>
        <div>{this.props.name}</div>
      </div>
    )
  }
}

export default Gif;

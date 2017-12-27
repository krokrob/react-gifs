import React, {Component} from 'react'

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.changeSelectedGif({url: this.props.url, name: this.props.name});
  }

  render() {
    return (
      <div className='gif'>
        <img src={this.props.url} alt="" onClick={this.handleClick} />
        <div className='gif-title'>{this.props.name}</div>
      </div>
    )
  }
}

export default Gif;

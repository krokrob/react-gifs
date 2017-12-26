import React, {Component} from 'react'
import Gif from './Gif'

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='gif-list' >
        {this.props.gifList.forEach( gif => {<Gif url={gif.url} name={gif.name} />} )}
      </div>
    )
  }
}

export default GifList;

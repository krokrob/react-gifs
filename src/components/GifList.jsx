import React, {Component} from 'react'
import Gif from './Gif'

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='gif-list' >
        {this.props.gifList.map( (gif, index) =>
          <Gif url={gif.url} name={gif.name} key={index} changeSelectedGif={this.props.changeSelectedGif} />
        )}
      </div>
    );
  }
}

export default GifList;

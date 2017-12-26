import React, {Component} from 'react';
import Search from './Search';
import Gif from './Gif';
import GifList from './GifList';
import {giphyToken} from "./GiphyToken";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifList: [
        {url: '', name: ''},
        {url: '', name: ''}
      ],
      selectedGif: {}
    }
  }

  render() {
    return (
      <div>
        {giphyToken}
        <div className='left-scene' >
          <Search />
          <div className='selected-gif' >
            <Gif url={this.state.selectedGif.url} name={this.state.selectedGif.name} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifList={this.state.gifList} />
        </div>
      </div>
    );
  }
}

export default App;

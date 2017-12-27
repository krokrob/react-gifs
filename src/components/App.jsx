import React, {Component} from 'react';
import Search from './Search';
import Gif from './Gif';
import GifList from './GifList';
import {giphyToken} from './GiphyToken'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: 'homer',
      gifList: [
        {url: 'https://media3.giphy.com/media/jUwpNzg9IcyrK/giphy.gif', name: 'scared homer simpson GIF'},
        {url: 'https://media0.giphy.com/media/Zk9mW5OmXTz9e/giphy.gif', name: 'salivating homer simpson GIF'}
      ],
      selectedGif: {url: 'https://media3.giphy.com/media/jUwpNzg9IcyrK/giphy.gif', name: 'scared homer simpson GIF'}
    }
  }

  onUpdateQuery = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyToken}&q=${query}&limit=10&offset=0&rating=G&lang=en`)
    .then((response) => response.json())
    .then(data => {
      const gifList = data.data.map((rawGif) => {
        let gif = {};
        gif.url = rawGif.images.original.url;
        gif.name = rawGif.title;
        return gif
      });
      this.setState({
        gifList: gifList,
        selectedGif: gifList[0]
      });
    })
  }

  changeSelectedGif = (gif) => {
    this.setState({selectedGif: gif});
  }

  render() {
    return (
      <div>
        <div className='left-scene' >
          <Search query={this.state.query} onChangeQuery={ (query) => this.onUpdateQuery(query) } />
          <div className='selected-gif' >
            <Gif url={this.state.selectedGif.url} name={this.state.selectedGif.name} changeSelectedGif={this.changeSelectedGif} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifList={this.state.gifList} changeSelectedGif={this.changeSelectedGif}  />
        </div>
      </div>
    );
  }
}

export default App;

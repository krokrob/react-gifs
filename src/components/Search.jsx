import React, {Component} from 'react'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {query: this.props.query}
  }

  handleKeyup = (e) => {
    this.setState({query: e.target.value});
    this.props.onChangeQuery(this.state.query);
  }

  render() {
    return (
      <input type="text" className='form-search' onKeyUp={this.handleKeyup}
       defaultValue={this.state.query} />
    )
  }
}

export default Search;

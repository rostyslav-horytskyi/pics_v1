import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={term}
              onChange={({ target }) => this.setState({ term: target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

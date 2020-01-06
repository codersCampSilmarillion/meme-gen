import React from "react";
import TextField from "@material-ui/core/TextField";
import "./css/app.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onFormSubmit}
          noValidate
          autoComplete="off"
          className="search"
        >
          <TextField
            label="GIF Name"
            variant="outlined"
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';

class Suggestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  formatAutocompleteSuggestion = (suggestion) => {
    const street = suggestion.streetLine ? `${suggestion.streetLine} ` : '';
    const secondary = suggestion?.secondary ? `${suggestion.secondary} ` : '';
    const entries = suggestion?.entries > 1 ? `(${suggestion.entries} more entries) ` : '';
    const city = suggestion?.city ? `${suggestion.city} ` : '';
    const state = suggestion?.state ? `${suggestion.state}, ` : '';
    const zip = suggestion?.zipcode ? `${suggestion.zipcode}` : '';

    return street + secondary + entries + city + state + zip;
  };

  setIsHovered = (isHovered) => {
    this.setState({ isHovered });
  };

  buildResultHoverClass = () => {
    const className = 'autocomplete-suggestions__suggestion paragraph';
    return this.state.isHovered
      ? className + ' autocomplete-suggestions__suggestion--hover'
      : className;
  };

  render() {
    return (
      <div
        className={this.buildResultHoverClass()}
        onClick={this.props.selectSuggestion}
        onMouseEnter={() => this.setIsHovered(true)}
        onMouseLeave={() => this.setIsHovered(false)}>
        {this.formatAutocompleteSuggestion(this.props.suggestion)}
      </div>
    );
  }
}

export default Suggestion;

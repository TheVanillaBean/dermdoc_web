import React, { Component } from 'react';

class Suggestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  formatAutocompleteSuggestionStreet = (suggestion) => {
    const street = suggestion.streetLine ? `${suggestion.streetLine} ` : '';
    const secondary = suggestion?.secondary ? `${suggestion.secondary} ` : '';

    return street + secondary;
  };

  formatAutocompleteSuggestionCity = (suggestion) => {
    const entries = suggestion?.entries > 1 ? `(${suggestion.entries} more entries) ` : '';
    const city = suggestion?.city ? `${suggestion.city} ` : '';
    const state = suggestion?.state ? `${suggestion.state}, ` : '';
    const zip = suggestion?.zipcode ? `${suggestion.zipcode}` : '';

    return entries + city + state + zip;
  };

  setIsHovered = (isHovered) => {
    this.setState({ isHovered });
  };

  buildResultHoverClass = () => {
    const className = 'autocomplete-suggestions__suggestion';
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
        <p className='paragraph'>
          <b>{this.formatAutocompleteSuggestionStreet(this.props.suggestion)}</b>
          {this.formatAutocompleteSuggestionCity(this.props.suggestion)}
        </p>
      </div>
    );
  }
}

export default Suggestion;

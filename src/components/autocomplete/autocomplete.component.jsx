import React, { Component } from 'react';
import * as SmartySDK from 'smartystreets-javascript-sdk';
import InputForm from './input-form.component';
import Suggestions from './suggestions.component';

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldValidate: true,
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'US',
      suggestions: { result: [] },
      error: '',
    };

    const SmartyCore = SmartySDK.core;
    const websiteKey = ''; // Your website key here
    const smartySharedCredentials = new SmartyCore.SharedCredentials(websiteKey);
    const autoCompleteClientBuilder = new SmartyCore.ClientBuilder(
      smartySharedCredentials
    ).withLicenses(['us-autocomplete-pro-cloud']);

    this.SmartyCore = SmartyCore;
    this.autoCompleteClient = autoCompleteClientBuilder.buildUsAutocompleteProClient();
  }

  updateStateFromForm = (key, value) => {
    const newState = {};
    newState[key] = value;

    this.setState(newState);
  };

  updateField = (e) => {
    this.updateStateFromForm(e.target.id, e.target.value);
  };

  formatAutocompleteSuggestion = (suggestion) => {
    const street = suggestion.streetLine ? `${suggestion.streetLine} ` : '';
    const secondary = suggestion?.secondary ? `${suggestion.secondary} ` : '';
    const entries = suggestion?.entries !== 0 ? `(${suggestion.entries}) ` : '';
    const city = suggestion?.city ? `${suggestion.city} ` : '';
    const state = suggestion?.state ? `${suggestion.state}, ` : '';
    const zip = suggestion?.zipcode ? `${suggestion.zipcode}` : '';

    return street + secondary + entries + city + state + zip;
  };

  queryAutocompleteForSuggestions = (query, hasSecondaries = false) => {
    const lookup = new SmartySDK.usAutocompletePro.Lookup(query);

    if (hasSecondaries) {
      lookup.selected = query;
    }
    console.log(lookup);
    this.autoCompleteClient
      .send(lookup)
      .then((results) => {
        this.setState({ suggestions: results });
      })
      .catch(console.warn);
  };

  selectSuggestion = (suggestion) => {
    if (suggestion.entries > 1) {
      this.queryAutocompleteForSuggestions(this.formatAutocompleteSuggestion(suggestion), true);
    } else {
      this.useAutoCompleteSuggestion(suggestion).then(() => {
        if (this.state.shouldValidate) this.validateUsAddress();
      });
    }
  };

  useAutoCompleteSuggestion = (suggestion) => {
    console.log('suggestion: ', suggestion);
    return new Promise((resolve) => {
      this.setState(
        {
          address1: suggestion.streetLine,
          address2: suggestion.secondary,
          city: suggestion.city,
          state: suggestion.state,
          zipCode: suggestion.zipcode,
          suggestions: { result: [] },
        },
        resolve
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <InputForm
            updateField={this.updateField}
            queryAutocompleteForSuggestions={this.queryAutocompleteForSuggestions}
            state={this.state}
          />
          <Suggestions
            suggestions={this.state.suggestions}
            selectSuggestion={this.selectSuggestion}
          />
        </div>
        {this.state.error && (
          <div>
            <h3>Validation Error:</h3>
            {this.state.error}
          </div>
        )}
      </div>
    );
  }
}

export default AutoComplete;

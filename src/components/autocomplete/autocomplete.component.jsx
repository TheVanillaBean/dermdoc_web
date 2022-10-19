import React, { Component } from 'react';
import * as SmartySDK from 'smartystreets-javascript-sdk';
import * as sdkUtils from 'smartystreets-javascript-sdk-utils';
import FormInput from '../form-input/form-input.component';
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
    const websiteKey = '138393301843418180'; // Your website key here
    const smartySharedCredentials = new SmartyCore.SharedCredentials(websiteKey);
    const autoCompleteClientBuilder = new SmartyCore.ClientBuilder(
      smartySharedCredentials
    ).withLicenses(['us-autocomplete-pro-cloud']);
    const usStreetClientBuilder = new SmartyCore.ClientBuilder(smartySharedCredentials);

    this.SmartyCore = SmartyCore;
    this.autoCompleteClient = autoCompleteClientBuilder.buildUsAutocompleteProClient();
    this.usStreetClient = usStreetClientBuilder.buildUsStreetApiClient();
  }

  updateField = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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

  validateUsAddress = () => {
    let lookup = new SmartySDK.usStreet.Lookup();
    lookup.street = this.state.address1;
    lookup.street2 = this.state.address2;
    lookup.city = this.state.city;
    lookup.state = this.state.state;
    lookup.zipCode = this.state.zipCode;

    if (!!lookup.street) {
      this.usStreetClient
        .send(lookup)
        .then((response) => this.updateStateFromValidatedUsAddress(response, true))
        .catch((e) => this.setState({ error: e.error }));
    } else {
      this.setState({ error: 'A street address is required.' });
    }
  };

  updateStateFromValidatedUsAddress = (response, isAutocomplete = false) => {
    const lookup = response.lookups[0];
    const isValid = sdkUtils.isValid(lookup);
    const isAmbiguous = sdkUtils.isAmbiguous(lookup);
    const isMissingSecondary = sdkUtils.isMissingSecondary(lookup);
    const newState = {
      error: '',
    };

    if (!isValid) {
      newState.error = 'The address is invalid.';
    } else if (isAmbiguous) {
      newState.error = 'The address is ambiguous.';
    } else if (isMissingSecondary && !isAutocomplete) {
      newState.error = 'The address is missing a secondary number.';
    } else if (isValid) {
      const candidate = lookup.result[0];

      newState.address1 = candidate.deliveryLine1;
      newState.address2 = candidate.deliveryLine2 || '';
      newState.city = candidate.components.cityName;
      newState.state = candidate.components.state;
      newState.zipCode = `${candidate.components.zipCode}-${candidate.components.plus4Code}`;
      newState.error = '';
    }

    this.setState(newState);
    console.log(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <form className={'autocomplete--input-form'}>
            <FormInput
              type='text'
              name='address1'
              value={this.state['address1']}
              onChange={(e) => {
                this.updateField(e);

                this.queryAutocompleteForSuggestions(e.target.value);
              }}
              label='Shipping Address'
              placeholder=''
              required
            />
            {this.state['state'].length > 0 ? (
              <>
                <FormInput
                  type='text'
                  name='address2'
                  value={this.state['address2']}
                  onChange={(e) => {
                    this.updateField(e);
                  }}
                  label='Address line 2'
                  placeholder='Address line 2'
                  required
                />
                <FormInput
                  type='text'
                  name='city'
                  value={this.state['city']}
                  onChange={(e) => {
                    this.updateField(e);
                  }}
                  label='City'
                  placeholder='City'
                  required
                />
                <FormInput
                  type='text'
                  name='zipCode'
                  value={this.state['zipCode']}
                  onChange={(e) => {
                    this.updateField(e);
                  }}
                  label='Zip Code'
                  placeholder='Zip Code'
                  required
                />
                <FormInput
                  type='text'
                  name='state'
                  value={this.state['state']}
                  onChange={(e) => {
                    this.updateField(e);
                  }}
                  label='State'
                  placeholder='State'
                  required
                />
              </>
            ) : null}
          </form>
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

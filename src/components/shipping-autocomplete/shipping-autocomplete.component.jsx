import React, { Component } from 'react';
import * as SmartySDK from 'smartystreets-javascript-sdk';
import * as sdkUtils from 'smartystreets-javascript-sdk-utils';
import Suggestions from '../autocomplete/suggestions.component';
import FormInput from '../form-input/form-input.component';
const { REACT_APP_SMARTY_ID } = process.env;
class ShippingAutoComplete extends Component {
  constructor(props) {
    super(props);

    const SmartyCore = SmartySDK.core;
    const websiteKey = REACT_APP_SMARTY_ID;
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
    this.props.updateState({ [name]: value });
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
    this.autoCompleteClient
      .send(lookup)
      .then((results) => {
        this.props.updateState({ suggestions: results });
      })
      .catch(console.warn);
  };

  selectSuggestion = (suggestion) => {
    if (suggestion.entries > 1) {
      this.queryAutocompleteForSuggestions(this.formatAutocompleteSuggestion(suggestion), true);
    } else {
      this.useAutoCompleteSuggestion(suggestion).then(() => {
        if (this.props.state.shouldValidate) this.validateUsAddress();
      });
    }
  };

  useAutoCompleteSuggestion = (suggestion) => {
    console.log('suggestion: ', suggestion);
    return new Promise((resolve) => {
      this.props.updateState(
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
      this.props.updateState({ error: 'A street address is required.' });
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
  };

  render() {
    return (
      <>
        <>
          <form>
            <FormInput
              type='text'
              name='address1'
              value={this.props.state['address1']}
              onChange={(e) => {
                this.updateField(e);

                this.queryAutocompleteForSuggestions(e.target.value);
              }}
              label='Shipping Address'
              placeholder='Enter your shipping address'
              required
            />

            {this.props.state['state'].length > 0 ? (
              <>
                <FormInput
                  type='text'
                  name='address2'
                  value={this.props.state['address2']}
                  onChange={(e) => {
                    this.updateField(e);
                  }}
                  label='Address line 2'
                  placeholder='Address line 2'
                  required
                />
                <div className={'shipping-city'}>
                  <FormInput
                    type='text'
                    name='city'
                    value={this.props.state['city']}
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
                    value={this.props.state['zipCode']}
                    onChange={(e) => {
                      this.updateField(e);
                    }}
                    label='Zip Code'
                    placeholder='Zip Code'
                    required
                  />
                </div>
                <FormInput
                  type='text'
                  name='state'
                  value={this.props.state['state']}
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
          {this.props.state.suggestions.result.length > 0 ? (
            <Suggestions
              suggestions={this.props.state.suggestions}
              selectSuggestion={this.selectSuggestion}
            />
          ) : null}
        </>
        {this.props.state.error && (
          <div>
            <h3>Validation Error:</h3>
            {this.props.state.error}
          </div>
        )}
      </>
    );
  }
}

export default ShippingAutoComplete;

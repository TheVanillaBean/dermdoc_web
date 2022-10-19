import React from 'react';
import FormInput from '../form-input/form-input.component';

const inputFields = [
  {
    fieldName: 'address1',
    fieldLabel: 'Address 1',
  },
  {
    fieldName: 'address2',
    fieldLabel: 'Address 2',
  },
  {
    fieldName: 'city',
    fieldLabel: 'City',
  },
  {
    fieldName: 'state',
    fieldLabel: 'State',
  },
  {
    fieldName: 'zipCode',
    fieldLabel: 'Zip Code',
  },
];

const InputForm = ({ state, updateField, queryAutocompleteForSuggestions }) => {
  return (
    <form className={'autocomplete--input-form'}>
      {inputFields.map((inputField) => {
        return (
          <FormInput
            type='text'
            name={inputField.fieldName}
            value={state[inputField.fieldName]}
            onChange={(e) => {
              updateField(e);

              if (inputField.fieldName === 'address1') {
                queryAutocompleteForSuggestions(e.target.value);
              }
            }}
            label={inputField.fieldLabel}
            placeholder=''
            required
          />
        );
      })}
    </form>
  );
};

export default InputForm;

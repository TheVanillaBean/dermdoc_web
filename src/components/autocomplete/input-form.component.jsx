import React from 'react';

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
          <div className={'autocomplete--input-group'} key={inputField.fieldName}>
            <label className={'autocomplete--input-label'} htmlFor={inputField.fieldName}>
              {inputField.fieldLabel}
            </label>
            <input
              className={'autocomplete--input-field'}
              type='text'
              id={inputField.fieldName}
              value={state[inputField.fieldName]}
              onChange={(e) => {
                updateField(e);

                if (inputField.fieldName === 'address1') {
                  queryAutocompleteForSuggestions(e.target.value);
                }
              }}
            />
          </div>
        );
      })}
    </form>
  );
};

export default InputForm;

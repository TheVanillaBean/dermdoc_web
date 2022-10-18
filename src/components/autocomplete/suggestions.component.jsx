import React from 'react';
import Suggestion from './suggestion.component';

const Suggestions = ({ suggestions, selectSuggestion }) => {
  const suggestionList = suggestions.result;

  return (
    <div className={'autocomplete--suggestions'}>
      {suggestionList.map((suggestion, key) => (
        <Suggestion
          key={key}
          suggestion={suggestion}
          selectSuggestion={() => selectSuggestion(suggestion)}
        />
      ))}
    </div>
  );
};

export default Suggestions;

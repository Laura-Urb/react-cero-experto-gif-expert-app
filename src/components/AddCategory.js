import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmite = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleOnSubmite}>
      <input type='text' value={inputValue} onChange={handleOnChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

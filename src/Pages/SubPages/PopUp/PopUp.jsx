import { useState } from 'react';
import './popup.sass';

const  Popup = (props) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  }

  return (
    <div className="popup__container">
      <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your input:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Popup;

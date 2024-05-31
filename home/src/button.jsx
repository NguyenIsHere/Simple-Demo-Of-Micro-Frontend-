import React from 'react';

const Button = () => {
  const handleClick = () => {
    const event = new CustomEvent('buttonClicked', { detail: 'Button was clicked!' });
    window.dispatchEvent(event);
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default Button;
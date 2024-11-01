import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white bg-opacity-80 shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
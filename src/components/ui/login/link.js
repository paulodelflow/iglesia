import React from 'react';

const Link = ({ href, children, className, ...props }) => {
  return (
    <a
      href={href}
      className={`inline-block align-baseline font-bold text-sm text-amber-600 hover:text-amber-800 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
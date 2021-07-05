import React from "react";

const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <div className="flex items-center brand">
        <img src="/assets/images/lala.png" alt="company-logo" />
        <span className="brand__text">MIS</span>
      </div>
      {children}
    </div>
  );
};

export default Brand;

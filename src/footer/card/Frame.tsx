import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Frame: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="footer-card">
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
};

export default Frame;
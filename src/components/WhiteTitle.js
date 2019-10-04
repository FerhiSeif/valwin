import React from 'react';

import './WhiteTitle.css';

const WhiteTitle = ({ children }) => (
  <div className="WhiteTitle-Container">
    <p className="WhiteTitle-text">{children}</p>
  </div>
);

// WhiteTitle.propTypes = {
//     children: PropTypes.node,
// }

export default WhiteTitle;

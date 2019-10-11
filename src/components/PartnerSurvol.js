import React from 'react';
import pluscirclewhite from '../icons/pluscirclewhite.svg';
import pluscircleyellow from '../icons/pluscircleyellow.svg';
import pluscirclegreen from '../icons/pluscirclegreen.svg';

import './PartnerSurvol.css';

const PartnerSurvol = ({ color }) => {
  return (
    <div className={`Partners-hoverdiv Partners-hoverdiv${color}`}>
      <hr className={`Partners-hr${color}`} />
      <p className={`Partners-title`}>BAYER</p>
      <p className={`Partners-text`}>Voir les gammes</p>
      <img
        src={
          color === 'green'
            ? pluscirclewhite
            : color === 'greenlight'
            ? pluscirclegreen
            : color === 'yellow'
            ? pluscirclewhite
            : color === 'yellowlight'
            ? pluscircleyellow
            : false
        }
        alt="plus circle icon"
        className="Partner-pluscircle"
      />
    </div>
  );
};

export default PartnerSurvol;

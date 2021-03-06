import React from 'react';
import pluscirclewhite from '../icons/pluscirclewhite.svg';
import pluscircleyellow from '../icons/pluscircleyellow.svg';
import pluscirclegreen from '../icons/pluscirclegreen.svg';

import './PartnerSurvol.css';

const PartnerSurvol = ({ color, mark }) => {
  return (
    <div className={`Partners-hoverdiv Partners-hoverdiv${color}`}>
      <hr className={`Partners-hr Partners-hr${color}`} />
      <p className={`Partners-title TextComponent-bold`}>{mark}</p>
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

import React from 'react';

import './VirtuesCardList.css';

const color = ['Green', 'YellowLight', 'GreenLight', 'Yellow'];
const Virtues = [
  {
    number: 'O1',
    title: 'La responsabilité',
    text: 'Pour redonner du sens et de l’autonomie au quotidien',
  },
  {
    number: 'O2',
    title: 'Le respect et la confiance',
    text: 'Pour établir un relation saine au sein de notre réseau',
  },
  {
    number: 'O3',
    title: 'La transparence',
    text: 'Pour garantir la participation éclairée de chacun',
  },
  {
    number: 'O4',
    title: 'La performance',
    text: 'Pour gagner en efficacité envers les clients et les labos  ',
  },
];

const VirtuesCardList = () =>
  Virtues.map((elem, i) => {
    return (
      <div
        key={i}
        className={`assembledsection-roles assembledsection-roles${color[i]}`}
      >
        <p className={`assembledsection-roles-Number TextComponent-bold`}>
          {elem.number}.
        </p>
        <div
          className={`assembledsection-rolesPargraph ${
            color[i] === 'Green' || color[i] === 'Yellow'
              ? 'TextWhite'
              : color[i] === 'YellowLight'
              ? 'TextYellow'
              : color[i] === 'GreenLight'
              ? 'TextGreen'
              : ''
          }`}
        >
          <p className="rolesPargraph-title">{elem.title}</p>
          <p className="rolesPargraph-text">{elem.text} </p>
        </div>
      </div>
    );
  });

export default VirtuesCardList;

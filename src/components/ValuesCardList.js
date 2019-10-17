import React, { Component } from 'react';
import msg from '../icons/msg.svg';
import commerce from '../icons/commerce.svg';
import groupement from '../icons/groupements.svg';
import suiviPerso from '../icons/suivi-perso.svg';
import smile from '../icons/Smile.png';
import negaciation from '../icons/negaciation.svg';
import './ValuesCardList.css';

class ValuesCardList extends Component {
  state = {
    articleslist1: [
      { img: smile, text: 'Une identité commune' },
      { img: groupement, text: 'Un groupement indépendant et transparent ' },
    ],
    articleslist2: [
      { img: negaciation, text: 'Négociation direct avec les fournisseurs' },
      { img: commerce, text: 'Opérations commerciales annuelles' },
    ],
    articleslist3: [
      { img: suiviPerso, text: ' Un accompagnement au quotidien' },
      { img: msg, text: 'Outils de communication opérationnels ' },
    ],
  };

  _generateElemnts(listCards, reverse) {
    var listElements = [];
    {
      listCards.map((article, i) => {
        listElements.push(
          <div
            key={i}
            className={`ValuesCard-container  ${
              i % 2 == 0
                ? 'ValuesCard-containerShort'
                : 'ValuesCard-containerLong'
            }`}
          >
            <img
              src={article.img}
              className={`ValuesCard-img ${
                i % 2 == 0 ? 'ValuesCard-imgShort' : 'ValuesCard-imgLong'
              }`}
              alt="image Article"
            />
            <hr className="ValuesCard-hr" />
            <p className="ValuesCard-text"> {article.text}</p>
          </div>
        );
      });
    }
    return (
      <div
        className={
          reverse
            ? 'ValuesCardList-blocAricleReverse'
            : 'ValuesCardList-blocAricle'
        }
      >
        {listElements}
      </div>
    );
  }
  render() {
    return (
      <div className="ValuesCardList-container">
        {this._generateElemnts(this.state.articleslist1, true)}
        {this._generateElemnts(this.state.articleslist2, false)}
        {this._generateElemnts(this.state.articleslist2, true)}
      </div>
    );
  }
}

export default ValuesCardList;

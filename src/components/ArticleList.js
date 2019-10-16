import React, { Component } from 'react';
import imageArticle from '../images/imageArticle.png';
import TextComponent from './TextComponent';
import './ArticleList.css';

class ArticleList extends Component {
  state = {
    articleslist1: [
      { img: imageArticle, text: 'Couches bébés 1: pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés 2: pas d’alerte à ce stade.' },
    ],
    articleslist2: [
      { img: imageArticle, text: 'Couches bébés 3 : pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés 4: pas d’alerte à ce stade.' },
    ],
  };

  _generateElemnts(listCards, reverse) {
    var listElements = [];
    {
      listCards.map((article, i) => {
        listElements.push(
          <div
            key={i}
            className={`ArticleCard-container  ${
              i % 2 == 0
                ? 'ArticleCard-containerShort'
                : 'ArticleCard-containerLong'
            }`}
          >
            <img
              src={article.img}
              className={
                i % 2 == 0 ? 'ArticleCard-imgShort' : 'ArticleCard-imgLong'
              }
              alt="image Article"
            />
            <hr className="ArticleCard-hr" />
            <p className="ArticleCard-text"> {article.text}</p>
          </div>
        );
      });
    }
    return (
      <div
        className={
          reverse ? 'ArticleListe-blocAricleReverse' : 'ArticleListe-blocAricle'
        }
      >
        {listElements}
      </div>
    );
  }
  render() {
    return (
      <div className="ArticleListe-container">
        {this._generateElemnts(this.state.articleslist1, true)}
        {this._generateElemnts(this.state.articleslist2, false)}
      </div>
    );
  }
}

export default ArticleList;

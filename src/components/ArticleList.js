import React, { Component } from 'react';
import { imageArticle } from '../images/imageArticle.png';
import './ArticleList.css';

class ArticleListe extends Component {
  state = {
    article: [
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
    ],
  };
  render() {
    return (
      <div className="ArticleListe-container">
        {this.state.article.map((article, i) => {
          return (
            <div className="ArticleCard-container">
              <div
                className="ArticleCard-imgContainer" /* src={require('../icons/imageArticle.png')}*/
              />
              <hr className="ArticleCard-hr" />
              <p className="ArticleCard-text"> {article.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleListe;

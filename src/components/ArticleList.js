import React, { Component } from 'react';
import imageArticle from '../images/imageArticle.png';
import TextComponent from './TextComponent';
import './ArticleList.css';

class ArticleList extends Component {
  state = {
    articles: [
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
      { img: imageArticle, text: 'Couches bébés : pas d’alerte à ce stade.' },
    ],
  };
  render() {
    return (
      <div className="ArticleListe-container">
        {this.state.articles.map((article, i) => {
          return (
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
              <TextComponent small={true}> {article.text}</TextComponent>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;

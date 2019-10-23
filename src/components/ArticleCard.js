import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ img, text }) => {
  return (
    <div className="ArticleCardComponent">
      <img src={img} className="ArticleCardComponent-Img" alt="Article" />
      <hr className="ArticleCardComponent-hr" />
      <p className="ArticleCardComponent-text">{text}</p>
    </div>
  );
};

export default ArticleCard;

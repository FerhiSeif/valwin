import React from 'react';
import ArticleCard from '../src/components/ArticleCard';
import imageArticle from '../src/images/imageArticle.png';
import '../src/App.css';

const article = {
  img: imageArticle,
  text: 'Couches bébés 1: pas d’alerte à ce stade.',
};
export default {
  title: 'ArticleCard',
};

export const articleCard = () => (
  <ArticleCard img={article.img} text={article.text} />
);

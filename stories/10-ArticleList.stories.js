import React from 'react';
import { action } from '@storybook/addon-actions';
import '../src/App.css';
import ArticleList from '../src/components/ArticleList';

export default {
  title: 'ArticleList',
};

export const articleList = () => <ArticleList />;

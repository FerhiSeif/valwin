import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout';
import Button from '../components/Button';
import ArticleListe from '../components/ArticleList';
import './Home.css';

const Home = () => (
  <Layout>
    <Helmet
      title="Normadie Pharma - Accueil"
      meta={[
        {
          name: 'description',
          content: 'Normadie Pharma - Pharmacies made in Normandie !',
        },
      ]}
    ></Helmet>
    <div className="Home">Bienvenue chez Normadie Pharma !</div>
    <Button>Je suis un bouton</Button>
    <ArticleListe />
  </Layout>
);

export default Home;

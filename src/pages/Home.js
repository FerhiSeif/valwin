import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/SearchBar';
import Layout from './Layout';
import Button from '../components/Button';
import ArticleListe from '../components/ArticleList';
import Partners from '../components/Partners';
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
    <Partners />
    {/* <Button>Je suis un bouton</Button>
    <ArticleListe /> */}
    {/* <SearchBar></SearchBar> */}
  </Layout>
);

export default Home;

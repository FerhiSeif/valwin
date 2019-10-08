import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/SearchBar';
import Layout from './Layout';
import ImgComponent from '../components/ImgComponent';
import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
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
    <p>jhjhjh</p>
    <section className="Home-Introsection">
      <ImgComponent />
      <SearchBar />
    </section>
  </Layout>
);

export default Home;

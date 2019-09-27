import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout';
import Button from '../components/Button';
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
  </Layout>
);

export default Home;

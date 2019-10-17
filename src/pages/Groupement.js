import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import logo1 from '../icons/logo.svg';
import pharmadep from '../images/local.png';
import ImgComponent from '../components/ImgComponent';
import TextComponent from '../components/TextComponent';

import './Groupement.css';

const Groupement = () => (
  <Layout>
    <Helmet
      title="Normandie Pharma - Accueil"
      meta={[
        {
          name: 'description',
          content: 'Normandie Pharma - Pharmacies made in Normandie !',
        },
      ]}
    ></Helmet>
    <section className="Groupement-Introduction">
      <ImgComponent />
    </section>
    <section className="Groupement-definition">
      <div className="Groupement-defSection-text">
        <TextComponent green={true}>
          Qui <span className="TextComponent-bold">somme-nous</span>
        </TextComponent>

        <TextComponent large={true}>
          {' '}
          Nous Sommes un{' '}
          <span className="TextComponent-bold">
            {' '}
            collectivf autonome et independant{' '}
          </span>
        </TextComponent>
        <br />
        <TextComponent large={true}>
          {' '}
          Nous Sommes un{' '}
          <span className="TextComponent-bold">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
            <span className="TextComponent-bold">
              {' '}
              labore et dolore magna aliqua{' '}
            </span>{' '}
          </span>
        </TextComponent>
      </div>
      <div className="Groupement-defSection-img">
        <img src={logo1} className="logo-pharma" alt="logo normandie pharma" />
        <img
          src={pharmadep}
          className="pharmadep-image"
          alt="logo normandie pharma"
        />
      </div>
    </section>
  </Layout>
);

export default Groupement;

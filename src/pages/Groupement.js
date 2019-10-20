import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import logo from '../icons/logo.svg';
import pharmadep from '../images/local.png';
import imageValeur from '../images/imageValeur.png';
import introImg from '../images/groupementIntroImg.png';
import ImgComponent from '../components/ImgComponent';
import ValuesCardList from '../components/ValuesCardList';
import VirtuesCardList from '../components/VirtuesCardList';
import TitleContainer from '../components/TitleContainer';
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
      <ImgComponent
        urlImg={introImg}
        text1="Normandie Pharma"
        text2="une aventure qui repose"
        text3="sur la cohésion de notre collectif"
        text4="à taille humaine."
      />
    </section>
    <section className="Groupement-definition">
      <div className="Groupement-defSection-text">
        <TextComponent green={true}>
          Qui <span className="TextComponent-bold">somme-nous</span>
        </TextComponent>

        <TextComponent small={true}>
          {' '}
          Nous Sommes un{' '}
          <span className="TextComponent-bold">
            {' '}
            collectivf autonome et independant{' '}
          </span>
        </TextComponent>
        <br />
        <TextComponent small={true}>
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
        <img src={logo} className="logo-pharma" alt="logo normandie pharma" />
        <img src={pharmadep} className="pharmadep-image" alt="logo immeuble" />
      </div>
    </section>
    <section className="Groupement-Virtuessection">
      <p className="assembledsection-Title" large={true}>
        Qui se ressemble, <span className="TextComponent-bold">s'assemble</span>
      </p>
      <div className="assembledsection-VirtuesCardList">
        <VirtuesCardList />
      </div>
    </section>
    <section className="Groupement-Valuessection">
      <div className="Valuesection-titleValue-Contain">
        <p className="assembledsection-Title">
          Nos <span className="TextComponent-bold">valeurs</span>
        </p>
        <div className="Valuessection-valuesimage-Conatiner">
          <img
            src={imageValeur}
            className="Valuessection-valuesimage"
            alt="smile image"
          />
          <ValuesCardList />
        </div>
      </div>
      <div className="Groupement-Servicesection-title">
        <TitleContainer textWhite={true}>
          {' '}
          Tout ce dont j'ai besoin.
        </TitleContainer>
        <TitleContainer white={true} className="fff">
          {' '}
          au prix qui me va bien!
        </TitleContainer>
      </div>
    </section>
  </Layout>
);

export default Groupement;

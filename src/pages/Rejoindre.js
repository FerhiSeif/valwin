import React from 'react';
import { Helmet } from 'react-helmet';
import ImgComponent from '../components/ImgComponent';
import introImg from '../images/RejoindreIntroImg.png';
import RejoindreForm from '../components/RejoindreForm';
import TextComponent from '../components/TextComponent';
import Layout from './Layout';

import './Rejoindre.css';

const Rejoindre = () => {
  return (
    <Layout>
      <Helmet
        title="Normandie Pharma - Pharmacies"
        meta={[
          {
            name: 'description',
            content: 'Normandie Pharma - Pharmacies made in Normandie !',
          },
        ]}
      ></Helmet>
      <section className="Rejoindre-Introduction">
        <ImgComponent
          urlImg={introImg}
          text1="Quand j’ai une question,"
          text2="je sais à qui demander ! "
        />
      </section>
      <section className="Rejoindre-ContactSection">
        <div className="ContactSection-text">
          <TextComponent green={true}>
            Vous voulez être{' '}
            <span className="TextComponent-bold"> adhérent</span>
          </TextComponent>
          <div className="ContactSection-textsmall-container">
            <TextComponent small={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{' '}
            </TextComponent>
          </div>
          <TextComponent telNumber={true}>
            <span className="TextComponent-bold">06 11 22 33 44</span>
          </TextComponent>
        </div>
        <RejoindreForm />
      </section>
      <div className="Rejoindre-whiteCobtainer"></div>
    </Layout>
  );
};

export default Rejoindre;

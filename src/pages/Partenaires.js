import React from 'react';
import { Helmet } from 'react-helmet';
import ImgComponent from '../components/ImgComponent';
import introImg from '../images/PartenairesImgIntro.png';
import Partners from '../components/Partners';
import Layout from './Layout';

import './Partenaires.css';

const Partenaires = () => {
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
      <section className="Partenaires-Introduction">
        <ImgComponent
          urlImg={introImg}
          text1="Choix et qualité"
          text2="De super partenaires"
          text3=" pour des services de qualité ! "
        />
      </section>
      <section className="Partenaires-PartnrsList-Container">
        <p className="PartnrsList-Container-Title">
          Nos <span className="TextComponent-bold">partenaires</span>
        </p>
        <Partners />
      </section>
      <div className="Partenaires-whiteCobtainer"></div>
    </Layout>
  );
};

export default Partenaires;

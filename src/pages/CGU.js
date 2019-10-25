import React from 'react';
import { Helmet } from 'react-helmet';
import ImgComponent from '../components/ImgComponent';
import introImg from '../images/CGUImg.png';
import RejoindreForm from '../components/RejoindreForm';
import TextComponent from '../components/TextComponent';
import Layout from './Layout';

import './CGU.css';

const CGU = () => {
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
      <section className="CGU-Introduction-section">
        <ImgComponent
          urlImg={introImg}
          text1="Mentions légales"
          text2="et conditions génerals"
          text3="d’utilisation du site"
        />
      </section>
      <section className="CGU-infoContainer-Section">
        <div className="infoContainer-Sectiontext-Container">
          <TextComponent green={true}>
            1. Présentation{' '}
            <span className="TextComponent-bold">du site. </span>
          </TextComponent>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
          <p className="infoContainer-Section-text TextComponent-bold">
            Raison sociale
          </p>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
          <p className="infoContainer-Section-text TextComponent-bold">
            Adresse
          </p>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
          <p className="infoContainer-Section-text TextComponent-bold">
            Responsable publication
          </p>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
        </div>
        <div className="infoContainer-Sectiontext-Container">
          <div className="infoContainer-Section-title">
            <TextComponent green={true}>
              2. Conditions générals d’utilisation{' '}
              <span className="TextComponent-bold">
                du site et des services proposés.{' '}
              </span>
            </TextComponent>
          </div>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
        </div>
        <div className="infoContainer-Sectiontext-Container">
          <div className="infoContainer-Section-title">
            <TextComponent green={true}>
              3. Description{' '}
              <span className="TextComponent-bold">
                {' '}
                des services fournis.{' '}
              </span>
            </TextComponent>
          </div>
          <p className="infoContainer-Section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et
            auctor urna, dolor. Dui massa egestas pharetra, risus egestas nunc
            malesuada massa. Amet, eu at porttitor convallis pretium mi :
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CGU;

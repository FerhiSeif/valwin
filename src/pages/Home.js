import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/SearchBar';
import Layout from './Layout';
import ImgComponent from '../components/ImgComponent';
import PromoCardList from '../components/PromoCardList';
import TitleContainer from '../components/TitleContainer';
import Button from '../components/Button';
import TextComponent from '../components/TextComponent';
import ArticleList from '../components/ArticleList';
import IconsList from '../components/IconsList';
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
    <section className="Home-Introsection">
      <ImgComponent />
      <SearchBar />
    </section>
    <section className="Home-Promosection">
      <PromoCardList className="hei" />
      <div className="Home-Promosection-info">
        <TextComponent green={true}>
          {' '}
          Nos <span className="TextComponent-bold">promotions</span>{' '}
        </TextComponent>
        <div className="Promosection-textContainer">
          <TextComponent small={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </TextComponent>
        </div>
        <Button medium={true}>Toutes les promotions</Button>
      </div>
      <div className="Home-Promosection-title">
        <TitleContainer green={true} C>
          {' '}
          Tout ce dont j'ai besoin.
        </TitleContainer>
        <TitleContainer white={true}> au prix qui me va bien!</TitleContainer>
      </div>
    </section>
    <section className="Home-Articlesection">
      <TextComponent large={true}>
        Nos derniers <span className="TextComponent-bold">articles</span>
      </TextComponent>
      <ArticleList />
      <Button medium={true}>Tous les articles</Button>
    </section>
    <section className="Home-Servicesection">
      <div className="Servicesection-textContainer">
        <TextComponent green={true}>
          Nos <span className="TextComponent-bold">service</span>{' '}
        </TextComponent>
        <TextComponent small={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </TextComponent>
      </div>
      <IconsList />
      <div className="Home-Servicesection-title">
        <TitleContainer green={true} C>
          {' '}
          Tout ce dont j'ai besoin.
        </TitleContainer>
        <TitleContainer white={true}> au prix qui me va bien!</TitleContainer>
      </div>
    </section>
  </Layout>
);

export default Home;

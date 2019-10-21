import React from 'react';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/SearchBar';
import Layout from './Layout';
import IntroCarousel from '../components/IntroCarousel';
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
      title="Normandie Pharma - Accueil"
      meta={[
        {
          name: 'description',
          content: 'Normandie Pharma - Pharmacies made in Normandie !',
        },
      ]}
    ></Helmet>
    <section className="Home-Introduction">
      <IntroCarousel />
      <SearchBar />
    </section>
    <section className="Home-Promosection">
      <div className="Home-Promosection-Cardlist">
        <PromoCardList />
      </div>
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
      <p className="Home-Articlesection-Title" large={true}>
        Nos derniers <span className="TextComponent-bold">articles</span>
      </p>
      <ArticleList />
      <Button medium={true}>Tous les articles</Button>
    </section>
    <section className="Home-Servicesection-container">
      <div className="Home-Servicesection">
        <div className="Servicesection-textContainer">
          <TextComponent green={true}>
            Nos <span className="TextComponent-bold">services</span>{' '}
          </TextComponent>
          <TextComponent small={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </TextComponent>
        </div>
        <div className="Home-ServicesectionIcont-cont">
          <IconsList />
        </div>
        <div className="Home-Servicesection-title">
          <TitleContainer textWhite={true}>
            {' '}
            Tout ce dont j'ai besoin.
          </TitleContainer>
          <TitleContainer white={true} className="fff">
            {' '}
            au prix qui me va bien!
          </TitleContainer>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;

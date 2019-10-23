import React from 'react';
import { Helmet } from 'react-helmet';
import ImgComponent from '../components/ImgComponent';
import introImg from '../images/PartenairesImgIntro.png';
import imageArticle from '../images/imageArticle.png';
import Layout from './Layout';
import NewArticle from '../components/NewArticle';
import ArticleCard from '../components/ArticleCard';
import Button from '../components/Button';

import './Blog.css';

const aticleslist = [
  { img: imageArticle, text: 'Couches bébés 1: pas d’alerte à ce stade.' },
  { img: imageArticle, text: 'Couches bébés 2: pas d’alerte à ce stade.' },
  { img: imageArticle, text: 'Couches bébés 1: pas d’alerte à ce stade.' },
  { img: imageArticle, text: 'Couches bébés 2: pas d’alerte à ce stade.' },
  { img: imageArticle, text: 'Couches bébés 1: pas d’alerte à ce stade.' },
  { img: imageArticle, text: 'Couches bébés 2: pas d’alerte à ce stade.' },
];
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

      <section className="Blog-ArticleListe-section">
        <div className="Blog-ArticleListe-Container">
          <p className="PartnrsList-Container-Title">
            Nos <span className="TextComponent-bold">valeurs</span>
          </p>
          <Button filter={true}>FILTRER PAR</Button>

          <div className="Blog-NewArticleCard">
            <NewArticle />

            <div className="Blog-ArticleCard-List">
              {aticleslist.map((article, i) => (
                <ArticleCard img={article.img} text={article.text} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partenaires;

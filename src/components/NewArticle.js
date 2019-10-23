import React from 'react';
import NewArticleImg from '../images/newArticleImg.png';
import Button from '../components/Button';
import './NewArticle.css';

const NewArticle = () => {
  return (
    <div className="NewArticleCard-container">
      <img
        src={NewArticleImg}
        className="NewArticleCard-img"
        alt="Article image"
      />
      <div className="NewArticleCard-info ">
        <span className="newArticlelogo">Nouveau</span>
        <p className="NewArticleCard-title TextComponent-bold ">
          {' '}
          Quels sont les bienfaits d’une détox post-vacances
        </p>
        <p className="NewArticleCard-textRes">
          {' '}
          Pour beaucoup d’entre nous, le mois de septembre est très souvent
          synonyme de reprise du travail et de nouveaux challenges, après un été
          rythmé par les pauses....
        </p>
        <p className="NewArticleCard-text">
          {' '}
          Pour beaucoup d’entre nous, le mois de septembre est très souvent
          synonyme de reprise du travail et de nouveaux challenges, après un été
          rythmé par les pauses ensoleillées et les apéros entre amis… Ce repos
          est essentiel et réparateur, mais il faut l’avouer notre tonus en
          prend en coup. Alors, pour retrouver notre dynamisme, rien de tel
          qu’une cure détox post-vacances ! Vous verrez, votre foie vous en
          remerciera. On vous explique.
        </p>
        <div className="NewArticle-Button">
          <Button small={true}>En lire plus</Button>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;

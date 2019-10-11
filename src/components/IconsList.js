import React, { Component } from 'react';
import competitif from '../icons/competitif.svg';
import connecte from '../icons/connecte.svg';
import proximite from '../icons/proximite.svg';
import suiviPerso from '../icons/suivi-perso.svg';
import expert from '../icons/expert.svg';
import TextComponent from '../components/TextComponent';
import './IconsList.css';

class IconsList extends Component {
  state = {
    icons: [
      { img: competitif, text: 'Proximité' },
      { img: connecte, text: 'Suivi personnalisé' },
      { img: proximite, text: 'Expert' },
      { img: suiviPerso, text: 'Compétitif' },
      { img: expert, text: 'Compétitif' },
    ],
  };
  render() {
    return (
      <div className="IconsList-container">
        {this.state.icons.map((icon, i) => {
          return (
            <div key={i} className="IconsList-Item">
              <img
                src={icon.img}
                className="IconsList-img"
                alt="service icon"
              />

              <p className="IconsList-text"> {icon.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IconsList;

import React, { Component } from 'react';
import PromoImg from '../images/Product.png';
import PromoCard from './PromoCard';
import './PromoCardList.css';

class PromoCardList extends Component {
  state = {
    propmolists: [
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
      {
        img: PromoImg,
        title: 'BIODERMA',
        text: 'CDERM Lait hydratant douceur T/200ml',
        price: '6,46 €',
      },
    ],
  };
  render() {
    return (
      <div className="PromoCardList-container">
        {this.state.propmolists.map((article, i) => (
          <PromoCard
            key={i}
            promoImg={article.img}
            promoTitle={article.title}
            promoText={article.text}
            promoPrice={article.price}
          />
        ))}
      </div>
    );
  }
}

export default PromoCardList;

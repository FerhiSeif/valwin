import React, { Component } from 'react';
import Button from './Button';

import './RejoindreForm.css';
class RejoindreForm extends Component {
  render() {
    return (
      <form className="RejoindreForm-form">
        <p className="RejoindreForm-Title">
          Écrivez<span className="TextComponent-bold">-nous</span>
        </p>

        <input
          type="text"
          className="RejoindreFome-input"
          name="nom"
          placeholder="Votre nom"
        />
        <input
          type="text"
          className="RejoindreFome-input"
          name="email"
          placeholder="Votre e-mail"
        />
        <input
          type="text"
          className="RejoindreFome-input"
          name="phone"
          placeholder="Votre téléphone"
        />
        <input
          type="text"
          className="RejoindreFome-input"
          name="message"
          placeholder="Votre message"
        />
        <div className="RejoindreForm_btnContainer"></div>
        <Button small={true}>Envoyer</Button>
      </form>
    );
  }
}

export default RejoindreForm;

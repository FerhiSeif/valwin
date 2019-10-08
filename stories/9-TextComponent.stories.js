import React from 'react';
import TextComponent from '../src/components/TextComponent';
import '../src/App.css';

export default {
  title: 'TextComponent',
};

export const green = () => (
  <TextComponent green={true}>
    Nos <span className="TextComponent-bold">promotions </span>
  </TextComponent>
);

export const large = () => (
  <TextComponent large={true}>
    Viverra faucibus feugiat a{' '}
    <span className="TextComponent-bold">enim vitae ultricies eget nunc</span>,
    viverra. Leo non molestie feugiat sociis dictum. Faucibus rutrum facilisi
    tortor, cras viverra ut. Condimentum quam at risus at amet, amet et. Nulla
    lorem auctor viverra malesuada urna. Lectus varius eget augue ultrices
    tortor. Donec nunc, id proin volutpat leo, euismod erat lorem ultrices.
    Lectus quis quam et elementum
  </TextComponent>
);

export const black = () => (
  <TextComponent black={true}>
    Nos derniers <span className="TextComponent-bold">articles</span>
  </TextComponent>
);

export const small = () => (
  <TextComponent small={true}>
    Viverra faucibus feugiat a enim vitae ultricies eget nunc, viverra. Leo non
    molestie feugiat sociis dictum. Faucibus rutrum facilisi tortor, cras
    viverra ut. Condimentum quam at risus at amet, amet et. Nulla lorem auctor
    viverra malesuada urna. Lectus varius eget augue ultrices tortor. Donec
    nunc, id proin volutpat leo, euismod erat lorem ultrices. Lectus quis quam
    et elementum
  </TextComponent>
);

export const telNumber = () => (
  <TextComponent telNumber={true}>
    <span className="TextComponent-bold">06 11 22 33 44</span>
  </TextComponent>
);

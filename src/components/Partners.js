import React, { Component } from 'react';
import PartnerSurvol from './PartnerSurvol';
import Button from './Button';
import troiM from '../icons/Logos partenaires/3M.png';
import arrow from '../icons/Logos partenaires/arrow.png';
import ascencia from '../icons/Logos partenaires/ascencia.png';
import bayer from '../icons/Logos partenaires/bayer.png';
import bioderma from '../icons/Logos partenaires/bioderma.png';
import biogaran from '../icons/Logos partenaires/Biogaran.png';
import biostime from '../icons/Logos partenaires/Biostime.png';
import bluestoneMedical from '../icons/Logos partenaires/bluestone-medical.png';
import boucharaRecordati from '../icons/Logos partenaires/bouchara-recordati.png';
import Bsnradiante from '../icons/Logos partenaires/Bsn_radiante.png';
import cooper from '../icons/Logos partenaires/cooper.png';
import dodie from '../icons/Logos partenaires/dodie.png';
import donjoy from '../icons/Logos partenaires/donjoy.png';
import FreseniusKabi from '../icons/Logos partenaires/Fresenius_Kabi.png';
import gibaud from '../icons/Logos partenaires/gibaud.png';
import gifrer from '../icons/Logos partenaires/gifrer.png';
import gilbertLaboratoire from '../icons/Logos partenaires/gilbert-laboratoire.png';
import gsk from '../icons/Logos partenaires/gsk.png';
import gum from '../icons/Logos partenaires/gum.png';
import hartmann from '../icons/Logos partenaires/hartmann.png';
import innothera from '../icons/Logos partenaires/innothera.png';
import JohnsonJohnson from '../icons/Logos partenaires/Johnson & johnson.png';
import krka from '../icons/Logos partenaires/krka.png';
import lifescan from '../icons/Logos partenaires/lifescan.png';
import lohmannRauscher from '../icons/Logos partenaires/lohmann&rauscher.png';
import merck from '../icons/Logos partenaires/merck.png';
import merial from '../icons/Logos partenaires/merial.png';
import modillac from '../icons/Logos partenaires/modillac.png';
import mylan from '../icons/Logos partenaires/mylan.png';
import naturactive from '../icons/Logos partenaires/naturactive.png';
import nestle from '../icons/Logos partenaires/nestle.png';
import nutergiaLabo from '../icons/Logos partenaires/nutergia-labo.png';
import omegaPharma from '../icons/Logos partenaires/omega-pharma.png';
import orliman from '../icons/Logos partenaires/orliman.png';
import pfizer from '../icons/Logos partenaires/pfizer.png';
import pharmup from '../icons/Logos partenaires/pharmup.png';
import pierreFabre from '../icons/Logos partenaires/pierre-fabre.png';
import pileje from '../icons/Logos partenaires/pileje.png';
import pranarom from '../icons/Logos partenaires/pranarom.png';
import roche from '../icons/Logos partenaires/roche.png';
import sanofi from '../icons/Logos partenaires/sanofi.png';
import sigvaris from '../icons/Logos partenaires/sigvaris.png';
import skillsInHealthcare from '../icons/Logos partenaires/skills-in-healthcare.png';
import upsa from '../icons/Logos partenaires/upsa.png';
import urgo from '../icons/Logos partenaires/urgo.png';
import zambon from '../icons/Logos partenaires/zambon.png';
import './Partners.css';

const partners = [
  {
    mark: '3m',
    logo: troiM,
  },
  {
    mark: 'arrow',
    logo: arrow,
  },
  {
    mark: 'ascencia',
    logo: ascencia,
  },
  {
    mark: 'bayer',
    logo: bayer,
  },
  {
    mark: 'bioderma',
    logo: bioderma,
  },
  {
    mark: 'biogaran',
    logo: biogaran,
  },
  {
    mark: 'biostime',
    logo: biostime,
  },
  {
    mark: 'bluestone medical',
    logo: bluestoneMedical,
  },
  {
    mark: 'bouchara Recordati',
    logo: boucharaRecordati,
  },
  {
    mark: 'Bsn-radiante',
    logo: Bsnradiante,
  },
  {
    mark: 'cooper',
    logo: cooper,
  },
  {
    mark: 'dodie',
    logo: dodie,
  },
  {
    mark: 'donjoy',
    logo: donjoy,
  },
  {
    mark: 'Fresenius Kabi',
    logo: FreseniusKabi,
  },
  {
    mark: 'gibaud',
    logo: gibaud,
  },
  {
    mark: 'gifrer',
    logo: gifrer,
  },
  {
    mark: 'gilbert Laboratoire',
    logo: gilbertLaboratoire,
  },
  {
    mark: 'gsk',
    logo: gsk,
  },

  {
    mark: 'g.u.m',
    logo: gum,
  },
  {
    mark: 'hartmann',
    logo: hartmann,
  },
  {
    mark: 'innothera',
    logo: innothera,
  },
  {
    mark: 'Johnson&Johnson',
    logo: JohnsonJohnson,
  },
  {
    mark: 'krka',
    logo: krka,
  },
  {
    mark: 'lifescan',
    logo: lifescan,
  },
  {
    mark: 'lohmann& Rauscher',
    logo: lohmannRauscher,
  },
  {
    mark: 'merck',
    logo: merck,
  },
  {
    mark: 'merial',
    logo: merial,
  },
  {
    mark: 'modillac',
    logo: modillac,
  },
  {
    mark: 'mylan',
    logo: mylan,
  },
  {
    mark: 'naturactive',
    logo: naturactive,
  },
  {
    mark: 'nestle',
    logo: nestle,
  },
  {
    mark: 'nutergia Labo',
    logo: nutergiaLabo,
  },
  {
    mark: 'omega Pharma',
    logo: omegaPharma,
  },
  {
    mark: 'orliman',
    logo: orliman,
  },
  {
    mark: 'pfizer',
    logo: pfizer,
  },
  {
    mark: 'pharmup',
    logo: pharmup,
  },
  {
    mark: 'pierre Fabre',
    logo: pierreFabre,
  },
  {
    mark: 'pileje',
    logo: pileje,
  },
  {
    mark: 'pranarom',
    logo: pranarom,
  },
  {
    mark: 'roche',
    logo: roche,
  },
  {
    mark: 'sanofi',
    logo: sanofi,
  },
  {
    mark: 'sigvaris',
    logo: sigvaris,
  },
  {
    mark: 'skills In Healthcare',
    logo: skillsInHealthcare,
  },
  {
    mark: 'upsa',
    logo: upsa,
  },
  {
    mark: 'urgo',
    logo: urgo,
  },
  {
    mark: 'zambon',
    logo: zambon,
  },
];
const survolcolor = ['green', 'greenlight', 'yellow', 'yellowlight'];

//repeat table arr n times
const makeRepeated = (arr, n) =>
  Array.from({ length: n }, () => arr).reduce(
    (acc, val) => acc.concat(val),
    []
  );

class Partners extends Component {
  render() {
    let rest = partners.length / 4;
    let mod = partners.length % 4;
    let newSurvolTab = makeRepeated(survolcolor, rest).concat(
      survolcolor.slice(0, mod)
    );

    return (
      <div className="PartnersLogo-container">
        <div className="Partners-container">
          {partners.map((partner, i) => (
            <div className="Partners-itemhover">
              <PartnerSurvol
                color={newSurvolTab[i]}
                mark={partner.mark.toUpperCase()}
              />
              <img
                className="Partners-logo"
                src={partner.logo}
                alt="Partner logo"
              />
            </div>
          ))}
        </div>
        <div className="Partners-ButtonContainer">
          <Button medium={true}>En voir plus</Button>
        </div>
      </div>
    );
  }
}

export default Partners;

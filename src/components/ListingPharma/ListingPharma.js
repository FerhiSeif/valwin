import React from 'react';
import PropTypes from 'prop-types';

import phone from '../../icons/phone.svg';
import website from '../../icons/website.svg';

import './ListingPharma.css';

const ListingPharma = ({ pharmacies }) => {
  return (
    <div>
      {pharmacies.map(
        ({ image, name, address, city, phoneNumber, websiteUrl, distance }) => (
          <div className="ListingPharma-container">
            <img
              className="ListingPharma-picture"
              src={image}
              alt="pharmacy-front"
            />
            <div className="ListingPharma-information">
              <p className="ListingPharma-information-title">{name}</p>
              <p className="ListingPharma-information-text">
                {address}
                <br />
                {city}
              </p>
              <div className="ListingPharma-information-links">
                <a
                  className="ListingPharma-information-links-phone"
                  href={'tel:' + phoneNumber}
                >
                  <img
                    className="ListingPharma-information-links-icons"
                    src={phone}
                    alt="phone"
                  />
                  <span className="ListingPharma-information-links-caption">
                    Appeler
                  </span>
                </a>
                <div className="ListingPharma-information-links-separator">
                  |
                </div>
                <a
                  className="ListingPharma-information-links-phone"
                  href={websiteUrl}
                >
                  <img
                    className="ListingPharma-information-links-icons"
                    src={website}
                    alt="website"
                  />
                  <span className="ListingPharma-information-links-caption">
                    Site web
                  </span>
                </a>
              </div>
            </div>
            <div className="ListingPharma-distance">
              <p className="ListingPharma-distance-information">
                à {distance} km
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

ListingPharma.propTypes = {
  pharmacies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string,
      websiteUrl: PropTypes.string,
      distance: PropTypes.string.isRequired,
    })
  ),
};

export default ListingPharma;

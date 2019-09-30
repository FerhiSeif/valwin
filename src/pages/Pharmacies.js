import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout';

const Pharmacies = () => {
  return (
    <Layout>
      <Helmet
        title="Normadie Pharma - Pharmacies"
        meta={[
          {
            name: 'description',
            content: 'Normadie Pharma - Pharmacies made in Normandie !',
          },
        ]}
      ></Helmet>
      <div className="Pharmacies">Normandie pharmacies</div>
    </Layout>
  );
};

export default Pharmacies;

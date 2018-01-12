import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import logo from './Logo.svg';

import './main.scss';

const Header = () => (
  <header className="container">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <nav>
      <ul>
        <li>
          <Link to="">Features</Link>
        </li>
        <li>
          <Link to="">Healthy</Link>
        </li>
        <li>
          <Link to="">Experts</Link>
        </li>
        <li>
          <Link to="">Roadmap</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Welcome to Pastanaga UI"
      meta={[
        { name: 'description', content: 'Pastanaga UI project home page' },
        {
          name: 'keywords',
          content: 'Pastanaga UI, Pastanaga, Plone, Guillotina, UI, Theme, CSS',
        },
      ]}
    />
    <Header />
    <div className="main container">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

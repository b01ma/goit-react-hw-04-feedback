// import { Component } from 'react/cjs/react.production.min';
import { useState } from 'react';
import css from './Section.module.css';
// import PropTypes from 'prop-types';

const Section = ({ title, titleType, children }) => {
  const [titleSection, setTitleSection] = useState();
  const [hType, setHType] = useState();

  setTitleSection(title);
  setHType(titleType);

  const TitleTag = `h${hType}`;

  return (
    <div>
      <TitleTag className={css.test}>{titleSection}</TitleTag>
      {children}
    </div>
  );
};

export default Section;

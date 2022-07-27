// import { Component } from 'react/cjs/react.production.min';
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title = 'deafaultValue', titleType = '2', children }) => {
  const TitleTag = `h${titleType}`;
  return (
    <div>
      <TitleTag className={css.test}>{title}</TitleTag>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

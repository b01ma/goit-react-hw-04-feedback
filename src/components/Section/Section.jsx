import { Component } from 'react/cjs/react.production.min';
import css from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  state = {
    title: this.props.title,
    hType: this.props.titleType,
  };

  render() {
    Section.propTypes = {
      title: PropTypes.string.isRequired,
      titleType: PropTypes.string.isRequired,
      children: PropTypes.any,
    };
    return (
      <div>
        <this.state.hType className={css.test}>
          {this.props.title}
        </this.state.hType>
        {this.props.children}
      </div>
    );
  }
}

export default Section;

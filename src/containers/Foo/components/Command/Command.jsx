
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';


class Command extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {};

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.command)}
      >
        Command
      </div>
    );
  }
}

export default Command;

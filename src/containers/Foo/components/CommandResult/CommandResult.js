import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';


class CommandResult extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static contextTypes = {
    foo: PropTypes.object,
    fooActions: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  state = {};

  render() {
    const { className } = this.props;
    const { command, result } = this.context.foo.toJS();

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.commandresult)}
      >
      命令 {command} 执行结果: {result}
      </div>
    );
  }
}

export default CommandResult;

import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import * as sc from 'constants/status';


class CommandResult extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static contextTypes = {
    main: PropTypes.object,
    actions: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  state = {};

  render() {
    const { className } = this.props;
    const { command, resultStatus, result } = this.context.main.toJS();

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.result)}
      >
        <h1>命令执行结果</h1>
        <h2>命令: {command}</h2>
        <h2>结果: </h2>
        <div className={style.content}>
          <code
            className={classnames(
              resultStatus === sc.COMMAND_RUN_STATUS_SUCCESS ? '' : style.error)}
          >
            {result}
          </code>
        </div>
      </div>
    );
  }
}

export default CommandResult;

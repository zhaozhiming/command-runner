import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'antd';


class Command extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
  };

  static contextTypes = {
    fooActions: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      command: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ command: event.target.value });
  }

  handleClick() {
    this.context.fooActions.runCommand(this.state.command);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        style={this.props.style}
        className={classnames(...className.split())}
      >
        <Input
          placeholder="Input Liux Command..."
          className={style.command} value={this.state.command}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleClick} >Go!</Button>
      </div>
    );
  }
}

export default Command;

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
    actions: PropTypes.object,
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
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  handleChange(event) {
    this.setState({ command: event.target.value });
  }

  handleClick() {
    this.context.actions.runCommand(this.state.command);
  }

  handleKeydown(e) {
    if (e.which === 13) {
      this.context.actions.runCommand(this.state.command);
    }
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
          onKeyDown={this.handleKeydown}
        />
        <Button onClick={this.handleClick} >Go!</Button>
      </div>
    );
  }
}

export default Command;

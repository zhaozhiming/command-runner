import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'containers/Main/actions';
import Header from './components/Header';
import Command from './components/Command';
import CommandResult from './components/CommandResult';


function mapStateToProps(state) {
  const { main } = state;
  return { main };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Main extends Component {
  static propTypes = {
    main: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    main: PropTypes.object,
    actions: PropTypes.object,
  };

  getChildContext() {
    const { main, actions } = this.props;
    return { main, actions };
  }

  render() {
    return (
      <div className={style.content}>
        <Header />
        <div className={style.main} >
          <Command />
          <div className={style.division}></div>
          <CommandResult />
        </div>
      </div>
    );
  }
}

export default Main;

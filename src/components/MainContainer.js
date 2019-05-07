import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './MainContainer.module.css';
// import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import * as actions from '../actions/characterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
// import Header from './Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterView from './CharacterView';
import { directive } from '@babel/types';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    this.props.actions.loadCharacters();
  }

  render() {
    console.log(this.props.characters.characters)
    // const renderCharacters = this.props.characters.characters.map((character) => <CharacterView character={character} />)
    return (
      <div>
        <p>Main Container</p>
        {/* {renderCharacters} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.characters.characters)
  return {
    characters: state.characters.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)


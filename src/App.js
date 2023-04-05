import "./App.css";
import React from "react";
import { connect } from "react-redux";
import CharShow from "./components/charShow";

import {
  useGetCharacterQuery,
  useGetCharSpellsQuery,
  useGetClassesQuery,
  useGetRacesQuery,
  useGetSkillsQuery,
  useGetCharactersQuery,
  useGetSpellsQuery,
  usePatchCharacterMutation,
  usePostCharacterMutation,
} from "./services/apiSlice";
import { resetChar } from "./redux/reducers/charSlice";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CharForm from "./containers/charForm";
import Navigation from "./components/navigation";
import CharIndex from "./containers/charIndex";
import LevelForm from "./components/levelForm";
import Diceroller from "./components/diceRoller";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRaces();
    this.props.fetchSkills();
    this.props.fetchClasses();
    this.props.fetchCharacters();
    // this.props.fetchCharSpells()
    this.props.fetchSpells();
  }

  submitHandler = (char, charId) => {
    this.props.localPatchCharacter(char, charId);
    this.props.localResetChar();
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route
              path="/characters/:id/level"
              render={() => <LevelForm submitHandler={this.submitHandler} />}
            />
            <Route
              path="/characters/:id"
              render={(routerProps) => {
                let id = routerProps.match.params.id;
                let char;
                if (this.props.characters.length > 0) {
                  char = this.props.characters.find(
                    (el) => el.id === parseInt(id)
                  );
                }
                return (
                  <>
                    {this.props.characters.length > 0 ? (
                      <CharShow character={char} />
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </>
                );
              }}
            />
            <Route path="/characters" render={() => <CharIndex />} />
            <Route path="/creator" render={() => <CharForm />} />
            <Route path="/" render={() => <Diceroller />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
    characters: state.characters,
    races: state.races,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchChar: () => {
      dispatch(useGetCharacterQuery());
    },
    fetchRaces: () => {
      dispatch(useGetRacesQuery());
    },
    fetchClasses: () => {
      dispatch(useGetClassesQuery());
    },
    fetchCharacters: () => {
      dispatch(useGetCharactersQuery());
    },
    fetchSpells: () => {
      dispatch(useGetSpellsQuery());
    },
    fetchCharSpells: () => {
      dispatch(useGetCharSpellsQuery());
    },
    fetchSkills: () => {
      dispatch(useGetSkillsQuery());
    },
    localResetChar: () => {
      dispatch(resetChar());
    },
    localPatchCharacter: (inc, id) => {
      dispatch(usePatchCharacterMutation(inc, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

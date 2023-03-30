import React from "react";
import { Box, Button, Container, Grid, Paper } from "@mui/material";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  setChar,
  localSetChar,
  resetChar,
  patchCharacter,
  setId,
  incLevel,
  incProf,
} from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import LevelForm from "./levelForm";

function CharCard({
  character,
  localResetChar,
  localSetChar,
  localPatchCharacter,
  localSetId,
  localIncLevel,
  localincProf,
}) {
  const setCharacter = () => {
    localSetId(character.id);
    localSetChar(character);
    localIncLevel();
    console.log((character.level + 1) % 4, character.level);
    if ((character.level + 1) % 4 === 0) {
      console.log("incondish");
      localincProf();
    }
  };

  return (
    <Container className="charcard">
      <Paper elevation={5}>
        {character.level < 20 ? (
          <NavLink to={`/characters/${character.id}/level`} exact>
            <Button variant="outlined" onClick={setCharacter}>
              Level up
            </Button>
          </NavLink>
        ) : null}
        <Grid container sx={{}}>
          <Grid item xs={3}>
            <Paper>
              <Box width={75}>
                <img src={character.image} alt="" className="charImage" />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className="charPaper">
              <h4>
                {character.name} Level {character.level} {character.race}{" "}
                {character.class_type}
              </h4>
            </Paper>
            <NavLink to={`/characters/${character.id}`} exact>
              <Button variant="outlined">
                <FontAwesomeIcon icon={faScroll} />
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    localSetChar: (inc) => dispatch(setChar(inc)),
    localResetChar: () => dispatch(resetChar()),
    localPatchCharacter: (inc) => dispatch(patchCharacter(inc)),
    localSetId: (id) => dispatch(setId(id)),
    localIncLevel: () => dispatch(incLevel()),
    localincProf: (inc) => dispatch(incProf(inc)),
  };
};

export default connect(null, mapDispatchToProps)(CharCard);

import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import { connect } from "react-redux";
import { setClass } from "../redux/actions";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

function ClassCard({ classT, topSubmitHandler, localSetClass }) {
  function submitHandler() {
    localSetClass(classT.attributes.name);
    topSubmitHandler();
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{classT.attributes.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{classT.attributes.desc}</Typography>
        </AccordionDetails>
        <Button onClick={submitHandler}>Choose Class</Button>
      </Accordion>
    </div>
  );
}
const mdp = (dispatch) => {
  return { localSetClass: (classT) => dispatch(setClass(classT)) };
};

export default connect(null, mdp)(ClassCard);

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Collapse,
  Box,
} from "@mui/material";

// const useRowStyles = makeStyles({
//   root: {
//     "& > *": {
//       borderBottom: "unset",
//     },
//   },
// });

function SpellCard({ spell }) {
  console.log(spell);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {spell.attributes.name}
        </TableCell>
        <TableCell>{spell.attributes.level}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {spell.attributes.description}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default SpellCard;

import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import logoDesign from "../logo/logoDesign.png";
import {
  Box,
  Toolbar,
  AppBar,
  ListItemText,
  ListItemIcon,
  ListItem,
  Drawer,
  List,
  IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { resetChar } from "../redux/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";

const drawerWidth = 200;

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#2c3e50",
//     },
//     secondary: {
//       main: "#11cb5f",
//     },
//   },
// });
// const useStyles = makeStyles({
//   title: {
//     flexGrow: 1,
//   },
//   drawer: {
//     background: "#2c3e50",
//   },
//   root: {
//     display: "flex",
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

function Navigation({ localResetChar }) {
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const clickHandler = () => {
    localResetChar();
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink to="/">
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon={faDiceD20} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/characters">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Characters" />
          </ListItem>
        </NavLink>
        <NavLink to="/creator" onClick={clickHandler}>
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className="navo">
      {/* <ThemeProvider theme={theme}> */}
      <div>
        <AppBar color="primary" className="naver" position="fixed">
          <Toolbar>
            <NavLink to="/">
              <Box noWrap>
                <img src={logoDesign} alt="" className="logo" />
              </Box>
            </NavLink>
            {/* <Typography variant="h6" noWrap className={classes.title}>ap</Typography> */}
            {/* <Container width={1/4}><img src={logoDesign} alt='' /></Container> */}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
      {/* </ThemeProvider> */}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { localResetChar: () => dispatch(resetChar()) };
};

export default connect(null, mapDispatchToProps)(Navigation);

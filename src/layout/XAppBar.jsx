import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

function XAppBar({ openDrawer }) {
  const handleClickOpenDrawer = () => {
    openDrawer(true);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClickOpenDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

XAppBar.propTypes = {
  openDrawer: PropTypes.func,
};
export default XAppBar;

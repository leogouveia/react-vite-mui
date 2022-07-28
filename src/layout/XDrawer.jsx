import { Drawer } from "@mui/material";
import XDrawerList from "./XDrawerList";
import PropTypes from "prop-types";

function XDrawer({ isOpen, setDrawerOpen }) {
  const handleClose = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(false);
  };
  return (
    <Drawer anchor={"left"} open={isOpen} onClose={handleClose}>
      <XDrawerList closeDrower={handleClose} />
    </Drawer>
  );
}

XDrawer.propTypes = {
  setDrawerOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default XDrawer;

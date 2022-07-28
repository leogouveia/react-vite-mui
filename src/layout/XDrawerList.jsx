import { Inbox } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function XDrawerList({ closeDrower }) {
  const handleClickOrKeyDown = (event) => {
    closeDrower(event);
  };

  return (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={handleClickOrKeyDown}
      onKeyDown={handleClickOrKeyDown}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={"Teste"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

XDrawerList.propTypes = {
  closeDrower: PropTypes.func,
};

export default XDrawerList;

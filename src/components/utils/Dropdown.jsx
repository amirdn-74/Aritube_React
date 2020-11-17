import { Menu } from "@material-ui/core";
import React from "react";

function Dropdown({ children, id, anchorEl, onClose, ...rest }) {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={onClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        horizontal: "center",
        vertical: "bottom",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...rest}
    >
      {children}
    </Menu>
  );
}

export default Dropdown;

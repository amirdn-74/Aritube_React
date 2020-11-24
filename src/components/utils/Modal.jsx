import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

export function Modal({
  open,
  onClose,
  children,
  fullWidth,
  maxWidth,
  ...rest
}) {
  return (
    <Dialog
      style={{ fontSize: "1.7rem" }}
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      {...rest}
    >
      {children}
    </Dialog>
  );
}

export const ModalTitle = ({ children, ...rest }) => {
  return (
    <DialogTitle>
      <span style={{ fontSize: "1.7rem" }} {...rest}>
        {children}
      </span>
    </DialogTitle>
  );
};

export const ModalContent = ({ children, ...rest }) => {
  return <DialogContent {...rest}>{children}</DialogContent>;
};

export const ModalActions = ({ children, ...rest }) => {
  return <DialogActions {...rest}>{children}</DialogActions>;
};

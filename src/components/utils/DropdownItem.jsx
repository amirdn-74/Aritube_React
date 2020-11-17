import { makeStyles, MenuItem } from "@material-ui/core";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#222",
  },
  item: {
    fontSize: "1.7rem",
    color: "#555",
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
  },
  icon: {
    fontSize: "3rem",
    marginRight: theme.spacing(3),
  },
}));

function DropdownItem({ children, onClose, href, Icon, ...rest }) {
  const classes = useStyles();

  return (
    <Fragment>
      {href && (
        <Link to={href} onClick={onClose} className={classes.link}>
          <MenuItem className={classes.item} {...rest}>
            {Icon && <Icon className={classes.icon} />}
            {children}
          </MenuItem>
        </Link>
      )}
      {!href && (
        <MenuItem onClick={onClose} className={classes.item} {...rest}>
          {Icon && <Icon className={classes.icon} />}
          {children}
        </MenuItem>
      )}
    </Fragment>
  );
}

export default DropdownItem;

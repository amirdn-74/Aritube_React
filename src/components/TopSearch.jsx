import React from "react";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { FormControl, OutlinedInput, InputAdornment } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  topSearch: {
    width: "35%",
    marginLeft: theme.spacing(5),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  topSearchInput: {
    fontSize: "1.8rem",
  },
  searchIcon: {
    fontSize: "2.5rem",
  },
}));

function TopSearch(props) {
  const classes = useStyles();

  return (
    <FormControl size="small" className={classes.topSearch}>
      <OutlinedInput
        className={classes.topSearchInput}
        placeholder="search..."
        endAdornment={
          <InputAdornment position="end">
            <Search className={classes.searchIcon} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default TopSearch;

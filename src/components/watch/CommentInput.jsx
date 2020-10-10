import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    float: "left",
  },
  profilePic: {
    float: "left",
    width: "5.5rem",
    height: "5.5rem",
    background: "#5C6BC0",
    borderRadius: "50%",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    fontSize: "3rem",
    color: "#fff",
    textAlign: "center",
    lineHeight: "5rem",
  },
  input: { width: "100%", flex: "1" },
  buttonWrapper: {
    float: "left",
    width: "100%",
    alignSelf: "stretch",
    marginTop: theme.spacing(1),
  },
  button: {
    fontSize: "1.6rem",
    marginLeft: theme.spacing(2),
    float: "right",
  },
}));

function CommentInput(props) {
  const classes = useStyles();
  const [showButtons, setShowButtons] = useState(false);

  const handleInputFocuse = () => {
    setShowButtons(true);
  };

  const handleCancle = () => {
    setShowButtons(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.profilePic}>A</div>

      <TextField
        label="Add a public comment..."
        inputProps={{
          style: {
            fontSize: "1.9rem",
            lineHeight: "2.5rem",
          },
        }}
        InputLabelProps={{ style: { fontSize: "1.9rem" } }}
        multiline
        className={classes.input}
        onFocus={handleInputFocuse}
      />

      <div
        className={classes.buttonWrapper}
        style={{
          display: showButtons ? "block" : "none",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          disabled
        >
          COMMENT
        </Button>
        <Button
          variant="text"
          size="large"
          className={classes.button}
          onClick={handleCancle}
        >
          CANCLE
        </Button>
      </div>
    </div>
  );
}

export default CommentInput;

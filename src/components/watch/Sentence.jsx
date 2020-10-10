import { Grid, makeStyles } from "@material-ui/core";
import React, { Fragment, useState } from "react";

const useStyles = makeStyles((theme) => ({
  sentence: {
    fontSize: "1.7rem",
    marginTop: theme.spacing(2),
    float: "left",
    maxWidth: "100%",
    // height: "10rem",
    paddingLeft: theme.spacing(9.7),
    overflow: "hidden",
  },
  heightToggle: {
    fontSize: "1.7rem",
    fontWeight: 500,
    background: "linear-gradient(to bottom, rgba(0,0,0,0), #f2f3f5)",
    width: "100%",
    float: "left",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(9.7),
  },
}));

function Sentence(props) {
  const [fullHeight, setFullHeight] = useState(false);
  const classes = useStyles();

  const handleHeightToggle = () => {
    if (!fullHeight) {
      setFullHeight(true);
    } else setFullHeight(false);
  };

  return (
    <Fragment>
      <div
        className={[classes.sentence]}
        style={{ height: fullHeight ? "auto" : "10rem" }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          dignissimos nulla sit et commodi rem odit earum repellat quas
          molestiae excepturi laborum, magnam, voluptatibus veritatis. Dicta
          ipsa libero ullam dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          dignissimos nulla sit et commodi rem odit earum repellat quas
          molestiae excepturi laborum, magnam, voluptatibus veritatis. Dicta
          ipsa libero ullam dolorum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi dignissimos nulla sit et commodi rem odit
          earum repellat quas molestiae excepturi laborum, magnam, voluptatibus
          veritatis. Dicta ipsa libero ullam dolorum. ipsa libero ullam dolorum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          dignissimos nulla sit et commodi rem odit earum repellat quas
          molestiae excepturi laborum, magnam, voluptatibus veritatis. Dicta
          ipsa libero ullam dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          dignissimos nulla sit et commodi rem odit earum repellat quas
          molestiae excepturi laborum, magnam, voluptatibus veritatis. Dicta
          ipsa libero ullam dolorum.
        </p>
      </div>

      <Grid item className={classes.heightToggle}>
        <span style={{ cursor: "pointer" }} onClick={handleHeightToggle}>
          {fullHeight ? "SHOW LESS" : "SHOW MORE"}
        </span>
      </Grid>
    </Fragment>
  );
}

export default Sentence;

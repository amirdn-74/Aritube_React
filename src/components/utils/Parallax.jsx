import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  parallax: {
    width: "100%",
    float: "left",
  },
  parallaxImage: {
    float: "left",
    width: "100%",
    paddingTop: "18%",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "140%",
    top: 0,
  },
}));

function Parallax(props) {
  const classes = useStyles();
  const [imageTop, setImageTop] = useState(0);

  useEffect(() => {
    window.onscroll = (e) => {
      setImageTop(parseInt(window.scrollY) / 3);
    };
  }, []);

  return (
    <div className={classes.parallax}>
      <div className={classes.parallaxImage}>
        <img
          className={classes.image}
          style={{ top: `-${imageTop}px` }}
          src="images/banner.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Parallax;

import React from "react";
import { Grid } from "@material-ui/core";
import LoadVideoCard from "../LoadVideoCard";
import VideoCard from "../VideoCard";

function HomePage(props) {
  const count = 20;
  const array = Array.from(Array(count).keys());

  return (
    <Grid container>
      {/* <LoadVideoCard /> */}
      {array.map((c) => (
        <VideoCard
          key={c}
          videoName="Jamie Foxx’s Daughter Hates Him Dating Younger Girls | The Graham
            Norton Show"
        />
      ))}
    </Grid>
  );
}

export default HomePage;

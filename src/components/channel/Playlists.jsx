import { Grid } from '@material-ui/core';
import React from 'react';
import PlaylistCard from './PlaylistCard';

function Playlists(props) {
  return (
    <Grid container>
      <PlaylistCard title="Playlist Name Here" />
      <PlaylistCard title="Playlist Name Here" />
    </Grid>
  );
}

export default Playlists;
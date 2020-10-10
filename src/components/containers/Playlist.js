import React from 'react';
import PlaylistHeader from '../styles/PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../styles/Nightmode';

const Playlist = props => (
  <>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </>
)

export default Playlist;
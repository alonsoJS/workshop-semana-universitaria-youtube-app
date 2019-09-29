import React from 'react';
import VideoPlay from '../components/video_play';

function PlayVideoPage ({match}) {
  return (
    <VideoPlay videoId={match.params.id} />
  );
}

export default PlayVideoPage;

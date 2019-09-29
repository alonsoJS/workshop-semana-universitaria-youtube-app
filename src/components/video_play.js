import React from 'react';

function VideoPlay ({videoId}) {
  return (
    <section className="uk-container uk-margin-top">
      <div className="video-responsive">
        <iframe src={`https://youtube.com/embed/${videoId}`} width="100%" allowFullScreen title={videoId}/>
      </div>
    </section>
  );
}

export default VideoPlay;

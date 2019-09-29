import React from 'react';
import { Link } from 'react-router-dom';

function VideoListingItem ({videoData})  {
  const videoId = videoData.id.videoId;
  const videoDescription = videoData.snippet.description;
  const videoTitle = videoData.snippet.title;
  const videoThumbnail = videoData.snippet.thumbnails.medium.url;
  const videoChannelTitle = videoData.snippet.channelTitle;

  return (
    <Link className="uk-card uk-card-default uk-grid-collapse uk-margin" data-uk-grid to={`/watch/${videoId}`}>
      <div className="uk-card-media-left uk-width-1-3@s">
        <img src={videoThumbnail} alt="" />
      </div>
      <div className="uk-width-2-3@s">
        <div className="uk-card-body">
          <p className="uk-text-emphasis uk-margin-remove-bottom">{videoChannelTitle}:</p>
          <h3 className="uk-card-title uk-text-truncate uk-margin-remove">{videoTitle}</h3>
          <p className="uk-text-truncate">{videoDescription}</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoListingItem;

import React, { Fragment, useEffect, useState } from 'react';
import { searchVideoFromQuery } from '../lib/search_video_from_query';
import VideoListingItem from '../components/video_listing_item';
import _ from 'lodash';
import SearchField from "./search_field";

function VideoListing () {
  const [videoList, setVideoList] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect( () => {
    searchVideoFromQuery(searchQuery).then(data => {
      setVideoList(data.items);
    });
  }, [searchQuery]);

  return (
    <Fragment>
      <SearchField setQuery={setSearchQuery}/>
      <section className="uk-container uk-container-small uk-padding">
        {
          _.isEqual(videoList, {}) ? 'Busca algun video' : videoList.map(video => <VideoListingItem key={video.etag} videoData={video}/>)
        }
      </section>
    </Fragment>

  )
}

export default VideoListing;

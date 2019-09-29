import axios from 'axios';

export async function searchVideoFromQuery (searchString) {
  const rawData = await axios({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      key: 'AIzaSyDIzyPQfZh5q_4nklvYlkQ8njcdcxprSSs',
      part: 'snippet',
      q:  searchString,
    }
  });

  return rawData.data;
}

import React, { useState } from 'react'
import movieTrailer from "movie-trailer";
import ReactPlayer from 'react-player';

const SearchMovies3 = () => {
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");

  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div>
      <div className="searchMovies">
        
          <label>Search any Movies/show.</label>
          <input type="text" onChange={(e) => { setVideo(e.target.value) } } />
          <button onClick={() => {handleSearch()}} >search</button>
        
      </div>
      <ReactPlayer url={videoURL} controls = {true} />
    </div>
  )
}

export { SearchMovies3 };

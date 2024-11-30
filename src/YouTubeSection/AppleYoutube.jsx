/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function AppleYoutube() {
  let [youtubevideos, setYoutubevideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&key=AIzaSyBAS-y6gTvq33iE_zfZOwZfsI_VaGJHHUk&order=date"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubevideos(data.items);
        console.log(data.items);
      });
  }, []);

  return (
    <div>
      {youtubevideos.length > 0 ? (
        youtubevideos.map((video, index) => (
          <div key={index}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
}

export default AppleYoutube;

import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <div>
      <div style={{ display: "flex", cursor: "pointer"}} onClick={() => onVideoSelect(video)} >
        <img  alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      </div>
      <div style={{ display: "flex", cursor: "pointer", marginTop:'1em',marginBottom:'1em' }}><b>{video.snippet.title}</b></div> 
    </div>
  );
}

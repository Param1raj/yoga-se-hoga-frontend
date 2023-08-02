"use client";

import React from "react";

import YouTube from "react-youtube";

function Youtube() {
  const opts = {
    height: "10",
    width: "20",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return <YouTube videoId="ksY3wb4vtlA" opts={opts} />;
}

export default Youtube;

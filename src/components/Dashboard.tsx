import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";

export default function Dashboard() {
  return (
    <div className='text-center'>
      <h1>Spotify 2.0</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam consequatur minima laboriosam, hic voluptate. Beatae in dolorum debitis nam inventore temporibus saepe ullam tempora commodi nobis. Illo, soluta porro.</p>
      <div className='audio-player'>
        <AudioPlayer
          src='/song1.mp3'
        />
      </div>
    </div>
  )
}

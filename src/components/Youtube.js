import { faPause, faPlay, faStepBackward, faStepForward, faStop, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react'
import useInterval from 'react-useinterval';
import YouTube from 'react-youtube'
import './Youtube.css'

function Youtube() {
  const [playerState, setPlayerState] = useState(0)
  const [playerMuteState, setplayerMuteState] = useState(false)
  const [playerDuration, setPlayerDuration] = useState(0)
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0)
  const [player, setPlayer] = useState(null);
  const timeSlider = useRef(null)

  // Youtube option
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  };

  const onPlayerReady = (event) => {
    // eslint-disable-next-line
    console.log('Set Player', event.target)
    setPlayer(event.target);
  };

  // Handler
  // Handle iframe state change
  const handleState = (event) => {
    // reference: https://developers.google.com/youtube/iframe_api_reference
    console.log(event)
    setPlayerState(event.data)
  }
  // handle user click play/pause btn
  const handleBtnPlayPause = () => {
    if(player !== null){
      if(playerState === 1)
        player.pauseVideo()
      else
        player.playVideo()
    }
  }
  // handle user click stop btn
  const handleBtnStop = () => {
    if(player !== null){
      player.stopVideo()
    }
  }
  // handle user click mute / unmute btn
  const handleBtnMuteUnmute = () => {
    if(player !== null){
      if(playerMuteState === true)
        player.unMute()
      else
        player.mute()
    }
    setplayerMuteState(!playerMuteState)
  }

  // Interval update
  const getPlayerDuration = () => {
    if(player !== null){
      setPlayerDuration(player.getDuration())
      setPlayerCurrentTime(player.getCurrentTime())
      let value = (player.getCurrentTime())/(player.getDuration())*100
      timeSlider.current.style.background = 'linear-gradient(to right, rgb(251 191 36) 0%, rgb(251 191 36) ' + value + '%, #fff ' + value + '%, white 100%)'
    }
  }

  // update range bar every .5 sec.
  useInterval(() => { getPlayerDuration() }, 500)

  return (
    <div>
      <YouTube videoId="NmP_EJdcE6E" opts={opts} onReady={onPlayerReady} onStateChange={(e) => {handleState(e)}} />

      {/* Video control */}
      <div className='bg-primary-pink px-5 py-2 text-white'>
        <input type='range' className='slider w-full bg-transparent' value={playerCurrentTime} min={0} max={playerDuration} ref={timeSlider} disabled/>
        <div className='relative mt-3 flex justify-center gap-2'>
            <button onClick={() => {handleBtnPlayPause()}}>
              <FontAwesomeIcon icon={playerState === 1? faPause:faPlay} />
            </button>
            <button onClick={() => {}}>
              <FontAwesomeIcon icon={faStepBackward} />
            </button>
            <button onClick={() => {handleBtnStop()}}>
              <FontAwesomeIcon icon={faStop} />
            </button>
            <button onClick={() => {}}>
              <FontAwesomeIcon icon={faStepForward} />
            </button>
            <button className='absolute right-0' onClick={() => {handleBtnMuteUnmute()}}>
              <FontAwesomeIcon icon={playerMuteState? faVolumeMute:faVolumeUp} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Youtube

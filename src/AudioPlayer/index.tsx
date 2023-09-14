import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS

import PlayButtonImg from '../assets/m3.png';
import ForwardButtonImg from '../assets/m1.png';
import PauseButtonImg from '../assets/m2.png';
import BackwardButtonImg from '../assets/m4.png';

const customIcons = {
    play: <img src={PlayButtonImg} alt="Play" className='play' />,
    pause: <img src={PauseButtonImg} alt="Pause" className='pause' />,
    forward: <img src={ForwardButtonImg} alt="Forward" className='forward' />,
    rewind: <img src={BackwardButtonImg} alt="Rewind" className='rewind' />,
};

const Player = () => (
    <AudioPlayer
        src='https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3'
        onPlay={e => console.log("onPlay")}
        customIcons={customIcons}
        showDownloadProgress={false}
        showFilledProgress={false}
       customProgressBarSection={[]}
    // other props here
    />
);

export default Player
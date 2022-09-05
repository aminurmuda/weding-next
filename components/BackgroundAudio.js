import React, { useState, useEffect } from "react";
import song from './audio.mp3'
import Icon from '@mdi/react';
import { mdiVolumeHigh, mdiVolumeOff } from '@mdi/js';


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [playing, toggle];
};

const BackgroundAudio = () => {
    const [playing, toggle] = useAudio(song);
    const Play = () => {
        return (<button className="round-button center" onClick={toggle}>
            <Icon path={mdiVolumeOff} size={1} color="black" />
        </button>)
    }

    const Pause = () => {
        return (<button className="round-button center" onClick={toggle}>
            <Icon className="beat" path={mdiVolumeHigh} size={1} color="black" />
        </button>)
    }

    return (
        <div className="floating-audio-toggle">
            {playing ? <Pause /> : < Play />}
        </div>
    )
};

export default BackgroundAudio;

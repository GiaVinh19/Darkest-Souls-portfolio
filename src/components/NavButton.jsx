import { NavLink } from "react-router-dom"
import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context';

export default function NavButton({ titleName, link }) {

    const { audio } = useContext(Context);
    const { sfxVolume } = audio;

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(pointer: coarse)');
        setIsTouchDevice(mediaQuery.matches);

        const handleMediaChange = (event) => {
            setIsTouchDevice(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    function playSelectAudio(audioFile, sfxVolume) {
        const audio = new Audio(audioFile)
        audio.volume = sfxVolume
        audio.play()
    }

    return (
        <NavLink
            className={"nav-link"}
            to={link}
            onClick={() => playSelectAudio('/audio/sfx/NavButton/select-confirm.mp3', sfxVolume)}
            onMouseEnter={!isTouchDevice ? () => playSelectAudio('/audio/sfx/NavButton/select-hover.mp3', sfxVolume) : null}>
            {titleName}
        </NavLink>
    )
}
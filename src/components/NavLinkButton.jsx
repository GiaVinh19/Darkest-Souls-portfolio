import { NavLink } from "react-router-dom"
import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context';

export default function NavLinkButton({ titleName, link }) {

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

    function handleLinkClick(event, link) {
        event.preventDefault();
        playSelectAudio('/audio/sfx/NavButton/select-confirm.mp3', sfxVolume);
        window.open(link || '_blank');
    }

    return (
        <NavLink
            className={"nav-link"}
            onClick={(event) => handleLinkClick(event, link)}
            onMouseEnter={!isTouchDevice ? () => playSelectAudio('/audio/sfx/NavButton/select-hover.mp3', sfxVolume) : null}>
            {titleName}
        </NavLink>
    )
}
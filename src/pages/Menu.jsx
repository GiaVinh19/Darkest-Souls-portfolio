// import React, { useState } from 'react';
import NavButton from '../components/NavButton';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context';

export default function Menu() {
    const { menu, audio } = useContext(Context);
    const { menuOpen, setMenuOpen } = menu;
    const { musicFile, setMusicFile, sfxVolume } = audio;

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    // Handle screen orientation changes
    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const audioFiles = [
        `${import.meta.env.BASE_URL}audio/music/Dark-Reality.mp3`,
        `${import.meta.env.BASE_URL}audio/music/Dark-Souls.mp3`,
        `${import.meta.env.BASE_URL}audio/music/Dark-Souls-II.mp3`,
        `${import.meta.env.BASE_URL}audio/music/Dark-Souls-III.mp3`,
        `${import.meta.env.BASE_URL}audio/music/Dark-Wood.mp3`,
        `${import.meta.env.BASE_URL}audio/music/Darkest-Dungeon.mp3`,
    ];

    function getRandomAudioFile() {
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        return audioFiles[randomIndex];
    }

    function openMenuSelect() {
        const randomAudioFile = getRandomAudioFile();
        setMusicFile(randomAudioFile);
        setMenuOpen(!menuOpen);
        const audio = new Audio(`${import.meta.env.BASE_URL}audio/sfx/Menu/open-menu.mp3`);
        audio.volume = sfxVolume;
        audio.play();
    };

    function getMusicTitle(musicFile) {
        const musicTitleWithExtension = musicFile.split('/').pop();
        const musicTitleWithoutExtension = musicTitleWithExtension.split('.').shift();
        const musicTitle = musicTitleWithoutExtension.replace(/-/g, ' ');
        if (musicTitle != "") {
            return "Music - " + musicTitle;
        }
        else {
            return
        }
    }

    return (
        <>
            <div className={"main-menu"}>
                <ul className={`menu-info ${menuOpen ? 'open' : 'close'}`}>
                    <li>App ver. 1.01</li>
                    <li>{getMusicTitle(musicFile)}</li>
                </ul>
                <img className={"menu-title"} src={`${import.meta.env.BASE_URL}image/Menu/menu-title.webp`} />
                <div className={`menu-start ${menuOpen ? 'open' : 'close'}`}>
                    <p onClick={() => openMenuSelect()}>
                    {isPortrait ? "Rotate to landscape mode for best experience" : "Click Here to Start"}
                    </p>
                </div>
                <ul className={`menu-list ${menuOpen ? 'open' : 'close'}`}>
                    <NavButton link={"about-me"} titleName={"About Me"}></NavButton>
                    <NavButton link={"profiles"} titleName={"Profiles"}></NavButton>
                    <NavButton link={"options"} titleName={"Option"}></NavButton>
                    <NavButton link={"credit"} titleName={"Credit"}></NavButton>
                </ul>
            </div>
        </>
    )
}
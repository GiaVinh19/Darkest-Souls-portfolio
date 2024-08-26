import Slider from "../components/Slider";
import React, { useContext } from 'react';
import Context from '../Context';
import NavButton from "../components/NavButton";
import MusicSelector from "../components/MusicSelector";

export default function Options() {

    const { audio } = useContext(Context);
    const { setMusicFile ,musicVolume, setMusicVolume, sfxVolume, setSfxVolume, voiceVolume, setVoiceVolume, setVoiceFile } = audio;

    function onSetMusicVolume(event) {
        setMusicVolume(parseFloat(event.target.value));
    }

    function onSetSfxVolume(event) {
        setSfxVolume(parseFloat(event.target.value));
    }

    function onSetVoiceVolume(event) {
        setVoiceVolume(parseFloat(event.target.value));
    }

    function playSfxOnChange() {
        const audio = new Audio("/audio/sfx/NavButton/select-confirm.mp3");
        audio.volume = sfxVolume;
        audio.play();
    }

    function playVoiceOnChange() {
        setVoiceFile(`/audio/voice/Options/Options.mp3`);
    }

    function onSetMusicFile(event) {
        setMusicFile(event.target.value);
    }

    return (
        <div className={"options-menu"}>
            <ul className={"options-title"}>
                <li>Options</li>
            </ul>
            <ul className={"options-list"}>
                <MusicSelector onChange={onSetMusicFile}></MusicSelector>
                <Slider sliderType={"Music Volume"} initialVolume={musicVolume} value={musicVolume} onChange={onSetMusicVolume}></Slider>
                <Slider sliderType={"SFX Volume"} value={sfxVolume} onChange={onSetSfxVolume} onChangeUpdate={playSfxOnChange}></Slider>
                <Slider sliderType={"Voice Volume"} initialVolume={voiceVolume} value={voiceVolume} onChange={onSetVoiceVolume} onChangeUpdate={playVoiceOnChange}></Slider>
            </ul>
            <ul className={"options-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}
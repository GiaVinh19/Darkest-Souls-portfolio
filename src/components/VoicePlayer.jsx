import React, { useRef, useEffect, useContext } from 'react';
import Context from '../Context';

export default function VoicePlayer() {
    const audioRef = useRef(null);
    const { audio } = useContext(Context);
    const { voiceFile, setVoiceFile, voiceVolume, setPlayVoice } = audio;

    const subtitleText = {

        "" : "",
        
        // Options
        "/audio/voice/Options/Options.mp3" : "Salutation.",

        // AboutMe
        "/audio/voice/AboutMe/Vindicator.mp3" : "A mighty sword-arm anchored by a holy purpose. A zealous warrior.",
        "/audio/voice/AboutMe/Venator.mp3" : "The thrill of the hunt... The promise of payment...",
        "/audio/voice/AboutMe/Venomancer.mp3" : "What better laboratory than the blood-soaked battlefield?",

        // Profiles
        "/audio/voice/Profiles/Github.mp3" : "Secrets and wonders can be found in the most tenebrous corners of this place.",
        "/audio/voice/Profiles/Itch.io.mp3" : "Carelessness will find no clemency in this place!",
        "/audio/voice/Profiles/Linkedin.mp3" : "Great heroes can be found even here, in the mud and rain.",
        "/audio/voice/Profiles/Medium.mp3" : "The well-worn seat of our research, still littered with notes, diagrams, and dusty journals.",
        "/audio/voice/Profiles/Resume.mp3" : "A brilliant confluence of skill and purpose!",

    }

    // useEffect(() => {
    //     console.log(`voiceFile has changed to: ${voiceFile}`);
    // }, [voiceFile]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = voiceVolume;
        }
    }, [voiceVolume]);

    useEffect(() => {
        setPlayVoice(() => {
            return () => {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            };
        });
    }, [setPlayVoice]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = voiceFile;
            audioRef.current.play().catch(error => {
                if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
                    // console.log("If thou dost encounter this error, 'tis verily for that Google doth harbor a distaste for the voice of Ancestor that playeth of its own accord.");
                    return;
                }
                else if (error.message.includes('Failed to load because no supported source was found')) {
                    return;
                }
                else {
                    console.log(error);
                }
            });
        }
    }, [voiceFile]);


    // useEffect(() => {
    //     console.log(`voiceFile has changed to: ${voiceFile}`);
    // }, [voiceFile]);

    // chosenProfile === profile ? () => {} : () => onSetChosenProfile(profile, setVoiceFile)

    return (
        <>
            <div className={`subtitle-container ${voiceFile != "" && voiceVolume != 0 ? 'open' : 'close'}`} >
                <span className={`subtitle ${voiceFile != "" && voiceVolume != 0 ? 'open' : 'close'}`}>{subtitleText[voiceFile]}</span>
            </div>
            <audio ref={audioRef} onEnded={() => setVoiceFile("")}>
                <source src={voiceFile} type={"audio/mp3"}  />
                Thy browser doth not lend its ear to the voice of Ancestor.
            </audio>
        </>
    );
}
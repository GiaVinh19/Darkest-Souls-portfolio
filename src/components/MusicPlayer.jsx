import React, { useRef, useEffect, useContext } from 'react';
import Context from '../Context';

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const { audio } = useContext(Context);
    const { musicFile, musicVolume, setPlayMusic } = audio;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = musicVolume;
        }
    }, [musicVolume]);

    useEffect(() => {
        setPlayMusic(() => {
            return () => {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            };
        });
    }, [setPlayMusic]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = musicFile;
            audioRef.current.play().catch(error => {
                if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
                    // console.log("If thou dost encounter this error, 'tis verily for that Google doth harbor a distaste for music that playeth of its own accord.");
                    return;
                }
                else if (error.message.includes('Failed to load because no supported source was found')) {
                    return;
                }
                else {
                    console.log(error)
                }
            });
        }
    }, [musicFile]);

    return (
        <audio ref={audioRef} loop>
            <source src={musicFile} type={"audio/mp3"} />
            Thy browser doth not lend its ear to the symphony of sound.
        </audio>
    );
}
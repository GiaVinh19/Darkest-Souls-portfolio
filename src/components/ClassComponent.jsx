import Context from '../Context';
import React, { useContext } from 'react';

export default function ClassComponent({ heroClass, chosenClass, onSetChosenClass, classDescription }) {

    const { audio } = useContext(Context);
    const { setVoiceFile } = audio;

    return (
        <div className={"class-component"}>
            <div className={"context-container"}>
                <img 
                    className={"context-image"}
                    src = {`${import.meta.env.BASE_URL}image/AboutMe/context.webp`}>
                </img>
                <div className={"context-box"}>
                    {`${classDescription[heroClass]}`}
                </div>
            </div>
            <span className={"class-title"}>
                {`${heroClass}`}
            </span>
            <img
                draggable={"false"}
                className={`class-image ${chosenClass === heroClass ? 'chosen' : 'unchosen'} `}
                onClick={chosenClass === heroClass ? () => {} : () => onSetChosenClass(heroClass, setVoiceFile)}
                src={`${import.meta.env.BASE_URL}image/AboutMe/${heroClass}.webp`}>
            </img>
        </div>
    )
}
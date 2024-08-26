import Context from "../Context";
import React, {useContext} from 'react';

export default function SkillButton({ chosenSkill, heroClass, skillNumber, onSetChosenSkill }) {

    const { audio } = useContext(Context);
    const { sfxVolume } = audio;

    return (
        <img 
            draggable={false}
            className={chosenSkill === skillNumber ? 'chosen' : 'unchosen'} 
            src={`${import.meta.env.BASE_URL}image/${heroClass}/${skillNumber}.webp`}
            onClick={chosenSkill === skillNumber ? () => onSetChosenSkill("", sfxVolume) : () => onSetChosenSkill(skillNumber, sfxVolume)}>
        </img>
    )
}
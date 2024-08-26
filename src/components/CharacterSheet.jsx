import NavButton from "./NavButton"
import React, { useEffect, useState } from 'react';
import SkillButton from "./SkillButton";

export default function CharacterSheet({ heroClass, skill01, skill02, skill03, skill04, skillName, skillText }) {

    const [chosenSkill, setChosenSkill] = useState("");

    function onSetChosenSkill(skill, sfxVolume) {
        setChosenSkill(skill);
        if (skill != "") {
            const audio = new Audio(`/audio/sfx/${heroClass}/${skill}.mp3`);
            audio.volume = sfxVolume
            audio.play()
        }
    }

    useEffect(() => {
        // console.log(chosenSkill);
    }, [chosenSkill]); // This effect runs whenever chosenSkill changes

    return (
        <div className={"character-sheet"}>
            <span>{heroClass}</span>
            <div className={"character-section"}>
                <div className={"character-visual"}>
                    <video
                        className="character-portrait"
                        draggable="false"
                        src={`/image/${heroClass}/${chosenSkill}.webm`}
                        autoPlay
                        preload="auto"
                        loop
                        muted>
                    </video>
                </div>
                <div className={"character-info"}>
                    <div className={"skill-text"}>
                        <span className={"skill-name"}>{skillName[chosenSkill]}</span>
                        <span className={"skill-description"}>{skillText[chosenSkill]}</span>
                    </div>
                    <div className={"skill-icon"}>
                        <SkillButton heroClass={heroClass} skillNumber={skill01} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton heroClass={heroClass} skillNumber={skill02} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton heroClass={heroClass} skillNumber={skill03} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                        <SkillButton heroClass={heroClass} skillNumber={skill04} chosenSkill={chosenSkill} onSetChosenSkill={onSetChosenSkill} ></SkillButton>
                    </div>
                </div>
            </div>
            <ul className={"character-return"}>
                <NavButton titleName={"◀ About Me"} link={"/about-me"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}
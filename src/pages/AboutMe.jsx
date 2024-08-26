import ClassComponent from "../components/ClassComponent"
import React, { useState } from 'react';
import NavButton from "../components/NavButton";

export default function AboutMe() {

    const Frontend = "The Frontend of Vinh's Vanguard. As the leader of the campaign, Vindicator plans and visualizes his victory through the mastery of HTML, CSS, JS, and React."
    const Backend = "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer lurks in the shadow and secretly deals data over time with the specialization of Python, Flask, SQL-Alchemy, and CRUD."
    const Generalist = "The Generalist of Vinh's Vanguard. As the artisan of all trades, Venator adapts to various challenges of visual, audio and game design by his versatility in Audacity, Godot, Krita, and Capcut."

    const classDescription = {"Vindicator" : Frontend, "Venomancer" : Backend, "Venator" : Generalist};

    const [chosenClass, setChosenClass] = useState("");

    function onSetChosenClass(heroClass, setVoiceFile) {
        setVoiceFile(`/audio/voice/AboutMe/${heroClass}.mp3`)
        setChosenClass(heroClass);
    }

    // useEffect(() => {
    //     // console.log(chosenClass);
    // }, [chosenClass]); // This effect runs whenever chosenClass changes

    return (
        <div className={"about-me"}>
            <ul className={"select-class"}>
                <li>About Me</li>
            </ul>

            <div className={"class-container"}>
                <ClassComponent
                    heroClass={"Vindicator"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>

                <ClassComponent
                    heroClass={"Venomancer"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>

                <ClassComponent
                    heroClass={"Venator"}
                    chosenClass={chosenClass}
                    onSetChosenClass={onSetChosenClass}
                    classDescription={classDescription}>
                </ClassComponent>
            </div>

            <ul className={"arrows"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <NavButton titleName={"Character Sheet ▶"} link={chosenClass}></NavButton>
            </ul>
        </div>
    )
}


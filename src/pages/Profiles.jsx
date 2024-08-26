import NavButton from '../components/NavButton';
import LinkButton from '../components/LinkButton';
import NavLinkButton from '../components/NavLinkButton';
import { useState } from 'react';

export default function Profiles() {

    const [chosenProfile, setChosenProfile] = useState("");

    // useEffect(() => {
    //     // console.log(chosenProfile);
    // }, [chosenProfile]); // This effect runs whenever chosenClass changes

    const profileLink = {
        "Github" : "https://github.com/GiaVinh19",
        "Linkedin" : "https://www.linkedin.com/in/gia-vinh-nguyen/",
        "Itch.io" : "https://spin2vin.itch.io/",
        "Resume" : "https://docs.google.com/document/d/1Edm8DT03SRHqtSb1dXNGlOtJ_BbeM7PERAY3pMrmk-4",
        "Medium" : "https://medium.com/@vinh.g.nguyen19"
    }

    function onSetChosenProfile(profile, setVoiceFile) {
        setVoiceFile(`/audio/voice/Profiles/${profile}.mp3`)
        setChosenProfile(profile);
    }

    function getProfileTitle(chosenProfile) {
        if (chosenProfile != "") {
            return `${chosenProfile} ▶`;
        }
        else {
            return
        }
    }

    function getProfileLink(chosenProfile) {
        if (chosenProfile != "") {
            return profileLink[chosenProfile];
        }
        else {
            return
        }
    }

    return (
        <div className={"profiles"}>
            <span> Profiles </span>
            <div className={"map-section"}>
                <img
                    className={"map"}
                    src={"/image/Profiles/map.webp"}>
                </img>
                <LinkButton profile={"Itch.io"} chosenProfile={chosenProfile} top={"40%"} left={"37.66%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"Linkedin"} chosenProfile={chosenProfile} top={"66%"} left={"66%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"Medium"} chosenProfile={chosenProfile} top = {"29%"} left={"57.75%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"Github"} chosenProfile={chosenProfile} top = {"56%"} left={"42%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
                <LinkButton profile={"Resume"} chosenProfile={chosenProfile} top={"50%"} left={"66.6%"} onSetChosenProfile={onSetChosenProfile}></LinkButton>
            </div>
            <ul className={"profiles-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <NavLinkButton titleName={getProfileTitle(chosenProfile)} link={getProfileLink(chosenProfile)}></NavLinkButton>
            </ul>
        </div>
    )
}
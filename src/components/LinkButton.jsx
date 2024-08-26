import { useContext } from "react"
import Context from "../Context"

export default function LinkButton( {top, left, chosenProfile, profile, onSetChosenProfile} ) {
    
    const { audio } = useContext(Context);
    const { setVoiceFile } = audio;

    return (
    <img
        className={`link-button ${chosenProfile === profile ? 'chosen' : 'unchosen'} `}
        // className={"link-button"} 
        src={`/image/Profiles/${profile}.webp`}
        style={{
            top : top,
            left : left
        }}
        onClick={chosenProfile === profile ? () => {} : () => onSetChosenProfile(profile, setVoiceFile)}
        >
    </img>
    )
}
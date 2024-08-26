import CharacterSheet from "../components/CharacterSheet";

export default function Vindicator() {
    const skillText = {
        "" : "The Frontend of Vinh's Vanguard. As the leader of the operation, Vindicator plans and visualizes his victory through the mastery of HTML, CSS, JS, and React.",
        "html" : "Endowed with the Mighty Lord's sacred knowledge, this holy text blesses Vindicator and his allies the essential foundation for any crusade.",
        "css": "Deploy stunning visual effects that captivate and mesmerize all who behold them, rendering adversaries awestruck.",
        "js": "A knight's masterful technique to swiftly respond with intricate algorithms, executing commands with the speed and precision of a jousting blade.",
        "react": "Empowers Vindicator to protect his allies with lightning-fast responses and unmatched adaptability. Allows Vindicator to dynamically adjusts his tactics to counter any adversary."        
    };

    const skillName = {
        "" : "",
        "html": "Holy Text of Mighty Lord",
        "css": "Crusader Sacred Smite",
        "js": "Jouster Strike",
        "react": "React"
    }

    return (
        <CharacterSheet 
        heroClass={"Vindicator"} 
        skillName={skillName}
        skillText={skillText}
        skill01={"html"}
        skill02={"css"}
        skill03={"js"}
        skill04={"react"}
        >
        </CharacterSheet>
    )
}
import CharacterSheet from "../components/CharacterSheet";

export default function Venomancer() {
    const skillText = {
        "" : "The Backend of Vinh's Vanguard. As the mastermind of the operation, Venomancer lurks in the shadow and secretly deals data per session with the specialization of Python, Flask, SQL-Alchemy, and CRUD.",
        "python": "Venomancer's loyal pet that provide the foundation ingredients for any alchemist",
        "flask": "A vessel to hold the essential ingredients, akin to libraries, dependencies, and configurations of backend arsenal.",
        "sql-alchemy": "A mapping tool to illustrate the relationship and interaction among various tables of ingredients",
        "crud" : "The alchemical prowess to masterfully manipulate ingredients into any shape and form."
    };

    const skillName = {
        "" : "",
        "python" : "Python",
        "flask" : "Flask",
        "sql-alchemy" : "Schematic of Quintessential Lore in Alchemy",
        "crud" : "Craft, Render, Utilize, and Dissolve"
    }

    return (
        <CharacterSheet 
        heroClass={"Venomancer"} 
        skillName={skillName}
        skillText={skillText}
        skill01={"python"}
        skill02={"flask"}
        skill03={"sql-alchemy"}
        skill04={"crud"}
        >
        </CharacterSheet>
    )
}
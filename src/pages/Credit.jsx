import NavButton from "../components/NavButton";

export default function Credit() {
    return (
        <div className={"credit-menu"}>
            <ul className={"credit-title"}>
                <li>Credit</li>
            </ul>
            <ul className={"credit-list"}>
                <ul>– Program & UI/UX Design –
                    <li>Gia Vinh Nguyen</li>
                </ul>
                <ul>– Frameworks & Softwares –
                    <li>React & Vite</li>
                    <li>Krita</li>
                    <li>Audacity</li>
                    <li>CapCut</li>
                </ul>
                <ul>– Special Thanks –
                    <li>FromSoftware Inc - Dark Souls</li>
                    <li>Red Hook Studios - Darkest Dungeon</li>
                    <li>Acid Wizard Studio - Dark Wood</li>
                </ul>
            </ul>
            <ul className={"credit-return"}>
                <NavButton titleName={"◀ Main Menu"} link={"/"}></NavButton>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}
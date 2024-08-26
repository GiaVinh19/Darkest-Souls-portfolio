import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className={"error-page"}>
            <h1>Hark! A Misadventure Hath Befallen Thee.</h1>
            <p>Thou hast ventured into the forbidden land where thou dost not belong.</p>
            <p>The path thou seekest is hidden in shadows, or mayhap it ne'er existed.</p>
            <p>Fret not, noble adventurer!</p>
            <p>Kindle thy bonfire to journey homeward.</p>
            <p>May grace light thy path, and thou voyage free of mishap.</p>
            <NavLink className={"bonfire"} to="/">
                <img src={"/image/ErrorPage/bonfire.gif"} />
            </NavLink>
        </div>
    )
}
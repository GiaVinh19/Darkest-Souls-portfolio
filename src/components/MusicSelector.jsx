export default function MusicSelector({ onChange }) {

    return (
        <div className={"music-container"}>
            <span>
                Music
            </span>
            <select name={"music"} className={"music"} onChange={onChange}>
                <option value="">Select Music</option>
                <option value="/audio/music/Dark-Reality.mp3">Dark Reality</option>
                <option value="/audio/music/Dark-Souls.mp3">Dark Souls</option>
                <option value="/audio/music/Dark-Wood.mp3">Dark Wood</option>
                <option value="/audio/music/Darkest-Dungeon.mp3">Darkest Dungeon</option>
            </select>
        </div>
    )
}
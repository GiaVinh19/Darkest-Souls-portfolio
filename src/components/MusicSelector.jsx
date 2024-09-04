export default function MusicSelector({ onChange }) {

    return (
        <div className={"music-container"}>
            <span>
                Music
            </span>
            <select name={"music"} className={"music"} onChange={onChange}>
                <option value="">Select Music</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Dark-Reality.mp3`}>Dark Reality</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Dark-Souls.mp3`}>Dark Souls</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Dark-Souls-II.mp3`}>Dark Souls II</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Dark-Souls-III.mp3`}>Dark Souls III</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Dark-Wood.mp3`}>Dark Wood</option>
                <option value={`${import.meta.env.BASE_URL}audio/music/Darkest-Dungeon.mp3`}>Darkest Dungeon</option>
            </select>
        </div>
    )
}
export default function Slider({ sliderType, value, onChange, onChangeUpdate }) {

    return (
        <div className={"slider-container"}>
            <span>
                {sliderType}
            </span>
            <input 
                className={sliderType}
                type={"range"} 
                min={"0.0"} 
                max={"1.0"} 
                step={"0.1"}
                value={value}
                onChange={onChange}
                onMouseUp={onChangeUpdate}
                onTouchEnd={onChangeUpdate}
                >
            </input>
        </div>
    )
}
export default function CurrentWeather(props){
    return(
        <>
            <h1>{props.city}</h1>
            <h2>{props.day}</h2>
            <h2>Today</h2>
            <img src={props.img} alt="icon current weather" />
            <div>
                <p>{props.currentT}</p>
                <p>{props.minT}</p>
            </div>
            <div>
                <div>
                    <h4>Wind Speed</h4>
                    <p>{props.wind}</p>
                </div>
                <div>
                    <h4>Precipitation</h4>
                    <p>{props.precipitation}</p>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <p>{props.humidity}</p>
                </div>
            </div>
        </>
    )
}
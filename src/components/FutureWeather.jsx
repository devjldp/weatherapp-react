export default function FutureWeather(props){
    /*
        date
        temperature
        type of weather
        icons
    */
    return(
        <>
            <h2 className="">{props.day}</h2>
            <img src={props.img} alt="icon weather" />
            <p>{props.condition}</p>
            <p>{props.averageT}</p>
        </>
    )
}
import { useEffect, useState } from 'react'
import CurrentWeather from './components/CurrentWeather.jsx'
import './App.css'
import FutureWeather from './components/FutureWeather.jsx'

function App() {
  // state variable
  const [weather, setWeather] = useState()

  // We need:
  // API key -
  // API url -
  // useEffect -
  // fetch funtion -
  // await -
  // async function  -
  // .json() -
  useEffect(() => {

    // Define our URL:
    const URL = 'http://api.weatherapi.com/v1/forecast.json?key=0f58f193d7be4365a50193908231008&q=Cardiff&days=3&aqi=no&alerts=no'

    // Create the function:
    async function fetchData(){
      try{
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data)
        setWeather(data)
        //console.log(weather) => weather didn't get the data yet
      
      }catch(error){
        console.log(error)
      }
    }
    // Call the function
    fetchData()
  }, [])
  // console.log(weather.location.name)
  return (
    <>
      { weather && //  check if the weather data exists in the state variable
        <CurrentWeather 
          city = {weather.location.name}
          day = {weather.forecast.forecastday[0].date}
          img = {weather.current.condition.icon}
          currentT = {weather.current.temp_c}
          minT = {weather.forecast.forecastday[0].day.mintemp_c}
          wind = {weather.current.wind_kph}
          precipitation = {weather.current.precip_mm}
          humidity = {weather.current.humidity}
        />
      }
      <div>
        { weather &&
          /* One solution using a for loop 
            for(let i = 1; i< weather.forecast.forecastday.length;i++){
                     <FutureWeather 
              key = {index}
              day = {weather.forecast.forecastday[i].date} 
              img = {weather.forecast.forecastday[i].day.condition.icon}
              condition = {weather.forecast.forecastday[i].day.condition.text}
              averageT = {weather.forecast.forecastday[i].day.avgtemp_c}
              />
            }
          
          
          */
          
            weather.forecast.forecastday.map(( data, index) => {
            // first iteration data = weather.forecast.forecastday[0] 
            // Second iteration data = weather.forecast.forecastday[1] 
            // third iteration data = weather.forecast.forecastday[2]
            if(index > 0){
              return(
                <FutureWeather 
                key = {index}
                day = {data.date} 
                img = {data.day.condition.icon}
                condition = {data.day.condition.text}
                averageT = {data.day.avgtemp_c}
                />
              )

            } 

          })

        }
      </div>


    </>
  )
}

export default App

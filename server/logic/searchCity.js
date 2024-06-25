const weatherData= require("../data/weather.json") 

const getWeather = (cityName)=>{
    const result= weatherData.filter(currentCity=>
        currentCity.city=== cityName
  )
  return result

}
module.exports= {getWeather}
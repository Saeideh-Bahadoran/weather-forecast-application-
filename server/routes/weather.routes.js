const router = require("express").Router();
const { request } = require("../app");
const weather= require("../data/weather.json");
const {getWeather} = require("../logic/searchCity");
router.get("/", (req, res) => {
    res.json(weather);
  });
router.post("/",(req,res)=>{
    try {
        console.log("request: ",  req.body)

        const result= getWeather(req.body.city)
        console.log(result)
        res.json(result[0])
        
    } catch (error) {
        console.log("Error: ", error)
        res.json(error)
        
    }
})

  module.exports = router;

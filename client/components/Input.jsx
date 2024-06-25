import React, { useState } from "react";

const Input = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [result, setResult] = useState("");
  const handleClick = () => {
    console.log(selectedCity);
    sendData();
  };

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const sendData = async () => {
    fetch("http://localhost:5005/api/")
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {}
      )
      .catch();

    try {
      const response = await fetch("http://localhost:5005/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ city: selectedCity }),
      });

      // if(!response.ok){
      //     throw new Error(`HTTP error! Status: ${response.status}`)
      // }
      const responseData = await response.json();

      setResult(responseData);
      return responseData;
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };
  return (
    <>
      <label htmlFor="city.select">Choose a city</label>
      <select name="cities" id="city.select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Berlin">Berlin</option>
        <option value="Hamburg">Hamburg</option>
      </select>
      <button id="seeWeatherBtn" type="button" onClick={handleClick}>
        See the weather
      </button>
      {result && (
        <div>
          <h3> City: {result.city}</h3>
          <h3> temerature: {result.temperature}</h3>
          <h3> Condition: {result.condition}</h3>
          <h3> Humidity: {result.humidity}</h3>
          <h3> WindSpeed: {result.windSpeed}</h3>
        </div>
      )}
    </>
  );
};

export default Input;

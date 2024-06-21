# weather-forecast-application-
<br/>
Task: Weather Forecast Application<br/>
Background<br/>
You are working on a platform to provide weather forecasts to users based on their selected city. Assume there is an external provider of weather data that supplies information about various cities' weather conditions. Your job is to process the user input and provide a detailed weather forecast based on the selected city.
<br/>
External Weather Data<br/>
The data returned by the external weather provider is in the following format:
<br/>
json<br/>
Copy code<br/>
[<br/>
  {"city": "New York", "temperature": 25, "condition": "Sunny", "humidity": 50, "windSpeed": 10},<br/>
  {"city": "Los Angeles", "temperature": 22, "condition": "Cloudy", "humidity": 60, "windSpeed": 5},<br/>
  {"city": "Chicago", "temperature": 18, "condition": "Rainy", "humidity": 70, "windSpeed": 15},<br/>
  ...<br/>
]<br/>
Task<br/>
Create two applications to complete this challenge. The first application (backend) must contain the algorithm to process the data coming from the external weather provider and deliver it as a RESTful application. The second application (frontend) must consume the data coming from the first application and display it in a web application.
<br/>
Requirements<br/>
Backend Application:<br/>

Must accept the following input parameter:
City name
Must deliver the weather forecast for the specified city with at least the properties:
Temperature (°C)
Condition (e.g., Sunny, Cloudy, Rainy)
Humidity (%)
Wind Speed (km/h)
Frontend Application:

Must have a form where the user can input the city name.
Must display the weather forecast for the specified city based on the user's input.
The forecast should include temperature, condition, humidity, and wind speed.
Bonus Points
Docker Setup: Set up a Dockerfile to quickly install all application requirements and run it on team member computers if they are running Linux.
Additional Features:
Provide a search history feature to allow users to quickly re-select previously searched cities.
Add a feature to display a 5-day weather forecast.
Implement user authentication to save user preferences and search history.
Example Input/Output
Input Parameter:

City name: "New York"
Output:

json
Copy code
{
  "city": "New York",
  "temperature": 25,
  "condition": "Sunny",
  "humidity": 50,
  "windSpeed": 10
}
Steps to Implement
Backend Application:

Create an endpoint to accept the city name as input.
Fetch and filter weather data from the external provider based on the city name.
Return the weather forecast for the specified city as a JSON response.
Frontend Application:

Create a form to capture the city name input from the user.
Make an API call to the backend application with the captured city name.
Display the weather forecast for the specified city in a user-friendly manner.
Implement additional features and UI enhancements as per the bonus points.
This task involves backend development to process and filter weather data based on user input and frontend development to create an interactive user interface for displaying weather forecasts. The additional bonus points encourage you to set up a Docker environment and enhance the application with more features.

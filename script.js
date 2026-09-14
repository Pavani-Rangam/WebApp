async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "3fdab0056f10a861303bed698cc97319"; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const weatherBox = document.getElementById("weatherBox");
    const errorBox = document.getElementById("error");

    try{
        const response = await fetch(url);
        
        /* A built-in property of the JavaScript fetch() API. It returns true if the server responded with a successful status code (between 200 and 299). It returns false if the server responded with an error code (like 404 Not Found or 500 Server Error)*/
        if (!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        const temp = data.main.temp;
        const humd = data.main.humidity;
        const wind = data.wind.speed;
        const condition = data.weather[0].main;
        const description = data.weather[0].description;

      /*  document.getElementById("temp").innerText = "Temparature:"+ temp + "°C";
        document.getElementById("humidity").innerText = "Humidity: " + humd + "%";
        document.getElementById("wind").innerText = "Wind: " + wind + " km/h";*/

        document.getElementById("temp").innerHTML =
            `<img src="https://cdn-icons-png.flaticon.com/128/1684/1684375.png" width="20">
            Temparature: ${temp.toFixed(1)}\u00B0C`; 

        document.getElementById("humidity").innerHTML =
            `<img src="https://cdn-icons-png.flaticon.com/128/728/728093.png" width="20">
            Humidity: ${humd}%`;

        document.getElementById("wind").innerHTML =
            `<img src="https://cdn-icons-png.flaticon.com/128/1146/1146860.png" width="20">
         Wind: ${wind} km/h`;

        document.getElementById("condition").innerText = description;

        // Dynamic icon
        const icon = document.getElementById("icon");

        if (condition === "Clouds") {
            icon.src = "https://cdn-icons-png.flaticon.com/128/414/414825.png";
        } 
        else if (condition === "Rain" || condition === "Drizzle") {
            icon.src = "https://cdn-icons-png.flaticon.com/128/1163/1163624.png";
        } 
        else if (condition === "Clear") {
            icon.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png";
        } 
        else if (condition === "Snow") {
            icon.src = "https://cdn-icons-png.flaticon.com/128/642/642102.png";
        } 
        else if (condition === "Thunderstorm") {
            icon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146860.png";
        } 
        else if (
            condition === "Haze" ||
            condition === "Mist" ||
            condition === "Fog" ||
            condition === "Smoke"
        ){
        icon.src = "https://cdn-icons-png.flaticon.com/128/4005/4005901.png";
        } 
       else {
            icon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
        }
       
        weatherBox.style.display = "block";
        errorBox.innerText = "";
    }
    catch(error){
        weatherBox.style.display = "none";
        errorBox.innerText = error.message;
    }
}
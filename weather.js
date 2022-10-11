const { response } = require("express");
const express = require("express");

const https = require('node:https');

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=madrid,spain&units=metric&appid=67d747a8518c61af2875f3563373f6f5"

    https.get(url, (response) => {
        response.on("data", (data)=> {
            console.log(response.statusCode);
            const weatherData=JSON.parse(data);
            //console.log(weatherData);
            const humidity = weatherData.main.pressure;
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconImage = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    
            res.write("<h1>The description of the weather in madrid, spain is " + weatherDescription + "</h1>");
            res.write("<h1>The humidity in madrid, spain is " + humidity + "</h1>");
            res.write("<h1>The temperature in madrid, spain is " + temp + " degree celsius" + "</h1>");
            res.write("<img src="+ iconImage +">");

        })

    });

});













































// app.get("/", function(req, res){

//     const url = "https://api.openweathermap.org/data/2.5/weather?q=london,uk&units=metric&appid=67d747a8518c61af2875f3563373f6f5"

//     https.get(url, (response) => {
//         // console.log(response)
//         // res.on('data', (d) => {
//         //     process.stdout.write(d);
//         // });
//         console.log(response.statusCode);
//         response.on("data", (data) => {
//             const weatherData = JSON.parse(data);
//             // const weatherString = JSON.stringify(data);
//             // console.log(weatherData);

//             const pressure = weatherData.main.pressure // getting a specific path from the JSON data
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;

//             const iconImage = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//             // res.send("<h1>The weather in london is currently " + weatherDescription + "<br>" + "<h1>The temperature of london is " + temp + " degree celsius</h1>")

//             res.write("<h1>The temperature of london,uk is " + temp + " degree celsius</h1>");
//             res.write("<p>The weather in london,uk is currently  " + weatherDescription + " </p>");
//             res.write("<img src=" + iconImage +">") 
            
//             res.send();
//         })
        
//     });
// });



app.listen(3000, function(req, res){
    console.log("server has started at port 3000");
});




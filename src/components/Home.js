import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import 'animate.css';
import axios from 'axios';

const theme = createTheme();

export function Home(){
  const handleSubmit = () =>{
    const inputCity = document.getElementById('address');
    const weatherInfo = document.getElementById('weatherInfo');
    const APIKey = '4b0201b530400e6c7feca7305cdf61f2';
    getWeather();

    async function getWeather() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${APIKey}`);
      const weather= response.data;
      const name = weather.name;
      const { temp, humidity } = weather.main;
      const { icon, description } = weather.weather[0];
      const { speed } = weather.wind;
      const tempInt = parseInt((temp*100-27315)/100);
      weatherInfo.innerHTML = `
        <div>
          <h3>${name} weather</h3>
          <img src="https://openweathermap.org/img/wn/${icon}.png" />
          <p>Description: ${description}</p>
          <p>Temp: ${tempInt} °C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind speed: ${speed} km/h</p>
        </div>`
      inputCity.value = '';
    }
  }
    return(
        <ThemeProvider theme={theme}>
      <Grid container component="main" 
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
        <div className="info-weather">
          <div className="form-check mt-3">
              <div className="card w-75">
                  <div className="input-group">
                      <input type="text" name="address" id="address" className="form-control" placeholder="Weather of city" />
                      <input type="submit" value="Search" className="btn btn-success ms-3" onClick={handleSubmit} />
                  </div>
              </div>
              <div id="weatherInfo" className="text-start text-info mt-4"></div>
          </div>
        </div>
        <div className="card-img-overlay mt-30">
        <h1 className="animate__animated animate__bounceInLeft mt-5" style={{color: "blue"}}>Welcome to the product management page!</h1>
            <a href="/login" className="btn btn-primary mt-5 animate__animated animate__bounceInRight animate__repeat-2" >Login</a>
            <br />
            <a rules="button" href="https://6thanh.github.io/bai_cuoi_khoa_HTML_CSS_Ha/" className="btn btn-warning m-5 animate__animated animate__bounceInLeft animate__delay-2" >Demo deploy github</a>
            <a rules="button" href="https://tranquil-eyrie-97832.herokuapp.com/" className="btn btn-warning m-5 animate__animated animate__bounceInRight animate__delay-2" >Demo deploy heroku</a>
        </div>
        <CssBaseline />
        </Grid>
    </ThemeProvider>
    )
}
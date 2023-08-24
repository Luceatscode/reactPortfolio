import React from 'react';

let password = ("../../assets/password.png");
let portfolio = ("../../assets/portfolio.png");
let quizApp = ("../../assets/quizApp.png");
let textEditor = ("../../assets/textEditor.png");
let weather = ("../../assets/weather.png");
let work = ("../../assets/work.png");

export default function Portfolio() {
  return (
    <div class= "body">
      <h1>Project Portfolio!</h1>
      <p>
        On this page you will find some of my favorite projects that I have done throughout my coding
        bootcamp experience. I have included links to my GitHub repositories and the deployed application for each project so you can check them out!
      </p>

      {/* password */}
      <div class="row">
        <div class="col-sm-6 col-1">
          <div class="card">
            {/* for centering btns */}
            <div class="text-center" >
            <img height="350px" width="600px" src={process.env.PUBLIC_URL + password} class="float-center password" alt="Password Generator" /> </div>
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">This is a password generator that will generate a random password based on the criteria you select!</p>
              <a href="https://github.com/Luceatscode/Password-Generator" class="btn btn-primary">GitHub Repository</a>
              <a href="https://luceatscode.github.io/Password-Generator/" class="btn btn-primary">Deployed Application</a>
            </div> </div> </div> </div>

        {/* portfolio */}
        <div class="row"> 
        <div class="col-sm-6 col-2"> 
        <div class="card"> 
        <div class="text-center" >
        <img height="350px" width="600px" src={process.env.PUBLIC_URL + portfolio} class="float-left portfolio" alt="Portfolio" /> </div>
        <div class="card-body">
          <h5 class="card-title">Portfolio</h5>
          <p class="card-text">This was the first portfolio I ever made!</p>
          <a href="https://github.com/Luceatscode/Portfolio" class="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/Portfolio/" class="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div>

        {/* quizApp */}
        <div class="row"> 
        <div class="col-sm-6 col-3"> 
        <div class="card"> 
        <div class="text-center" >
        <img height="375px" width="600px" src={process.env.PUBLIC_URL + quizApp} class="float-left quizApp" alt="Quiz App" /> </div>
        <div class="card-body">
          <h5 class="card-title">Quiz App</h5>
          <p class="card-text">This was a quiz app I made using Javascript!</p>
          <a href="https://github.com/Luceatscode/quiz-app" class="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/quiz-app/" class="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div>

        {/* textEditor */}
        <div class="row"> 
        <div class="col-sm-6 col-4"> 
        <div class="card"> 
        <div class="text-center" >
        <img height="350px" width="800px" src={process.env.PUBLIC_URL + textEditor} class="float-left textEditor" alt="Text Editor" /> </div>
        <div class="card-body">
          <h5 class="card-title">Text Editor</h5>
          <p class="card-text">This is a text editor that uses data persistence techniques that serve as redundancy in case one of the
            options is not supported by the browser. The application will also function offline.!</p>
          <a href="https://github.com/Luceatscode/textEditor" class="btn btn-primary">GitHub Repository</a>
          <a href="https://text-editor-lr-e7e790a7cb84.herokuapp.com/" class="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div>

        {/* weather */}
        <div class="row"> 
        <div class="col-sm-6 col-4"> 
        <div class="card"> 
        <div class="text-center" >
        <img height="350px" width="800px" src={process.env.PUBLIC_URL + weather} class="float-left weather" alt="Weather" /> </div>
        <div class="card-body">
          <h5 class="card-title">Weather App</h5>
          <p class="card-text">This is a weather app that allows you to search a city and it will return a 5-day forecast! </p>
          <div class="text-center" >
          <a href="https://github.com/Luceatscode/weatherdashboard" class="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/weatherdashboard/" class="btn btn-primary">Deployed Application</a> </div>
        </div> </div> </div> </div>

        {/* work */}
        <div class="row"> 
        <div class="col-sm-6 col-4"> 
        <div class="card"> 
        <div class="text-center" >
        <img height="350px" width="800px" src={process.env.PUBLIC_URL + work} class="float-left work" alt="Work" /> </div>
        <div class="card-body">
          <h5 class="card-title">Workday Scheduler</h5>
          <p class="card-text">This is a workday scheduler app that allows you to save notes and each hour will change color based on a past hour, current hour, or future hour! </p>
          <a href="https://github.com/Luceatscode/work-day-scheduler" class="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/work-day-scheduler/" class="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div> </div>

      );
}

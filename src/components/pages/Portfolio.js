import React from 'react';

let password = require("../../assets/password.png");
let portfolio = require("../../assets/portfolio.png");
let quizApp = require("../../assets/quizApp.png");
let textEditor = require("../../assets/textEditor.png");
let weather = require("../../assets/weather.png");
let work = require("../../assets/work.png");

export default function Portfolio() {
  return (
    <div classNameName= "body">
      <h1>Project Portfolio!</h1>
      <p>
        On this page you will find some of my favorite projects that I have done throughout my coding
        bootcamp experience. I have included links to my GitHub repositories and the deployed application for each project so you can check them out!
      </p>

      {/* password */}
      <div className="row">
        <div className="col-sm-6 col-1">
          <div className="card">
            <div className="text-center">
            <img height="350px" width="600px" src={password} alt="Password Generator" /> </div>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">This is a password generator that will generate a random password based on the criteria you select!</p>
              <div className="text-center">
              <a href="https://github.com/Luceatscode/Password-Generator" className="btn btn-primary">GitHub Repository</a>
              <a href="https://luceatscode.github.io/Password-Generator/" className="btn btn-primary">Deployed Application</a>
            </div> </div> </div> </div> </div>

        {/* portfolio */}
        <div className="row"> 
        <div className="col-sm-6 col-2"> 
        <div className="card"> 
        <div className="text-center">
        <img height="350px" width="600px" src={portfolio} alt="Portfolio" /> </div>
        <div className="card-body">
          <h5 className="card-title">Portfolio</h5>
          <p className="card-text">This was the first portfolio I ever made!</p>
          <div className="text-center">
          <a href="https://github.com/Luceatscode/Portfolio" className="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/Portfolio/" className="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div> </div>

        {/* quizApp */}
        <div className="row"> 
        <div className="col-sm-6 col-3"> 
        <div className="card"> 
        <div className="text-center">
        <img height="375px" width="600px" src={quizApp} alt="Quiz App"/> </div>
        <div className="card-body">
          <h5 className="card-title">Quiz App</h5>
          <p className="card-text">This was a quiz app I made using Javascript!</p>
          <div className="text-center">
          <a href="https://github.com/Luceatscode/quiz-app" className="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/quiz-app/" className="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div> </div>

        {/* textEditor */}
        <div className="row"> 
        <div className="col-sm-6 col-4"> 
        <div className="card"> 
        <div className="text-center">
        <img height="350px" width="800px" src={textEditor} alt="Text Editor" /> </div>
        <div className="card-body">
          <h5 className="card-title">Text Editor</h5>
          <p className="card-text">This is a text editor that uses data persistence techniques that serve as redundancy in case one of the
            options is not supported by the browser. The application will also function offline.!</p>
            <div className="text-center">
          <a href="https://github.com/Luceatscode/textEditor" className="btn btn-primary">GitHub Repository</a>
          <a href="https://text-editor-lr-e7e790a7cb84.herokuapp.com/" className="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div> </div>

        {/* weather */}
        <div className="row"> 
        <div className="col-sm-6 col-4"> 
        <div className="card"> 
        <div className="text-center" >
        <img height="350px" width="800px" src={weather} className="float-left weather" alt="Weather" /> </div>
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">This is a weather app that allows you to search a city and it will return a 5-day forecast! </p>
          <div className="text-center">
          <a href="https://github.com/Luceatscode/weatherdashboard" className="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/weatherdashboard/" className="btn btn-primary">Deployed Application</a> </div>
        </div> </div> </div> </div>

        {/* work */}
        <div className="row"> 
        <div className="col-sm-6 col-4"> 
        <div className="card"> 
        <div className="text-center">
        <img height="350px" width="800px" src={work} className="float-left work" alt="Work" /> </div>
        <div className="card-body">
          <h5 className="card-title">Workday Scheduler</h5>
          <p className="card-text">This is a workday scheduler app that allows you to save notes and each hour will change color based on a past hour, current hour, or future hour! </p>
          <div className="text-center">
          <a href="https://github.com/Luceatscode/work-day-scheduler" className="btn btn-primary">GitHub Repository</a>
          <a href="https://luceatscode.github.io/work-day-scheduler/" className="btn btn-primary">Deployed Application</a>
        </div> </div> </div> </div> </div> </div>

      );
}

import React from 'react';

let password = ("../../assets/password.png");
let portfolio = ("../../assets/portfolio.png");
let quizApp = ("../../assets/quizApp.png");
let textEditor = ("../../assets/textEditor.png");
let weather = ("../../assets/weather.png");
let work = ("../../assets/work.png");

export default function Portfolio() {
return (
  <div>
    <h1>Project Portfolio!</h1>
    <p>
      On this page you will find some of my favorite projects that I have done throughout my coding
      bootcamp experience. I have included links to my GitHub repositories and the deployed application for each project so you can check them out!
    </p>

    {/* password */}
    <div className="row"> </div>
    <div className="col-sm-6 col-1"> </div>
    <div className="card"> </div>
    <img height="350px" width="600px" src={process.env.PUBLIC_URL + password} className="float-left password" alt="Password Generator" />
    <div className="card-body">
      <h5 className="card-title">Password Generator</h5>
      <p className="card-text">This is a password generator that will generate a random password based on the criteria you select!</p>
      <a href="https://github.com/Luceatscode/Password-Generator" className="btn btn-primary">GitHub Repository</a>
      <a href="https://luceatscode.github.io/Password-Generator/" className="btn btn-primary">Deployed Application</a>
    </div>

    {/* portfolio */}
    <div className="row"> </div>
    <div className="col-sm-6 col-2"> </div>
    <div className="card"> </div>
    <img height="350px" width="600px" src={process.env.PUBLIC_URL + portfolio} className="float-left portfolio" alt="Portfolio" />
    <div className="card-body">
      <h5 className="card-title">Portfolio</h5>
      <p className="card-text">This was the first portfolio I ever made!</p>
      <a href="https://github.com/Luceatscode/Portfolio" className="btn btn-primary">GitHub Repository</a>
      <a href="https://luceatscode.github.io/Portfolio/" className="btn btn-primary">Deployed Application</a>
    </div>

    {/* quizApp */}
    <div className="row"> </div>
    <div className="col-sm-6 col-3"> </div>
    <div className="card"> </div>
    <img height="375px" width="600px" src={process.env.PUBLIC_URL + quizApp} className="float-left quizApp" alt="Quiz App" />
    <div className="card-body">
      <h5 className="card-title">Quiz App</h5>
      <p className="card-text">This was a quiz app I made using Javascript!</p>
      <a href="https://github.com/Luceatscode/quiz-app" className="btn btn-primary">GitHub Repository</a>
      <a href="https://luceatscode.github.io/quiz-app/" className="btn btn-primary">Deployed Application</a>
    </div>

    {/* textEditor */}
    <div className="row"> </div>
    <div className="col-sm-6 col-4"> </div>
    <div className="card"> </div>
    <img height="350px" width="800px" src={process.env.PUBLIC_URL + textEditor} className="float-left textEditor" alt="Text Editor" />
    <div className="card-body">
      <h5 className="card-title">Text Editor</h5>
      <p className="card-text">This is a text editor that uses data persistence techniques that serve as redundancy in case one of the
        options is not supported by the browser. The application will also function offline.!</p>
      <a href="https://github.com/Luceatscode/textEditor" className="btn btn-primary">GitHub Repository</a>
      <a href="https://text-editor-lr-e7e790a7cb84.herokuapp.com/" className="btn btn-primary">Deployed Application</a>
    </div>

    {/* weather */}
    <div className="row"> </div>
    <div className="col-sm-6 col-4"> </div>
    <div className="card"> </div>
    <img height="350px" width="800px" src={process.env.PUBLIC_URL + weather} className="float-left weather" alt="Weather" />
    <div className="card-body">
      <h5 className="card-title">Weather App</h5>
      <p className="card-text">This is a weather app that allows you to search a city and it will return a 5-day forecast! </p>
      <a href="https://github.com/Luceatscode/weatherdashboard" className="btn btn-primary">GitHub Repository</a>
      <a href="https://luceatscode.github.io/weatherdashboard/" className="btn btn-primary">Deployed Application</a>
    </div>

    {/* work */}
    <div className="row"> </div>
    <div className="col-sm-6 col-4"> </div>
    <div className="card"> </div>
    <img height="350px" width="800px" src={process.env.PUBLIC_URL + work} className="float-left work" alt="Work" />
    <div className="card-body">
      <h5 className="card-title">Workday Scheduler</h5>
      <p className="card-text">This is a workday scheduler app that allows you to save notes and each hour will change color based on a past hour, current hour, or future hour! </p>
      <a href="https://github.com/Luceatscode/work-day-scheduler" className="btn btn-primary">GitHub Repository</a>
      <a href="https://luceatscode.github.io/work-day-scheduler/" className="btn btn-primary">Deployed Application</a>
    </div> </div>

);
}

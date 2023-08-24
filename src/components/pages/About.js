import React from 'react';

let profilePic = require("../../assets/profilePic.jpeg");

export default function About() {
  return (
    <div className= "body">
      <h1>About Page</h1>
      <div className="text-center" >
      <img height="350px" src={profilePic} alt="myself by a waterfall"></img> </div>
      <p className="bio">
        Thank you for checking out my portfolio! I live in Salt Lake City, Utah but am originally from Los Angeles, California!
        I have a passion for learning and am excited to be learning web development. I am currently enrolled in a full-stack coding bootcamp through the University of Utah.
        You will find my work history and education in my resume but here are some things about me that you won't find there: I love all outdoor activites despite the weather!
        I have a purple belt in Jiu-Jitsu and love going to the gym for weight-lifting. I love cooking and trying new foods. I am a fan of all Los Angeles sports teams and the Utah Jazz.
        I am a passionate about music and love going to concerts. I have been Dj since 2019 and love playing music for my friends at parties or private events. I also Dj weddings on the side!
        I am looking forward to learning more about web development and am excited to see where this journey takes me!
      </p>
    </div>
  );
}


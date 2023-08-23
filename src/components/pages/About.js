import React from 'react';

let profilePic = ("../../assets/profilePic.jpeg");

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img height="350px" src={process.env.PUBLIC_URL + profilePic}  />
      <p>
        Thank you for checking out my portfolio! I live in Salt Lake City, Utah but am originally from Los Angeles, California!
        I have a passion for learning and am excited to be learning web development. I am currently enrolled in a full-stack coding bootcamp through the University of Utah.
        As you will see in my resume, I served in the United States Marine Corps for 4 years and was a Supply Administration and Operations Non-Commissioned Officer. I went to bootcamp 
        in San Diego, California MCRD and was stationed in Twentynine-Palms, California and I deployed to Kuwait for 8 months. I moved to Utah in 2018 and received my Associates of Science
        from Salt Lake Community college in 2019. I also was a personal trainer at 24 Hour Fitness before Covid-19 shut our gyms down. I bartended at the prestigious Snowbird Ski Resort in their
        fine dining establishment, The Aerie. I then started working at a tech start-up company called Route in 2022 doing customer service related to claims. My old Lieutenant from the Marine Corps called me
        up and offered me an Accounting job with Inspectre Solutions which s a full service investigative and medical case management agency specializing in international workers compensation, Defense Base Act, 
        war hazard claims and emergency extractions. My time at Route inspired me to take the leap and enroll in a coding bootcamp!
        I am looking forward to learning more about web development and am excited to see where this journey takes me!
      </p>
    </div>
  );
}


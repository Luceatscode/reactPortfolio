import React from 'react';

export default function Contact() {
  return (
    <div class= "body">
      <h1>Contact Page</h1>
      <form>
      <h2>Let's get in touch!</h2>
      <input type="text" id="name" placeholder='Your Name' required></input>
      <input type="email" id="email" placeholder='Your Email' required></input>
      <textarea id="message" rows="7" placeholder='Your Message' required></textarea>
      <button type="submit">Submit</button>
      </form>

      <ul>
        <li class= "text">Phone: 661-754-1744</li>
        <li class= "text">Email: lucsw92@hotmail.com</li>
        <li class= "text">GitHub: <a href="https://github.com/Luceatscode">Luceatscode</a></li>
        <li class= "text">LinkedIn: <a href="https://www.linkedin.com/in/thomas-luc-russell-4b1421ab/">Luc Russell</a></li>
      </ul>
    </div>
  );
}

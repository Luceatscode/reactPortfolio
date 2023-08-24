import React from 'react';

export default function Contact() {
  return (
    <div className="body">
      <h1>Feel Free to Contact Me!</h1>
      <form id="myForm">
  <div className="form-group">
    <label for="exampleInputName1">Name</label>
    <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Full Name"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"></input>
    <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else!</small>
  </div>
  <div className="form-group">
    <label for="exampleInputMessage1">Send me a message!</label>
    <input type="message" className="form-control" id="exampleInputMessage1" placeholder="Message"></input>
    <small id="emailHelp" className="form-text text-muted">Leave me a message at the beep! Beep!</small>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    <ul>
      <li className="ContactText">Phone: 661-754-1744</li>
      <li className="ContactText">Email: lucsw92@hotmail.com</li>
      <li className="ContactText">GitHub: <a href="https://github.com/Luceatscode">Luceatscode</a></li>
      <li className="ContactText">LinkedIn: <a href="https://www.linkedin.com/in/thomas-luc-russell-4b1421ab/">Luc Russell</a></li>
    </ul>
    </div >
  );
}
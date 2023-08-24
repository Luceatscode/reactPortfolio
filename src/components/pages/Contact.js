import React from 'react';

export default function Contact() {
  return (
    <div class="body">
      <h1>Feel Free to Contact Me!</h1>
      <form id="myForm">
  <div class="form-group">
    <label for="exampleInputName1">Name</label>
    <input type="name" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Full Name"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email"></input>
    <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else!</small>
  </div>
  <div class="form-group">
    <label for="exampleInputMessage1">Send me a message!</label>
    <input type="message" class="form-control" id="exampleInputMessage1" placeholder="Message"></input>
    <small id="emailHelp" class="form-text text-muted">Leave me a message at the beep! Beep!</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    <ul>
      <li class="ContactText">Phone: 661-754-1744</li>
      <li class="ContactText">Email: lucsw92@hotmail.com</li>
      <li class="ContactText">GitHub: <a href="https://github.com/Luceatscode">Luceatscode</a></li>
      <li class="ContactText">LinkedIn: <a href="https://www.linkedin.com/in/thomas-luc-russell-4b1421ab/">Luc Russell</a></li>
    </ul>
    </div >
  );
}
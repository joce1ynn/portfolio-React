import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check to see if the field is empty. If so send an error message.
    if (!name || !email || !message) {
      setErrorMessage("Please enter all the fields.");
      // exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // check to see if the email is not valid
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }

    // If everything is good, clear out the input after a successful sending.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    setMessageSent(`Hello ${name}! Your message has been sent!`);
  };

  return (
    <div>
      <div>
        <h1>Send a Message</h1>
        {/* -------------------Fill out name------------------  */}
        <form className="form">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Jane Doe"
          />

          {/* -------------------Fill out emaill------------------  */}
          <label htmlFor="email">Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="jdoe@email.com"
          />

          {/* -------------------Fill out message------------------  */}
          <label htmlFor="message">Message</label>
          <input
            value={message}
            name="message"
            lable="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="message..."
          />

          {/* -------------------submit btn------------------  */}
          <button
            type="button"
            onClick={handleFormSubmit}
            onChange={handleInputChange}
          >
            Send
          </button>

          {/* -------------------error message------------------  */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          {/* -------------------message sent------------------  */}
          {messageSent && (
            <div>
              <p className="send-text">{messageSent}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

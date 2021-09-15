import "./App.css";
/* import emailjs from "emailjs-com"; */
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  function formNameHandler(e) {
    setFormData({ ...formData, name: e.target.value });
  }
  function formEmailHandler(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function formTextHandler(e) {
    setFormData({ ...formData, text: e.target.value });
  }

  function submitFormHandler(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App">
      <form className="form-container" onSubmit={submitFormHandler}>
        <div className="input-container">
          <input
            onChange={formNameHandler}
            value={formData.name}
            placeholder="Nombre"
            type=""
            className="form-input"
          ></input>
          <input
            onChange={formEmailHandler}
            value={formData.email}
            type="email"
            className="form-input"
            placeholder="Email"
          ></input>
        </div>
        <textarea
          onChange={formTextHandler}
          value={formData.text}
          type="textarea"
          className="input-text"
          placeholder="Mensaje.."
        ></textarea>
        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;

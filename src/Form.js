import React, { useState } from "react";
import Output from "./Output.js";
import "./Form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function getFirstName(event) {
    event.preventDefault();
    setFirstName(event.target.value);
  }

  function getLastName(event) {
    event.preventDefault();
    setLastName(event.target.value);
  }

  function getAge(event) {
    event.preventDefault();
    setAge(event.target.value);
  }

  function getAddress(event) {
    event.preventDefault();
    setAddress(event.target.value);
  }

  function getHobbies(event) {
    event.preventDefault();
    const hobbyValues = [...event.target.selectedOptions].map(
      (opt) => opt.value
    );
    function separateItems(hobby) {
      return hobby + " ";
    }
    setHobbies(hobbyValues.map(separateItems));
  }

  function showOutput(event) {
    event.preventDefault();
    let output = document.getElementById("output");
    output.classList.remove("hidden");
  }

  return (
    <div className="Form">
      <form>
        <div className="firstName">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onInput={getFirstName}
          ></input>
        </div>

        <div>
          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onInput={getLastName}
          ></input>
        </div>

        <div className="age">
          <label for="age">Age</label>
          <input
            type="number"
            name="name"
            className="form-control"
            onInput={getAge}
          ></input>
        </div>

        <div className="address">
          <label for="address">Address</label>
          <textarea onInput={getAddress} className="form-control"></textarea>
        </div>

        <div className="hobbies">
          <label for="hobbies">Hobbies</label>
          <select onInput={getHobbies} className="form-control" multiple>
            <option>Film</option>
            <option>Sports</option>
            <option>Gardening</option>
            <option>Cooking</option>
            <option>Music</option>
            <option>Literature</option>
          </select>
        </div>

        <button className="btn btn-primary" onClick={showOutput}>
          Submit
        </button>
      </form>

      <div className="output hidden" id="output">
        <Output
          firstName={firstName}
          lastName={lastName}
          age={age}
          address={address}
          hobbies={hobbies}
        />
      </div>
    </div>
  );
}

export default Form;

// import { useState } from "react";

// function myFunctionalComponentFunction() {
//   const [input, setInput] = useState(""); // '' is the initial state value
//   return (
//     <div>
//       <label>Please specify:</label>
//       <input value={input} onInput={(e) => setInput(e.target.value)} />
//     </div>
//   );
// }

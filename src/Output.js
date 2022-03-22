import React from "react";

function Output(props) {
  return (
    <div>
      <h3>Name: {props.firstName}</h3>
      <h3>Last name: {props.lastName}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Address: {props.address}</h3>
      <h3>Hobbies: {props.hobbies}</h3>
    </div>
  );
}

export default Output;

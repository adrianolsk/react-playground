import React from "react";
import styled from "styled-components";

const Field = styled.div`
  display: grid;
  padding: 2px;

  label {
    color: #555;
  }
  input {
    height: 25px;
    padding: 10px;
    margin-top: 2px;
    font-size: 25px;
    color: #555;
    border: solid 1px #ccc;
    border-radius: 10px;
  }
`;

const FormField = ({ id, value, label, onChange }) => (
  <Field>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={event => onChange(event)}
    />
  </Field>
);

const CheckboxField = ({ id, value, label, onChange }) => (
  <Field style={{ display: "inline" }}>
    <input
      id={id}
      type="checkbox"
      value={value}
      onChange={event => onChange(event)}
    />
    <label htmlFor={id}>{label}</label>
  </Field>
);

export { FormField, CheckboxField };

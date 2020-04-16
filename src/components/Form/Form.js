import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import "./style.scss";

export default function Form({ options: { required, max, min }, users }) {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmit] = useState(false);
  const onSubmit = (data) => {
    users.push(data);
    window.localStorage.setItem("users", JSON.stringify(users));
    setSubmit(true);
  };

  if (submitted) return <Redirect to="/users" />;

  return (
    <>
      <div className="container">
        <h2>Registeration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} name="form">
          <input
            name="name"
            placeholder="Name"
            ref={register({ required: required.name })}
          />
          {errors.name && <span className="error">This field is required</span>}
          <input
            name="email"
            type="email"
            placeholder="email"
            ref={register({ required: required.email })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <select name="gender" ref={register({ required: required.gender })}>
            <option value="" defaultChecked>
              Select Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.gender && (
            <span className="error">This field is required</span>
          )}
          <input
            name="age"
            type="number"
            placeholder="Age"
            ref={register({
              required: required.age,
              min: min.age,
              max: max.age,
            })}
          />
          {errors.age && (
            <span className="error">
              {required.age ? "Required - " : ""}Min: {min.age} | Max: {max.age}
            </span>
          )}
          <Button color="primary" type="submit">
            Submit
          </Button>{" "}
          <Button color="danger" type="reset">
            Reset
          </Button>{" "}
        </form>
      </div>
    </>
  );
}

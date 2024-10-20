import React from "react";
import { useFormik } from "formik";
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeat: ""
    },
    onSubmit: (values) => {
      alert(`Account Created Succesfully`);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or less";
      }
      if (!values.repeat) {
        errors.repeat = "Required";
      } else if (values.repeat !== values.password) {
        errors.repeat = "Your Password Must be here";
      }
      return errors;
    }
  });
  return (
    <div style={{backgroundColor:"beige"}}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email"> EmailId : </label><br/>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <br/><br/>
          <div>
            <label htmlFor="passowrd">Password :</label> <br/>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <br/><br/>
            <label htmlFor="repeat">Repeat Password : </label> <br/>
          <input
            type="password"
            name="repeat"
            onChange={formik.handleChange}
            value={formik.values.repeat}
          />
          {formik.errors.repeat ? <div>{formik.errors.repeat}</div> : null}
          <br/> <br/>
          <input type="checkbox" /> Remember Me
          <br /> <br/>
          By creating an Account You can Agree our{" "} <br/>
          <a href="#"> Terms & Conditions </a>
          <br /> <br/>
          <button type="submit" 
          style={{backgroundColor:"lightgreen"}}>Signup</button> <br/> <br/>
          <button type="submit" style={{backgroundColor:"red"}}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

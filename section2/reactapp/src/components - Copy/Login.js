import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"

const Login = () => {

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    // resetForm()

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    });

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Success',
        text : 'Loggedin Successfully'
      })
    }else if(response.status === 401){
      Swal.fire({
        icon : 'error',
        title : 'Failed',
        text : 'Loggedin Failed'
      })
    }else{
      console.log('unknown error occured');
    }

  }

  return (
    <div>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input className="form-control" id="email" value={values.email} onChange={handleChange} />

            <label>Password</label>
            <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} />

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Login
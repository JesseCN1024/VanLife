import React from "react";
import { Link, useLoaderData, useActionData, useParams, useNavigate, Form, redirect, useSearchParams } from "react-router-dom";
import { loginUser } from "../api";
import { RestSerializer } from "miragejs";

export function loader({request}){
  return new URL(request.url).searchParams.get('message');
};
export async function action({request}){
  // Access to formData Object
  const formData = await request.formData(); 
  // Use formData obj to access to data from the form
  const email = formData.get("email");
  const pass = formData.get('password');
  // Call loginUser from api.js to check the email and pass above
  let data;
    // Check for the old path name from the request to redirect
  const pathname = new URL(request.url).searchParams.get('oldpath') || '/host';
  try{
    data = await loginUser({email, password: pass});
    localStorage.setItem("isLoggedIn", true);
    window.dispatchEvent(new Event('storage')); // dispatch an event for header to update it's login icon
    // Send user to the Host page
    let res = redirect(pathname);
    res.body = true;
    return res;
  }
  catch(err){
    return err;
  }
  // console.log(data);
  // // and it also requires a returned value
  
  // return null; 
}

export default function Login() {
  let message = useLoaderData();
  const err = useActionData();
  const [typed, setTyped] = React.useState(false);
  const [status, setStatus] = React.useState('idle');
  // When the form is submitted -> set Status to submitting, then 
  // check in the useEffect for changes of the error var -> setStatus to idle
  React.useEffect(() => {
    if(status === 'submitting') setStatus('idle');
  }, [err])

  // function handleSubmit(e) {
  //   setStatus('submitting');
  //   e.preventDefault();
  //   setError(null);
  //   setTimeout(() => {
  //     loginUser(loginFormData)
  //     .then(data => {
  //       // console.log(err);
  //       // Replace = true replace the history location stack with what used to be there
  //       navigate('/host', {replace: true});
  //     })
  //     .catch(err => {
  //       setError(err);
  //       console.log(err);
  //     })
  //     .finally(() => {setStatus('idle');})
  //   }, 1000);
  // }

  // function handleChange(e) {
  //   setTyped(true);
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  return (
    <div className="login__container text-center m-auto mt-5 p-5 rounded-3 position-relative">
      <h1 className="fw-semibold mb-3 fs-2">Sign in to your account</h1>
      {(message && !typed) && <p className="text-center text-danger">You must login first.</p>}
      <Form 
        method="post" 
        className="d-flex flex-column"
        // Make the browser forget the current route from the stacks (means /login)
        replace
        onSubmit={() => setStatus('submitting')}
      >
        <input
          className="form-control mb-1"
          name="email"
          type="email"
          placeholder="Email address"
          // Removing the line 'you must login first'
          onChange={() => setTyped(true)}
        />
        <input
          className="form-control mb-1"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={status==='submitting'} className={`home__content-link mx-auto my-3 ${status==='submitting' && "opacity-75"}`}>
          {status==='submitting' ? "Logging in..." : "Log in"}
        </button>
      </Form>
      {/* Error message */}
      {(err?.message && status==='idle') && <p className="text-center text-danger fw-italic mb-1">{err?.message}</p>}
      <p className="text-center">
        Don't have an account? 
        <Link className="text-decoration-none fw-bold"> Create one now</Link>
      </p>
    </div>
  );
}

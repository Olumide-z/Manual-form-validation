import { useRef, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      errorMessage: 'Username should be 3-16 characters and shouldn"t include any special character',
      name: 'username',
      placeholder:'Username',
      label: 'Username',
      type: 'text',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$'
    },
    {
      id: 2,
      errorMessage: 'It should be a valid email address!',
      name: 'email',
      placeholder:'Email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      id: 3,
      name: 'birthday',
      placeholder:'Birthday',
      label: 'Birthday',
      type: 'date',
    },
    {
      id: 4,
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character',
      name: 'password',
      placeholder:'Password',
      label: 'Password',
      type: 'password',
      required: true,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
    },
    {
      id: 5,
      errorMessage: 'Passwords do not match',
      name: 'confirmPassword',
      placeholder:'confirmPassword',
      label: 'Confirm Password',
      type: 'text',
      required: true,
      pattern: values.password
    },
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={onChange} value={values[input.name]}/>
        ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

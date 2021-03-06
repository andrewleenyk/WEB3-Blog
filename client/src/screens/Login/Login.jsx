import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


export default function Login(props) {
const [formData, setFormData] = useState({
    username: '',
    password: '',
});
const { username, password } = formData;
const { handleLogin } = props;

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
};

return (
    <div className="login-box">
            <h2 className="form-title">Login</h2>
        <form >
        <div className="user-box">

            <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            />
                    <label id='login-label'>
            Username:
        </label>
        </div>
        <div className="user-box">
            <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />
                    <label id='login-label'>
            Password:
        </label>
        </div>
        <Link to='/profile' onClick={(e)=> {
        e.preventDefault();
        handleLogin(formData);
        }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Link>
        </form>
    </div>
    
);
}

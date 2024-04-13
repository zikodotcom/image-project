import React, { useState } from 'react';
import { axiosClient } from './axiosClient';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './signup.css';
import imgsrc from './signupPicture.jpg';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosClient.get('sanctum/csrf-cookie');
            const res = await axiosClient.post('/login', formData);
            if (res.status === 204) {
                navigate('/');
            }
        } catch (err) {
          console.log(err)
            setError(err.response.data.message);
        }
    };

    return (
        <div className="w-[70%] m-auto flex flex-col justify-center items-center h-[100vh] lg:flex-row">
            <div className="text-section flex justify-center lg:w-1/2">
                <img src={imgsrc} alt="Signup" className='w-full' />
            </div>
            <div className="form-section lg:w-1/2 p-4">
                <h1 className="text-zinc-950 text-center my-10 font-medium text-2xl">Log In with Us</h1>
                {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                <form className="form" onSubmit={onSubmit}>
                    <div className="input-group">
                        <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>
                    <Link to='/register' className="text-center mb-4">
                        Already have not an account? <span style={{ color: '#1cbb6b', textDecoration:'underline black solid 1px' }}>Sign Up Here</span>
                    </Link>
                    <button type="submit" className="button m-12">Log In</button>
                </form>
            </div>
        </div>
    );
}

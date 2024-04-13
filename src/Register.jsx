import React, { useState, useEffect } from 'react';
import { axiosClient } from './axiosClient';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './registre.css';
import imgsrc from './signupPicture.jpg';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (successMessage) {
            navigate('/');
        }
    }, [successMessage, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/register', formData);
            console.log(response.data);
            setSuccessMessage(response.data.success);
            setErrorMessage('');
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            navigate('/')
        } catch (error) {
            console.error('Error during registration:', error.response.data);
            setErrorMessage(error.response.data.message || 'An error occurred');
            setSuccessMessage('');
        }
    };

    return (
        <div className="container flex flex-col justify-center items-center lg:flex-row">
            <div className="text-section lg:w-1/2">
                <img src={imgsrc} alt="Signup" />
            </div>
            <div className="form-section lg:w-1/2 p-4">
                <h1 className="text-zinc-950 text-center my-10 font-medium text-2xl">Create an Account with Us </h1>
                {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input id="name" name="name" type="text" autoComplete="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div >
                    <Link to='/' className="text-center mb-4">
                        Already have an account? <span style={{ color: '#1cbb6b', textDecoration: 'underline black solid 1px' }}>Login Here</span>
                    </Link>
                    <button type="submit" className="button m-12">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

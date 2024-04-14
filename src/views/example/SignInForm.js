import React, { useState } from 'react';

const SignInForm = () => {
    // State variables to store email, password, and validation errors
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        let errorsObj = {};
        if (!email) {
            errorsObj.email = 'Email is required';
        }
        if (!password) {
            errorsObj.password = 'Password is required';
        }

        if (Object.keys(errorsObj).length === 0) {
            // Form is valid, you can submit it
            console.log('Submitting:', { email, password });
        } else {
            // Form is invalid, set errors
            setErrors(errorsObj);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInForm;

import React, { useState } from 'react';
import axios from 'axios';

const GetUser = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/users/${username}`);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <button type="submit">Get User</button>
            </form>
            {user && (
                <div>
                    <h2>{user.username}</h2>
                    <p>Password: {user.password}</p>
                </div>
            )}
        </div>
    );
};

export default GetUser;

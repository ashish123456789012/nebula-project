
const API_URL = 'http://localhost:5000';


const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        const data = await response.json();
        console.log('User registered:', data);
        alert('User registered successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Registration failed: ' + error.message);
    }
};

const loginUser = async (loginData) => {
    try {
        const response = await fetch(`${API_URL}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        
        if (!response.ok) {
            throw new Error('Login failed');
        }
        
        const data = await response.json();
        console.log('User signed in:', data);
        alert('User signed in successfully!');
    
        localStorage.setItem('token', data.token);
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed: ' + error.message);
    }
};

const sendMessage = async (email, message) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('You must be logged in to send a message');
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/api/users/${email}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ message }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        
        const data = await response.json();
        console.log('Message sent:', data);
        alert('Message sent successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message: ' + error.message);
    }
};
import React, { useState } from 'react';
import axios from 'axios';

const StorePortfolio = () => {
    const [username, setUsername] = useState('');
    const [artPieces, setArtPieces] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const artPiecesArray = artPieces.split(',').map(piece => piece.trim());
            await axios.post('http://localhost:5000/api/portfolios', { username, art_pieces: artPiecesArray });
            alert('Portfolio stored successfully');
        } catch (error) {
            console.error('Error storing portfolio:', error);
            alert('Failed to store portfolio');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <textarea 
                placeholder="Art Pieces (comma separated)" 
                value={artPieces} 
                onChange={(e) => setArtPieces(e.target.value)} 
            />
            <button type="submit">Store Portfolio</button>
        </form>
    );
};

export default StorePortfolio;

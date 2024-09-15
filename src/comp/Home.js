import React, { useState } from 'react';
import './Home.css';

const DynamicPortfolioGenerator = () => {
  const [styleDescription, setStyleDescription] = useState('');
  const [portfolioItems, setPortfolioItems] = useState([]);

  const handleGeneratePortfolio = () => {
    const generatedPortfolio = [
      'Art Piece 1',
      'Art Piece 2',
      'Art Piece 3',
    ];

    setPortfolioItems(generatedPortfolio);
  };

  return (
    <div className="container">
      <h1>Dynamic Art Portfolio Generator</h1>
      <div className="form-container">
        <label htmlFor="style-description">Enter your style description:</label>
        <textarea
          id="style-description"
          placeholder="Describe your art style and preferred themes..."
          value={styleDescription}
          onChange={(e) => setStyleDescription(e.target.value)}
        ></textarea>

        <button id="generate-btn" onClick={handleGeneratePortfolio}>
          Generate Portfolio
        </button>
      </div>

      <div id="portfolio-section" className="portfolio-section">
        <h2>Generated Portfolio</h2>
        <div id="portfolio-content">
          {portfolioItems.length > 0 ? (
            portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-item">
                {item}
              </div>
            ))
          ) : (
            <p>No portfolio items generated yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicPortfolioGenerator;

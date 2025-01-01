import React, { useEffect, useState } from 'react';
import client from '../utils/graphqlClient';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      const query = `
        query {
          portfolios {
            id
            title
            description
            image
            
          }
        }
      `;
      const data = await client.request(query);
      setPortfolios(data.portfolios);
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="portfolio">
      <h2>OUR PORTFOLIOS</h2>
      <div className="portfolio-list">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="portfolio-item">
            <img src={portfolio.image} alt={portfolio.title} />
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

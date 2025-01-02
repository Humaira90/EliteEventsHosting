import React, { useState, useEffect } from "react";
import axios from "axios";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://eliteeventsbackend.onrender.com/api/v1/packages")
      .then((response) => {
        console.log("Packages fetched:", response.data);
        if (Array.isArray(response.data)) {
          setPackages(response.data);
        } else {
          setError("The response is not in the expected format.");
        }
      })
      .catch((err) => {
        console.error("Error fetching packages:", err);
        setError("Failed to fetch packages.");
      });
  }, []);

  return (
    <section className="packages-section">

    <h2>OUR PACKAGES</h2>
   
    <div className="package-grid">
      {packages.length > 0 ? (
        packages.map((pkg) => (
          <div className="package-card" key={pkg._id}>
       
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <ul>
              {pkg.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
           
           
          </div>
        ))
      ) : (
        <p>No packages available right now.</p>
      )}
    </div>
  </section>
  
  );
};

export default Packages;

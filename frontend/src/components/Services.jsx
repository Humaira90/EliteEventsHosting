import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/corporate.webp",
      title: "Corporate Events",
    },
    {
      id: 2,
      url: "/themed.webp",
      title: "Themed Parties",
    },
    {
      id: 3,
      url: "/graduation.webp",
      title: "Graduation Parties",
    },
    {
      id: 4,
      url: "/Bride.webp",
      title: "Bridal Shower",
    },
    {
      id: 5,
      url: "/proposal.webp",
      title: "Proposal",
    },
    {
      id: 6,
      url: "/wedding.webp",
      title: "Wedding",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

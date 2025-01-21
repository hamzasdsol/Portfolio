import React from "react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et.",
      isActive: false,
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et.",
      isActive: false,
    },
    {
      number: "03",
      title: "Logo Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et.",
      isActive: false,
    },
    {
      number: "04",
      title: "SEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et.",
      isActive: true,
    },
  ];

  return (
    <div className=" flex items-center justify-center px-4 md:px-10 mt-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-6 rounded-lg "
          >
            <div>
              <p className="text-gray-500 text-2xl font-bold mb-2">
                {service.number}
              </p>
              <h3
                className="text-3xl font-bold text-white" >
                {service.title}
              </h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

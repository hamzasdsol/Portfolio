import React, { useState } from "react";

const WhyHireMe = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  const Content = () => {
    switch (activeTab) {
      case "Experience":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2022 - Present</p>
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <p>Tech Solutions Inc.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">Summer 2021</p>
              <h3 className="text-xl font-bold">Front-End Developer Intern</h3>
              <p>Web Design Studio</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2020 - 2021</p>
              <h3 className="text-xl font-bold">Freelance Web Developer</h3>
              <p>E-commerce Startup</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2019 - 2020</p>
              <h3 className="text-xl font-bold">Teaching Assistant</h3>
              <p>Tech Academy</p>
            </div>
          </div>
        );
      case "Education":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2014 - 2018</p>
              <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
              <p>XYZ University</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2016 - 2018</p>
              <h3 className="text-xl font-bold">High School Diploma</h3>
              <p>ABC High School</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2016 - 2018</p>
              <h3 className="text-xl font-bold">High School Diploma</h3>
              <p>ABC High School</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-[#00ff99]">2016 - 2018</p>
              <h3 className="text-xl font-bold">High School Diploma</h3>
              <p>ABC High School</p>
            </div>
            
          </div>
        );
      case "Skills":
        return (
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside text-gray-300">
      <li>React.js</li>
      <li>Node.js</li>
      <li>Tailwind CSS</li>
      <li>MongoDB</li>
      <li>TypeScript</li>
      <li>Node.js</li>
      <li>Tailwind CSS</li>
      <li>MongoDB</li>
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
      <li>MongoDB</li>
      <li>TypeScript</li>
    </ul>
        );
      case "About Me":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">

              <p>
                <span className="font-bold">Name:</span> Hamza
              </p>
              <p>
                <span className="font-bold">Experience:</span> 10+ Years
              </p>
              <p>
                <span className="font-bold">Nationality:</span> American
              </p>
              <p>
                <span className="font-bold">Freelance:</span> Available
              </p>
            </div>
            <div  className="bg-gray-800 p-4 rounded-lg">
              <p>
                <span className="font-bold">Phone:</span> (+40) 321 654 876
              </p>
              <p>
                <span className="font-bold">Skype:</span> Hamza
              </p>
              <p>
                <span className="font-bold">Email:</span> hamza@gmail.com
              </p>
              <p>
                <span className="font-bold">Languages:</span> English, Spanish
              </p>
            </div>
            <div  className="bg-gray-800 p-4 rounded-lg">
              <p>
                <span className="font-bold">Phone:</span> (+40) 321 654 876
              </p>
              <p>
                <span className="font-bold">Skype:</span> Hamza
              </p>
              <p>
                <span className="font-bold">Email:</span> hamza@gmail.com
              </p>
              <p>
                <span className="font-bold">Languages:</span> English, Spanish
              </p>
            </div><div  className="bg-gray-800 p-4 rounded-lg">
              <p>
                <span className="font-bold">Phone:</span> (+40) 321 654 876
              </p>
              <p>
                <span className="font-bold">Skype:</span> Hamza
              </p>
              <p>
                <span className="font-bold">Email:</span> hamza@gmail.com
              </p>
              <p>
                <span className="font-bold">Languages:</span> English, Spanish
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-16 flex items-center justify-center text-gray-300 p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#00ff99]">Why hire me?</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Scelerisque consequat, faucibus et, et.
          </p>
          <div className="space-y-4">
            {["Experience", "Education", "Skills", "About Me"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-[#00ff99] text-gray-900"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">{activeTab}</h3>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Scelerisque consequat, faucibus et, et.
          </p>
          {Content()}
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;

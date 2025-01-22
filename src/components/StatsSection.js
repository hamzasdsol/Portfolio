import React from "react";
import CountUp from "react-countup";

function StatsSection() {
  const stats = [
    { value: 10, label: "Years of experience" },
    { value: 28, label: "Projects completed" },
    { value:16, label: "Technologies mastered" },
    { value: 400, label: "Code commits" },
  ];

  return (
    <section className=" text-white py-12 mt-0">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-4xl font-bold text-[#00ff99]">
              <CountUp end={stat.value} duration={3} />
            </h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;

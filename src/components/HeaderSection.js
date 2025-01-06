import React from "react";
import Profile from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function HeaderSection() {
    return (
        <section className="text-white flex flex-col-reverse md:flex-row justify-center sm:px-8 lg:pl-40 overflow-hidden">
            <div className="text-center md:text-left md:w-1/2 space-y-4 mt-4">
                <h2 className="text-sm uppercase tracking-widest text-gray-200">
                    Software Developer
                </h2>
                <h1 className="text-4xl md:text-7xl font-bold">
                    Hello I’m <span className="text-[#00ff99]">Hamza</span>
                </h1>
                <p className="text-gray-200">
                    I excel at crafting elegant digital experiences and I am proficient
                    in various programming languages and technologies.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <button className="bg-[#00ff99] text-black px-6 py-2 rounded-3xl hover:bg-[#00e68a]">
                        Download CV
                    </button>
                    <div className="flex gap-4 text-[#00ff99] h-16">
                        <a href="#linkedin" className="hover:text-white w-10 h-10 flex justify-center items-center rounded-full bg-gray-800">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                        <a href="#github" className="hover:text-white w-10 h-10 flex justify-center items-center rounded-full bg-gray-800">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="relative md:w-1/2 flex justify-center mt-8 md:mb-0">
                <img
                    src={Profile}
                    alt="Profile"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
                />
            </div>
        </section>
    );
}

export default HeaderSection;
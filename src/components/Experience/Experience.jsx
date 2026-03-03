// src/components/Experience/Experience.jsx
import React from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Web Developer",
    company: "Aabhyasa Technologies Pvt. Ltd.",
    date: "Nov 2021 – Nov 2025 | Varanasi, India",
    desc: [
      "Architected and led enterprise-scale web and mobile applications using React.js, Next.js, Node.js, and PHP.",
      "Developed automation workflows in PHP that reduced document processing time by 50%.",
      "Implemented secure OAuth integrations with Gmail, Microsoft, and Google Drive APIs.",
      "Directed project timelines and guided cross-functional teams, achieving 100% compliance with security standards.",
      "Deployed multi-tenant SaaS applications optimized for performance and cost efficiency on AWS.",
      "Designed and enforced coding standards, CI/CD pipelines, and automated testing practices.",
      "Mentored junior developers in MERN stack best practices."
    ],
    skills: ["React.js", "Next.js", "Node.js", "PHP", "AWS", "OAuth", "CI/CD", "Team Leadership"]
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Pride Solutions",
    date: "Jun 2020 – Oct 2021 | Prayagraj, India",
    desc: [
      "Delivered 15+ production applications across MERN and PHP stacks.",
      "Optimized database schemas and queries, improving response times by 40%.",
      "Developed RESTful APIs with JWT authentication and Laravel Passport.",
      "Deployed PWA and native mobile apps with 10,000+ active users.",
      "Implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 30%.",
      "Key Contribution: Developed and deployed critical COVID-19 Government Projects."
    ],
    skills: ["React.js", "Node.js", "PHP", "MongoDB", "JWT", "Azure DevOps", "PWA"]
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Edunext Technologies Pvt. Ltd.",
    date: "Jun 2019 – Jun 2020 | Noida, India",
     desc: [
      "Developed scalable ERP portals and RESTful APIs using core PHP and MySQL.",
      "Designed modules for admission, fee management, attendance, payroll, and reporting.",
      "Built responsive dashboards with role-based access control.",
      "Introduced automated testing with PHPUnit, reducing bugs by 35%.",
      "Integrated real-time notifications using PHP and Socket.io.",
      "Applied security best practices including SQL injection prevention and secure authentication."
    ],
    skills: ["PHP", "MySQL", "ERP Systems", "RESTful APIs", "Socket.io", "Automated Testing"]
  },
  {
    id: 4,
    role: "Software Developer",
    company: "Vapsoft Technologies Pvt. Ltd.",
    date: "Oct 2015 – May 2019 | Prayagraj, India",
    desc: [
      "Built and maintained dynamic web applications using PHP and MySQL.",
      "Designed normalized database schemas and optimized queries.",
      "Developed custom PHP modules for authentication and role-based access control.",
      "Integrated third-party APIs (payment gateways, SMS/email services).",
      "Enhanced legacy systems by refactoring code and reducing technical debt.",
      "Applied security best practices to safeguard sensitive healthcare data."
    ],
    skills: ["PHP", "MySQL", "Authentication", "API Integration", "Security", "Legacy System Refactoring"]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-xl p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>
              {Array.isArray(experience.desc) ? (
                <ul className="list-disc list-inside space-y-1 mt-4 text-gray-400">
                  {experience.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-gray-400">{experience.desc}</p>
              )}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

/** @format */

import React, { useState } from "react"
import type { CVData, TimelineItemData, ExperienceItemData } from "./types"

// --- Reusable Helper Icons ---

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className || "w-5 h-5 mr-2"}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
)

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className || "w-5 h-5 mr-2"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className || "w-5 h-5 mr-2"}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
)

const ChevronIcon: React.FC<{ isExpanded: boolean; className?: string }> = ({ isExpanded, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isExpanded ? "rotate-180" : ""} ${className || ""}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

// --- CV Data ---
const cvData: CVData = {
  name: "Ngan Nguyen",
  nickname: "(Emma)",
  title: "Business Analyst",
  profileImageUrl: "./avatar.jpg", // Actual image from PDF
  contact: {
    email: "thanhhngan97@gmail.com",
    location: "Ho Chi Minh City, Viet Nam",
    phone: "+84 968 764 900",
  },
  background:
    "An experienced and creative business analyst with 5 years of experience in IT projects across various domains and industries. A fast learner and thinker with high self-discipline and attention to detail. Possesses a strong understanding of IT project management and business solutions. Proficient in time management, strategic product backlog, sprint planning, and task/project management.",
  professionalSkills: [
    { name: "Stakeholder Management" },
    { name: "Document Creation" },
    { name: "Wireframe and Mockup Design" },
    { name: "Test Case Development" },
    { name: "Mentoring Experience" },
  ],
  technicalSkills: [
    { category: "Modeling Language & Diagramming Tools", details: "BPMN, UML, Microsoft Visio, Lucid Chart, Figma, Axure." },
    { category: "Project Management Software", details: "Jira Atlassian, Redmine Org, GitHub Enterprise Edition, GitLab Enterprise Edition, Microsoft Project." },
    { category: "Other Skills", details: "Computer Proficiency, Presentation, Trainer, Googling, Communication, Marketing." },
    {
      category: "Methodologies",
      details:
        "Fully understand and participate in software development and execution stage of the project life cycle with predefined methods: Agile/Scrum, Waterfall per requirements of Project Manager or Client.",
    },
  ],
  provenSuccessful: [
    { text: "Proven Successful Products: HROS - Paxanimi.ai & Expenso App - Paxanimi.ai" },
    { text: "Proven Top Outsourcing Clients: One Business Connection - OBC - KẾT NỐI DOANH NGHIỆP VIỆT NAM (obcbiz.com)" },
    { text: "Proven Top SAP - ERP: Implement SAP ERP system for Long Thanh Plastics" },
    { text: "Proven Top SAP - ERP: Implement SAP ERP system for Boston Pharma" },
  ],
  education: [
    { degree: "Bachelor of Business Administration", majorAndInstitution: "Major in Information System Management, Van Lang University", year: "2019" },
    { degree: "Certification of User Experience", majorAndInstitution: "in UXFoundation", year: "2023" },
  ],
  timeline: [
    { dateRange: "01/2019 - 04/2021", role: "SAP Consultant", company: "FPT Information System" },
    { dateRange: "05/2021 - 10/2022", role: "Business Analyst", company: "Renovation Technology" },
    { dateRange: "11/2022 - 08/2024", role: "Business Analyst", company: "Terralogic" },
    { dateRange: "09/2024 - 03/2025", role: "Business Analyst", company: "New Ocean IS" },
  ],
  professionalExperience: [
    {
      id: "A",
      title: "TRACK & TRACE SYSTEM (INDUSTRY)",
      roleAndCompany: "Business Analyst - NOIS",
      responsibilities: [
        "Documentation: Analyzing and gathering business requirements for Track & Trace products : Track & Trace in Processing, Track & Trace in Packaging, Distribution Management, Customer Program",
        "User Experience (UX): Significantly contributing to creating user-friendly Track & Trace products with intuitive interfaces and satisfying user experiences.",
        "Developing Product Requirement Documents (PRDs), User Stories, Functional Specifications, Wireframes, Mock-ups, and Prototypes to visualize ideas and communicate requirements to the development team.",
        "Define functional requirements and non-functional requirements.",
        "Assuming the Product Owner role, representing the voice of the customer and end-users.",
        "Collaborating closely with the development team to ensure products are built according to requirements and achieve high quality.",
        "Participating in product development stages from ideation, design, development, testing, to deployment.",
        "System Integration: Working closely to integrate Track & Trace solutions with automation systems and Machine Vision technology in manufacturing and packaging processes.",
      ],
      collaboration: [
        "Working independently and collaborating closely with 5 Software Engineers, as well as Automation and Machine Vision teams to ensure seamless integration of technological solutions.",
        "Supporting the internal team in synchronizing work, sharing knowledge, and significantly contributing to brainstorming sessions for optimal solutions.",
      ],
      outputsAndAchievements: [
        "Track & Trace in Processing: Developed modules for batch management, raw material traceability, and production process reporting, successfully integrated with automated production line systems for automatic data collection.",
        "Track & Trace in Packaging: Implemented product barcode scanning feature, packaging information management, integrated quality inspection system, applied Machine Vision technology to inspect labels and product information on packaging.",
        "Distribution Management: Built order tracking system, warehouse management, and optimized delivery routes.",
        "Customer Program: Developed customer portal, purchased product tracking feature, and collected customer feedback.",
      ],
      technologies: "Google Space, diagram.net, Google Sheet, Google Doc, Figma",
    },
    {
      id: "B",
      title: "HUMAN RESOURCE MANAMENT SYSTEM",
      roleAndCompany: "Business Analyst - Terralogic",
      responsibilities: [
        "Documentation: Product Requirement Document, Workflow, User Guide, User Story, Functional Specification Document and other technical and non-technical documents related to the Project and Products",
        "Restructuring and re-define the process from As-Is into To-Be for improvement in both User Experience and System Performance: Onboarding, Offboarding, Employee Management, Viet Nam Payroll, Dubai Payroll, Ticket Management, Timesheet, Time off, Admin Portal, Super Admin Portal - Tenant Management",
        "Define functional requirements and non-functional requirements.",
        "Create wireframes, mock-ups, and prototypes to visualize ideas.",
        "Greatly contribute to the Project as Main Business Analyst and produce a user-friendly, satisfied UX and high performance HROS system.",
      ],
      collaboration: [
        "Work independently and individually with 18 Software Engineers and 3 UI/UX Designer",
        "Collaborate with product owner, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project.",
        "Hosting internal team sync up, greatly and significantly contribute to the solutions and brainstorming session of the team.",
      ],
      outputsAndAchievements: [
        "Successfully currently has 1000 and more users and keep increasing application with the business procedure.",
        "Achievements in the product from 2022 till now: released more than 20 services within 15 modules, including 1 web application and 2 mobile apps.",
        "Preparing to launch the VN market by September 2024, signed 3 customers for the trials.",
      ],
      technologies: "Google Space, diagram.net, Google Sheet, Google Doc, Figma",
    },
    {
      id: "C",
      title: "EXPENSE MANGEMENT SYSTEM",
      roleAndCompany: "Business Analyst - Terralogic",
      responsibilities: [
        "Documentation: Workflow, User Guide, User Story",
        "Define functional requirements and non-functional requirements",
        "Restructuring and re-define the process from As-Is into To-Be for improvement in both User Experience and System Performance",
        "Create wireframes, mock-ups, and prototypes to visualize ideas.",
      ],
      collaboration: [
        "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer",
        "Collaborate with product owner, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project.",
      ],
      outputsAndAchievements: ["Product got launched successfully and on time as planned", "Currently has > 200 active end users and keep increasing"],
      technologies: "Google Space, diagram.net, Google Sheet, Google Doc, Jira Atlassian, Figma",
    },
    {
      id: "D",
      title: "FOOD & BEVARAGE MANAGEMENT PLATFORM",
      roleAndCompany: "Business Analyst - Renovation Technology",
      responsibilities: [
        "Got requirements, analyzed the business restaurant management process, managed staff and gave solutions to complete the F&B management platform.",
        "Analyzed, created reports in F&B: Revenue Report, Stock Inventory, Report, Product Item Report, Internal communication, Incident Report and Maintenance Management, Staff Management Report.",
        "Created User Story, user guide, wireframe and functions F&B management platform.",
        "Created Side MAP, User Case, Test Case.",
        "Integration Test between F&B management platform and SPOS System, FAST System.",
        "Test UX/UI, test Postman.",
        "Training, supporting users and fixing issues in the implementation process.",
      ],
      collaboration: [
        "Collect Customer Requirement",
        "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project.",
      ],
      outputsAndAchievements: ["Product go live on time as planned by timeline", "Web Application and Mobile Application version"],
      technologies: "Postman, SPOS System, FAST System, Redmide System, Axure RP, Visio",
    },
    {
      id: "E",
      title: "ONE BUSINESS CONNECTION NETWORK",
      roleAndCompany: "Business Analyst - Renovation Technology",
      responsibilities: [
        "Got requirements, analyzed business process Connect business, Register from free member to become OBC's member, Payment process flow and other processes.",
        "Create User Story, Wireframe OBC APP, Functions and USER GUIDE – APP, WEB.",
        "Tested UX/UI, processing flow, APP and WEB integration.",
        "Training, supported users and fix issues in implement process.",
      ],
      collaboration: ["Collect Customer Requirements", "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer"],
      outputsAndAchievements: ["Product got launched successfully and on time as planned", "Web Application and Mobile Application"],
      technologies: "Redmide System, Axure RP, Visio",
    },
    {
      id: "F",
      title: "SALES & DISTRIBUTION MODULE - SAP ERP SYSTEM",
      roleAndCompany: "SAP Consultant - FPT Information System",
      responsibilities: [
        "Collected and analyzed customer requirements.",
        "Created future business processes.",
        "Configuration System/ Module function to meet client's requirement.",
        "Created test case, test data, test report.",
        "Created and updated functional specifications, user guide, authorization documents.",
        "Tested functional specifications.",
        "Created templates and tools to upload data.",
        "Transfer data from legacy system to SAP system.",
        "Created and updated authorization documentation and managed user authorization.",
        "Overall knowledge in other SAP modules.",
        "Training, supporting users and fixing issues in the implementation process.",
        "Integration test between APP and SAP.",
      ],
      collaboration: [
        "Collaborate with customer, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives",
        "Work independently and individually with 7-10 Software Engineers",
      ],
      outputsAndAchievements: [
        "Success delivered a SAP ERP System as a production.",
        "Continuous monitoring and maintaining the delivered application after production.",
        "In-depth understanding and analysis of the SAP ERP process and digitalize the procedure into an application.",
      ],
      technologies: "Visio, Jira, SAP",
    },
  ],
}

// --- Header Component ---
const HeaderDisplay: React.FC<{ data: CVData }> = ({ data }) => (
  <header className="relative pt-6 sm:pt-8 px-4 sm:px-8 pb-8 mb-6 text-custom-dark-gray">
    <div
      className="absolute top-0 left-0 right-0 h-[240px] sm:h-[200px] md:h-[220px] bg-gray-100" // Adjusted height for different screens
      style={{
        clipPath: "ellipse(150% 80% at 50% -10%)", // A gentle downward curve, adjusted for subtlety
      }}
    ></div>
    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-6 sm:mb-0">
        <div className="w-32 h-32 sm:w-36 sm:h-36 mr-0 sm:mr-6 border-4 border-white shadow-xl rounded-full overflow-hidden object-cover">
          <img src={data.profileImageUrl} alt={data.name} className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 sm:mt-0 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">{data.name}</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700">{data.nickname}</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-1">{data.title}</p>
        </div>
      </div>
      <div className="sm:text-right space-y-1.5 text-xs sm:text-sm text-gray-700 w-full sm:w-auto">
        <a href={`mailto:${data.contact.email}`} className="flex items-center sm:justify-end hover:text-custom-teal transition-colors">
          <EmailIcon className="w-4 h-4 mr-2 shrink-0" /> {data.contact.email}
        </a>
        <div className="flex items-center sm:justify-end">
          <LocationIcon className="w-4 h-4 mr-2 shrink-0" /> {data.contact.location}
        </div>
        <div className="flex items-center sm:justify-end">
          <PhoneIcon className="w-4 h-4 mr-2 shrink-0" /> {data.contact.phone}
        </div>
      </div>
    </div>
  </header>
)

// --- Section Component ---
const Section: React.FC<{ title: string; children: React.ReactNode; className?: string; titleClassName?: string }> = ({ title, children, className = "", titleClassName = "" }) => (
  <section className={`mb-6 sm:mb-8 ${className}`}>
    <h2 className={`text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4 sm:mb-5 ${titleClassName}`}>{title}</h2>
    {children}
  </section>
)

// --- Timeline Section ---
const TimelineDisplaySection: React.FC<{ title: string; items: TimelineItemData[] }> = ({ title, items }) => (
  <Section title={title} className="py-4">
    <div className="w-full mt-10 mb-4 sm:mt-12 sm:mb-8 px-4 sm:px-6 md:px-8">
      {/* Text content row */}
      <div className="flex justify-between text-center mb-3 sm:mb-4">
        {items.map((item, index) => (
          <div key={`text-${index}`} className="flex-1 px-1 min-w-[100px] sm:min-w-[120px]">
            <div className="w-full">
              <p className="text-[11px] sm:text-xs font-medium text-custom-teal">{item.dateRange}</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 my-0.5">{item.role}</p>
              <p className="text-[11px] sm:text-xs text-gray-600">{item.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Line and Dots row */}
      <div className="relative h-4">
        {" "}
        {/* Height to contain the dots */}
        {/* The main horizontal line, vertically centered. Stretches full width of its parent (which is padded). */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-custom-teal transform -translate-y-1/2"></div>
        {/* Dots container. Dots are spaced out by justify-between. */}
        <div className="flex justify-between h-full">
          {items.map((item, index) => (
            <div key={`dot-container-${index}`} className="relative flex-1 flex justify-center items-center">
              {/* Dot, centered in its flex-1 container. */}
              <div className="w-4 h-4 bg-custom-teal rounded-full border-2 border-white shadow-md z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
)

// --- ExperienceItem Component ---
const ExperienceItem: React.FC<{ item: ExperienceItemData; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="mb-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`experience-${item.id}`}
        className="flex justify-between items-center w-full text-left py-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-teal focus-visible:ring-opacity-50 rounded-md"
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-custom-dark-gray text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm mr-3 sm:mr-4 group-hover:bg-custom-teal transition-colors">
            {item.id}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-custom-dark-gray group-hover:text-custom-teal transition-colors">{item.title}</h3>
        </div>
        <div className="flex items-center">
          <span className="text-xs sm:text-sm text-gray-600 mr-2 sm:mr-4 text-right hidden md:block">{item.roleAndCompany}</span>
          <ChevronIcon isExpanded={isOpen} className="text-gray-500 group-hover:text-custom-teal transition-colors w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
      {/* Role and company for mobile, visible when header is not fully detailed */}
      <p className="md:hidden text-xs text-gray-600 mt-1 ml-10 sm:ml-12">{item.roleAndCompany}</p>

      <div
        id={`experience-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100 mt-2 sm:mt-3" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-10 sm:pl-12 pr-2 sm:pr-4 py-2 text-gray-700 space-y-3 text-sm leading-relaxed">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1 marker:text-custom-teal">
              {item.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Collaboration:</h4>
            <ul className="list-disc list-inside space-y-1 marker:text-custom-teal">
              {item.collaboration.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Outputs and achievements:</h4>
            <ul className="list-disc list-inside space-y-1 marker:text-custom-teal">
              {item.outputsAndAchievements.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Technologies & Tools:</h4>
            <p>{item.technologies}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Main App Component ---
function App() {
  const [openExperienceId, setOpenExperienceId] = useState<string | null>(cvData.professionalExperience.length > 0 ? cvData.professionalExperience[0].id : null) // Open first item by default

  const toggleExperience = (id: string) => {
    setOpenExperienceId(openExperienceId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-8 font-sans">
      <div className="container mx-auto max-w-4xl bg-white shadow-2xl rounded-lg p-4 sm:p-8 md:p-10">
        <HeaderDisplay data={cvData} />

        <main className="px-1 sm:px-2 md:px-4">
          <Section title="Background">
            <p className="text-custom-text text-sm sm:text-base leading-relaxed sm:leading-loose">{cvData.background}</p>
          </Section>

          <Section title="Professional skills">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cvData.professionalSkills.map((skill) => (
                <span key={skill.name} className="bg-gray-200 text-custom-dark-gray px-3 py-1.5 text-xs sm:text-sm rounded-md border border-gray-300 shadow-sm">
                  {skill.name}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Technical skills">
            <ul className="space-y-2 text-custom-text text-sm sm:text-base list-disc list-inside marker:text-custom-teal leading-relaxed">
              {cvData.technicalSkills.map((skill) => (
                <li key={skill.category}>
                  <strong className="font-semibold text-gray-800">{skill.category}:</strong> {skill.details}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Proven Successful">
            <ul className="list-disc list-inside space-y-1.5 text-custom-text text-sm sm:text-base marker:text-custom-teal leading-relaxed">
              {cvData.provenSuccessful.map((item) => (
                <li key={item.text}>{item.text}</li>
              ))}
            </ul>
          </Section>

          <Section title="Education">
            <ul className="space-y-2 text-custom-text text-sm sm:text-base list-disc list-inside marker:text-custom-teal leading-relaxed">
              {cvData.education.map((edu) => (
                <li key={edu.degree}>
                  <strong className="font-semibold text-gray-800">{edu.degree}</strong> {edu.majorAndInstitution} ({edu.year}).
                </li>
              ))}
            </ul>
          </Section>

          <TimelineDisplaySection title="Timeline Business Analyst" items={cvData.timeline} />

          <Section title="Professional experience" className="mt-8 sm:mt-10">
            {cvData.professionalExperience.map((item) => (
              <ExperienceItem key={item.id} item={item} isOpen={openExperienceId === item.id} onToggle={() => toggleExperience(item.id)} />
            ))}
          </Section>
        </main>

        <footer className="text-center mt-10 sm:mt-12 py-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm sm:text-base">Thanks for watching</p>
        </footer>
      </div>
    </div>
  )
}

export default App

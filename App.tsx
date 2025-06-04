import React from 'react';
import { CvData } from './types'; // TechnicalSkillCategory removed as it's part of CvData
import Header from './components/Header';
import Section from './components/Section';
import TimelineComponent from './components/TimelineComponent';
import ExperienceCard from './components/ExperienceCard';
import SkillTag from './components/SkillTag';
import EducationItem from './components/EducationItem';
import Footer from './components/Footer';
// Icons are mostly handled within components or directly as text/SVG for simplicity matching PDF

const cvData: CvData = {
  name: "Ngan Nguyen",
  nickname: "Emma",
  title: "Business Analyst",
  profileImageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9uㅌFamilyPSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjgwIiBmaWxsPSIjY2NjIj5QPC90ZXh0Pjwvc3ZnPg==", // Generic placeholder to mimic a profile image
  contact: {
    email: "thanhhngan97@gmail.com",
    phone: "+84 968 764 900",
    location: "Ho Chi Minh City, Viet Nam"
  },
  background: "An experienced and creative business analyst with 5 years of experience in IT projects across various domains and industries. A fast learner and thinker with high self-discipline and attention to detail. Possesses a strong understanding of IT project management and business solutions. Proficient in time management, strategic product backlog, sprint planning, and task/project management.",
  professionalSkills: [
    "Stakeholder Management",
    "Document Creation",
    "Wireframe and Mockup Design",
    "Test Case Development",
    "Mentoring Experience"
  ],
  technicalSkills: [
    { categoryName: "Modeling Language & Diagramming Tools", skills: ["BPMN, UML, Microsoft Visio, Lucid Chart, Figma, Axure."] },
    { categoryName: "Project Management Software", skills: ["Jira Atlassian, Redmine Org, GitHub Enterprise Edition, GitLab Enterprise Edition, Microsoft Project."] },
    { categoryName: "Other Skills", skills: ["Computer Proficiency, Presentation, Trainer, Googling, Communication, Marketing."] },
    { categoryName: "Methodologies", skills: ["Fully understand and participate in software development and execution stage of the project life cycle with predefined methods: Agile/Scrum, Waterfall per requirements of Project Manager or Client"] } // Updated to match PDF more closely
  ],
  provenSuccessful: [
    "Proven Successful Products: HROS - Paxanimi.ai & Expenso App - Paxanimi.ai",
    "Proven Top Outsourcing Clients: One Business Connection - OBC - KẾT NỐI DOANH NGHIỆP VIỆT NAM (obcbiz.com)",
    "Proven Top SAP - ERP: Implement SAP ERP system for Long Thanh Plastics",
    "Proven Top SAP - ERP: Implement SAP ERP system for Boston Pharma"
  ],
  education: [
    { degree: "Bachelor of Business Administration", major: "Major in Information System Management", institution: "Van Lang University", year: "2019" },
    { degree: "Certification of User Experience", institution: "UXFoundation", year: "2023" }
  ],
  timeline: [
    { dateRange: "01/2019 - 04/2021", title: "SAP Consultant", company: "FPT Information System" },
    { dateRange: "05/2021 - 10/2022", title: "Business Analyst", company: "Renovation Technology" },
    { dateRange: "11/2022 - 08/2024", title: "Business Analyst", company: "Terralogic" },
    { dateRange: "09/2024 - 03/2025", title: "Business Analyst", company: "New Ocean IS", current: true }
  ],
  professionalExperience: [
    {
      id: "A",
      projectName: "TRACK & TRACE SYSTEM (INDUSTRY)",
      roleContext: "Business Analyst - NOIS", // Simplified from PDF
      responsibilities: [
        "Documentation: Analyzing and gathering business requirements for Track & Trace products : Track & Trace in Processing, Track & Trace in Packaging, Distribution Management, Customer Program.",
        "User Experience (UX): Significantly contributing to creating user-friendly Track & Trace products with intuitive interfaces and satisfying user experiences.",
        "Developing Product Requirement Documents (PRDs), User Stories, Functional Specifications, Wireframes, Mock-ups, and Prototypes to visualize ideas and communicate requirements to the development team.",
        "Define functional requirements and non-functional requirements.",
        "Assuming the Product Owner role, representing the voice of the customer and end-users.",
        "Collaborating closely with the development team to ensure products are built according to requirements and achieve high quality.",
        "Participating in product development stages from ideation, design, development, testing, to deployment.",
        "System Integration: Working closely to integrate Track & Trace solutions with automation systems and Machine Vision technology in manufacturing and packaging processes."
      ],
      collaboration: [
        "Working independently and collaborating closely with 5 Software Engineers, as well as Automation and Machine Vision teams to ensure seamless integration of technological solutions.",
        "Supporting the internal team in synchronizing work, sharing knowledge, and significantly contributing to brainstorming sessions for optimal solutions."
      ],
      outputsAndAchievements: [
        "Track & Trace in Processing: Developed modules for batch management, raw material traceability, and production process reporting, successfully integrated with automated production line systems for automatic data collection.",
        "Track & Trace in Packaging: Implemented product barcode scanning feature, packaging information management, integrated quality inspection system, applied Machine Vision technology to inspect labels and product information on packaging.",
        "Distribution Management: Built order tracking system, warehouse management, and optimized delivery routes.",
        "Customer Program: Developed customer portal, purchased product tracking feature, and collected customer feedback."
      ],
      technologiesAndTools: ["Google Space, diagram.net, Google Sheet, Google Doc, Figma"]
    },
    {
      id: "B",
      projectName: "HUMAN RESOURCE MANAGEMENT SYSTEM",
      roleContext: "Business Analyst - Terralogic",
      introText: "Greatly contribute to the Project as Main Business Analyst and produce a user-friendly, satisfied UX and high performance HROS system.",
      responsibilities: [
        "Documentation: Product Requirement Document, Workflow, User Guide, User Story, Functional Specification Document and other technical and non-technical documents related to the Project and Products.",
        "Restructuring and re-define the process from As-Is into To-Be for improvement in both User Experience and System Performance: Onboarding, Offboarding, Employee Management, Viet Nam Payroll, Dubai Payroll, Ticket Management, Timesheet, Time off, Admin Portal, Super Admin Portal - Tenant Management.",
        "Define functional requirements and non-functional requirements.",
        "Create wireframes, mock-ups, and prototypes to visualize ideas."
      ],
      collaboration: [
        "Work independently and individually with 18 Software Engineers and 3 UI/UX Designer.",
        "Collaborate with product owner, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives.",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project.",
        "Hosting internal team sync up, greatly and significantly contribute to the solutions and brainstorming session of the team."
      ],
      outputsAndAchievements: [
        "Successfully currently has 1000 and more users and keep increasing application with the business procedure.",
        "Achievements in the product from 2022 till now: released more than 20 services within 15 modules, including 1 web application and 2 mobile apps.",
        "Preparing to launch the VN market by September 2024, signed 3 customers for the trials."
      ],
      technologiesAndTools: ["Google Space, diagram.net, Google Sheet, Google Doc, Figma"]
    },
    {
      id: "C",
      projectName: "EXPENSE MANAGEMENT SYSTEM",
      roleContext: "Business Analyst - Terralogic",
      responsibilities: [
        "Documentation: Workflow, User Guide, User Story.",
        "Define functional requirements and non-functional requirements.",
        "Restructuring and re-define the process from As-Is into To-Be for improvement in both User Experience and System Performance.",
        "Create wireframes, mock-ups, and prototypes to visualize ideas."
      ],
      collaboration: [
        "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer.",
        "Collaborate with product owner, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives.",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project."
      ],
      outputsAndAchievements: [
        "Product got launched successfully and on time as planned.",
        "Currently has > 200 active end users and keep increasing."
      ],
      technologiesAndTools: ["Google Space, diagram.net, Google Sheet, Google Doc, Jira Atlassian, Figma"]
    },
    {
      id: "D",
      projectName: "FOOD & BEVERAGE MANAGEMENT PLATFORM",
      roleContext: "Business Analyst - Renovation Technology",
      responsibilities: [
        "Got requirements, analyzed the business restaurant management process, managed staff and gave solutions to complete the F&B management platform.",
        "Analyzed, created reports in F&B: Revenue Report, Stock Inventory, Report, Product Item Report, Internal communication, Incident Report and Maintenance Management, Staff Management Report.",
        "Created User Story, user guide, wireframe and functions F&B management platform.",
        "Created Side MAP, User Case, Test Case.",
        "Integration Test between F&B management platform and SPOS System, FAST System.",
        "Test UX/UI, test Postman.",
        "Training, supporting users and fixing issues in the implementation process."
      ],
      collaboration: [
        "Collect Customer Requirement.",
        "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer.",
        "Collaborate, communicate and provide solutions and approaches of the products for the whole project."
      ],
      outputsAndAchievements: [
        "Product go live on time as planned by timeline.",
        "Web Application and Mobile Application version."
      ],
      technologiesAndTools: ["Postman, SPOS System, FAST System, Redmine System, Axure RP, Visio"]
    },
    {
      id: "E",
      projectName: "ONE BUSINESS CONNECTION NETWORK",
      roleContext: "Business Analyst - Renovation Technology",
      responsibilities: [
        "Got requirements, analyzed business process Connect business, Register from free member to become OBC's member, Payment process flow and other processes.",
        "Create User Story, Wireframe OBC APP, Functions and USER GUIDE – APP, WEB.",
        "Tested UX/UI, processing flow, APP and WEB integration.",
        "Training, supporting users and fix issues in implement process."
      ],
      collaboration: [
        "Collect Customer Requirements.",
        "Work independently and individually with 6 Software Engineers and 2 UI/UX Designer."
      ],
      outputsAndAchievements: [
        "Product got launched successfully and on time as planned.",
        "Web Application and Mobile Application."
      ],
      technologiesAndTools: ["Redmine System, Axure RP, Visio"]
    },
    {
      id: "F",
      projectName: "SALES & DISTRIBUTION MODULE - SAP ERP SYSTEM",
      roleContext: "SAP Consultant - FPT Information System",
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
        "Integration test between APP and SAP."
      ],
      collaboration: [
        "Collaborate with customer, stakeholders to gather and document business requirements, ensuring alignment with organizational goals and objectives.",
        "Work independently and individually with 7-10 Software Engineers."
      ],
      outputsAndAchievements: [
        "Success delivered a SAP ERP System as a production.",
        "Continuous monitoring and maintaining the delivered application after production.",
        "In-depth understanding and analysis of the SAP ERP process and digitalize the procedure into an application."
      ],
      technologiesAndTools: ["Visio, Jira, SAP"]
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header data={cvData} />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8"> {/* Adjusted max-width and padding */}
        
        <Section title="Background">
          <p className="text-sm text-gray-700 leading-relaxed">{cvData.background}</p>
        </Section>

        <Section title="Professional skills">
          <div className="flex flex-wrap gap-2">
            {cvData.professionalSkills.map(skill => <SkillTag key={skill} skill={skill} />)}
          </div>
        </Section>

        <Section title="Technical skills">
          <div className="space-y-3 text-sm">
            {cvData.technicalSkills.map(category => (
              <div key={category.categoryName}>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">{category.categoryName}:</span> {category.skills.join(" ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Proven Successful">
          <ul className="space-y-1 list-disc list-outside pl-5 text-sm text-gray-700">
            {cvData.provenSuccessful.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        
        <Section title="Education">
          <div className="space-y-1 text-sm">
            {cvData.education.map((edu, index) => <EducationItem key={index} {...edu} />)}
          </div>
        </Section>

        <div className="mt-6 mb-2"> {/* Container for Timeline Title and Component */}
          <h2 className="text-xl font-bold text-black mb-3">Timeline Business Analyst</h2>
          <TimelineComponent timeline={cvData.timeline} />
        </div>
        

        <Section title="Professional experience">
          <div className="space-y-6">
            {cvData.professionalExperience.map((proj, index) => (
              <ExperienceCard key={proj.id} project={proj} index={index} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

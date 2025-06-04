export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface TimelineEvent {
  dateRange: string;
  title: string;
  company: string;
  current?: boolean;
}

export interface ExperienceProject {
  id: string;
  projectName:string;
  roleContext: string; // e.g., "Business Analyst - NOIS"
  responsibilities: string[];
  collaboration?: string[];
  outputsAndAchievements: string[];
  technologiesAndTools: string[];
  introText?: string;
}

export interface EducationEntry {
  degree: string;
  major?: string;      // Made optional as it's sometimes part of degree string
  institution: string; // Can be part of degree string or standalone
  year?: string;       // Made optional, can be part of institution string
}

export interface TechnicalSkillCategory {
  categoryName: string;
  skills: string[]; // Skills are now a single string in data, joined from array
}

export interface CvData {
  name: string;
  nickname: string;
  title: string;
  profileImageUrl: string;
  contact: ContactInfo;
  background: string;
  professionalSkills: string[];
  technicalSkills: TechnicalSkillCategory[];
  provenSuccessful: string[];
  education: EducationEntry[];
  timeline: TimelineEvent[];
  professionalExperience: ExperienceProject[];
}

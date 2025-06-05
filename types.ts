
export interface ContactInfo {
  email: string;
  location: string;
  phone: string;
}

export interface ProfessionalSkill {
  name: string;
}

export interface TechnicalSkillItem {
  category: string;
  details: string;
}

export interface ProvenSuccessItem {
  text: string;
}

export interface EducationItem {
  degree: string;
  majorAndInstitution: string;
  year: string;
}

export interface TimelineItemData {
  dateRange: string;
  role: string;
  company: string;
}

export interface ExperienceItemData {
  id: string;
  title: string;
  roleAndCompany: string;
  responsibilities: string[];
  collaboration: string[];
  outputsAndAchievements: string[];
  technologies: string;
}

export interface CVData {
  name: string;
  nickname: string;
  title: string;
  profileImageUrl: string;
  contact: ContactInfo;
  background: string;
  professionalSkills: ProfessionalSkill[];
  technicalSkills: TechnicalSkillItem[];
  provenSuccessful: ProvenSuccessItem[];
  education: EducationItem[];
  timeline: TimelineItemData[];
  professionalExperience: ExperienceItemData[];
}

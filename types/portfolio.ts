export interface Personal {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  description: string;
  heroTitle: string;
}

export interface Workplace {
  id: number;
  name: string;
  position: string;
  description: string;
  logo: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: number;
}

export interface Contact {
  type: string;
  label: string;
  value: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal?: Personal;
  workplaces?: Workplace[];
  skills?: Skill[];
  certifications?: Certification[];
  contacts?: Contact[];
}

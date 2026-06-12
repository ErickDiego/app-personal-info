import { Personal, Workplace, Skill, Certification, Contact } from '@/types/portfolio';

export const portfolioService = {
  async getPersonal(): Promise<{ data: Personal }> {
    const res = await fetch('/api/portfolio/personal');
    if (!res.ok) throw new Error('Error fetching personal data');
    return res.json();
  },

  async getWorkplaces(): Promise<{ data: Workplace[] }> {
    const res = await fetch('/api/portfolio/workplaces');
    if (!res.ok) throw new Error('Error fetching workplaces');
    return res.json();
  },

  async getSkills(): Promise<{ data: Skill[] }> {
    const res = await fetch('/api/portfolio/skills');
    if (!res.ok) throw new Error('Error fetching skills');
    return res.json();
  },

  async getCertifications(): Promise<{ data: Certification[] }> {
    const res = await fetch('/api/portfolio/certifications');
    if (!res.ok) throw new Error('Error fetching certifications');
    return res.json();
  },

  async getContacts(): Promise<{ data: Contact[] }> {
    const res = await fetch('/api/portfolio/contacts');
    if (!res.ok) throw new Error('Error fetching contacts');
    return res.json();
  },

  async getAll(): Promise<{ data: Record<string, any> }> {
    const res = await fetch('/api/portfolio');
    if (!res.ok) throw new Error('Error fetching portfolio data');
    return res.json();
  },
};


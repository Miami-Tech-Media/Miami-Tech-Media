export interface Service {
  number: string;
  title: string;
  label: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Brand Strategy & Messaging',
    label: 'Positioning, messaging, and visual direction',
    description:
      'Clarify what makes your organization valuable so the right people understand, trust, and remember you.',
  },
  {
    number: '02',
    title: 'Website Strategy & Design',
    label: 'Structure, user experience, conversion, and implementation',
    description:
      'Turn your website into a trustworthy, focused experience that helps visitors quickly understand what you do and what to do next.',
  },
  {
    number: '03',
    title: 'Content & Storytelling',
    label: 'Photography, video, campaigns, and editorial content',
    description:
      'Create useful, credible stories that strengthen relationships and extend the life of every initiative.',
  },
  {
    number: '04',
    title: 'AI-Assisted Creative Systems',
    label: 'Workflows, templates, automation, and guidance',
    description:
      'Build leaner creative systems that save time, improve consistency, and help your organization create better content.',
  },
];

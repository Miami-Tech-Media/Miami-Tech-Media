export interface Project {
  client: string;
  title: string;
  description: string;
  visualStyle: 'lines' | 'dots';
}

export const projects: Project[] = [
  {
    client: 'Miami Tech Works',
    title: 'Career Pathway Storytelling',
    description:
      'A multi-part video and content initiative designed to make career opportunities easier to understand and more compelling to job seekers.',
    visualStyle: 'lines',
  },
  {
    client: 'Refresh Miami',
    title: 'Partner Spotlight Production',
    description:
      'A scalable interview series helping organizations share their work with more polish, consistency, and human connection.',
    visualStyle: 'dots',
  },
];

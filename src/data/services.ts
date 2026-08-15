export interface Service {
  number: string;
  icon: 'compass' | 'camera';
  title: string;
  lead: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    number: '01',
    icon: 'compass',
    title: 'Creative Strategy',
    lead: 'Not sure exactly what you need yet? That\u2019s okay.',
    description:
      'We\u2019ll help you think through the message, the audience, and the best way to bring the idea to life before jumping into production.',
    capabilities: [
      'Messaging',
      'Content Planning',
      'Campaign Ideas',
      'Storytelling',
      'Creative Direction',
    ],
  },
  {
    number: '02',
    icon: 'camera',
    title: 'Photo & Video Production',
    lead: 'When it\u2019s time to create, we\u2019ll help you make it happen.',
    description:
      'From interviews and events to brand stories and ongoing content, we create professional photography and video that feels authentic to your organization and connects with the people you\u2019re trying to reach.',
    capabilities: [
      'Video Production',
      'Photography',
      'Interviews',
      'Events',
      'Brand Stories',
      'Social Content',
    ],
  },
];

export const logoLines = ['Miami Tech', 'Media'];

export const navLinks = [
  { label: 'Home', href: '/' },
  // Prefixed with '/' so these resolve correctly to the homepage
  // sections from any page, not just while already on the homepage.
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  // No dedicated contact page/section exists yet; pointing to the Final
  // CTA section as the site's de facto contact/conversion point. Left
  // as a bare hash (not prefixed with '/') per this task's scope —
  // each page that includes a Final CTA section gives it the same
  // "final-cta" id, so this link already resolves correctly on every
  // page it appears on without needing the homepage prefix.
  { label: 'Contact', href: '#final-cta' },
];

export const primaryCta = {
  label: 'Schedule a Discovery Call',
  href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GyKeYHWBcswHauL6MbKtLzSZxorCXeujGHKm_KFmfpQg3lebEFhFORV4wKB24BeMhGWbYko0X?gv=true',
};

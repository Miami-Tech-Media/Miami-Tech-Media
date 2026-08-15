// Approved partner list. Capital One was intentionally removed per
// explicit direction and should not be restored.
// Real monochrome logo assets (Rich Navy #0F172A) approved per
// Miami Tech Media Website Design System v1.5, Trusted By addendum
// (August 14, 2026). Order below matches the desktop display order;
// mobile reflow order is handled via CSS on the TrustedBy component,
// not by reordering this array, so DOM/document order stays stable.
export interface Partner {
  name: string;
  slug: string;
  file: string;
  width: number;
  height: number;
}

export const partners: Partner[] = [
  {
    name: 'Miami Tech Works',
    slug: 'miami-tech-works',
    file: '/images/trusted-by/miami-tech-works-monochrome.png',
    width: 539,
    height: 179,
  },
  {
    name: 'Refresh Miami',
    slug: 'refresh-miami',
    file: '/images/trusted-by/refresh-miami-monochrome.png',
    width: 448,
    height: 179,
  },
  {
    name: 'Miami Dade College',
    slug: 'miami-dade-college',
    file: '/images/trusted-by/miami-dade-college-monochrome.png',
    width: 741,
    height: 227,
  },
  {
    name: 'Atomic VC',
    slug: 'atomic-vc',
    file: '/images/trusted-by/atomic-vc-monochrome.png',
    width: 1122,
    height: 180,
  },
  {
    name: 'Elevate Capital',
    slug: 'elevate-capital',
    file: '/images/trusted-by/elevate-capital-monochrome.png',
    width: 196,
    height: 179,
  },
  {
    name: 'Keyfactor',
    slug: 'keyfactor',
    file: '/images/trusted-by/keyfactor-monochrome.png',
    width: 1176,
    height: 220,
  },
  {
    name: 'United Way',
    slug: 'united-way',
    file: '/images/trusted-by/united-way-monochrome.png',
    width: 361,
    height: 179,
  },
];

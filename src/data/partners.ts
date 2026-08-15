// Approved partner list. Capital One was intentionally removed per
// explicit direction and should not be restored.
//
// Rich Navy production assets: finalized, pre-approved single-color
// PNG pack (supersedes the earlier full-color pack and the CSS-mask
// experiment). These files are used directly and unmodified - no
// masking, filtering, or recoloring in code. Fill color per the
// supplied pack is #0A1F44 (baked into the PNGs themselves), a very
// close but distinct value from the site's --rich token (#0F172A)
// used elsewhere on the page; noted for the record since these are
// pre-baked pixels, not something this component controls.
// Order below matches the desktop display order; mobile reflow order
// is handled via CSS on the TrustedBy component, not by reordering
// this array, so DOM/document order stays stable.
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
    file: '/images/trusted-by/miami-tech-works-rich-navy.png',
    width: 2066,
    height: 661,
  },
  {
    name: 'Refresh Miami',
    slug: 'refresh-miami',
    file: '/images/trusted-by/refresh-miami-rich-navy.png',
    width: 1855,
    height: 710,
  },
  {
    name: 'Miami Dade College',
    slug: 'miami-dade-college',
    file: '/images/trusted-by/miami-dade-college-rich-navy.png',
    width: 1643,
    height: 414,
  },
  {
    name: 'Atomic VC',
    slug: 'atomic-vc',
    file: '/images/trusted-by/atomic-rich-navy.png',
    width: 1987,
    height: 318,
  },
  {
    name: 'Elevate Capital',
    slug: 'elevate-capital',
    file: '/images/trusted-by/elevate-capital-rich-navy.png',
    width: 1357,
    height: 1166,
  },
  {
    name: 'Keyfactor',
    slug: 'keyfactor',
    file: '/images/trusted-by/keyfactor-rich-navy.png',
    width: 324,
    height: 67,
  },
  {
    name: 'United Way',
    slug: 'united-way',
    file: '/images/trusted-by/united-way-rich-navy.png',
    width: 1154,
    height: 548,
  },
];

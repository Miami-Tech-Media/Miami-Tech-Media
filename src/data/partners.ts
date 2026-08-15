// Approved partner list. Capital One was intentionally removed per
// explicit direction and should not be restored.
//
// Full-color / original logo assets: FINAL corrected pack (supersedes
// all earlier logo packs, including the interim full-color pack).
// Corrected in this final pass: Refresh Miami (new asset, different
// native dimensions) and Miami Dade College (confirmed against the
// prior correction, unchanged). Colors are used exactly as supplied -
// no recoloring, tinting, or filtering. Order below matches the
// desktop display order; mobile reflow order is handled via CSS on
// the TrustedBy component, not by reordering this array, so
// DOM/document order stays stable.
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
    file: '/images/trusted-by/miami-tech-works-full-color.png',
    width: 2042,
    height: 637,
  },
  {
    name: 'Refresh Miami',
    slug: 'refresh-miami',
    file: '/images/trusted-by/refresh-miami-full-color.png',
    width: 1831,
    height: 686,
  },
  {
    name: 'Miami Dade College',
    slug: 'miami-dade-college',
    file: '/images/trusted-by/miami-dade-college-original.png',
    width: 1619,
    height: 390,
  },
  {
    name: 'Atomic VC',
    slug: 'atomic-vc',
    file: '/images/trusted-by/atomic-vc-original.png',
    width: 1963,
    height: 294,
  },
  {
    name: 'Elevate Capital',
    slug: 'elevate-capital',
    file: '/images/trusted-by/elevate-capital-original.png',
    width: 1333,
    height: 1142,
  },
  {
    name: 'Keyfactor',
    slug: 'keyfactor',
    file: '/images/trusted-by/keyfactor-original.png',
    width: 300,
    height: 43,
  },
  {
    name: 'United Way',
    slug: 'united-way',
    file: '/images/trusted-by/united-way-full-color.png',
    width: 1130,
    height: 526,
  },
];

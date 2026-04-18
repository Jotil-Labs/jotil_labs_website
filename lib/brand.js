// Single source of truth for all JotilLabs brand constants.
// Consumers: globals.css @theme (colors), layout.jsx (metadata), JsonLd.jsx
// (schema), og/route.jsx (OG image), Footer.jsx (wordmark + copy),
// manifest.json (regenerated manually in sync), and any copy referencing
// name/tagline/contact.
//
// To change a brand value site-wide: edit here, then verify the consumers
// listed in the spec at docs/plans/2026-04-18-brand-refresh-design.md.

export const brand = {
  name: 'JotilLabs',                 // wordmark / brand
  legalName: 'Jotil Labs LLC',       // registered LLC — legal pages + © footer
  tagline: 'Automate. Empower. Scale.',
  domain: 'jotillabs.com',
  url: 'https://jotillabs.com',
  urlWww: 'https://www.jotillabs.com',
  email: 'contact@jotillabs.com',
  phone: '+1 (358) 900-0040',
  phoneHref: 'tel:+13589000040',
  address: {
    city: 'Lehi',
    state: 'Utah',
    stateCode: 'UT',
    country: 'US',
  },
  founded: 2026,

  colors: {
    primary: '#3859a8',              // royal blue
    primaryDark: '#2a4688',          // hover state
    navy: '#0f1129',                 // deep navy
    accent: '#22D3EE',               // electric cyan — UI accent only
    logoMuted: '#8ca3cc',            // logo dots + wordmark "Labs" on dark bg
    black: '#000000',
    white: '#FFFFFF',
  },

  neutrals: {
    bg: '#FAFBFD',
    bgAlt: '#F4F6FB',
    surface: 'rgba(15,17,41,0.04)',
    border: 'rgba(15,17,41,0.08)',
    text: '#0F1129',
    muted: '#4A4D6A',
    subtle: '#6B7098',
  },

  fonts: {
    display: 'Montserrat Alternates',
    body: 'Inter',
    mono: 'JetBrains Mono',
  },

  social: {
    linkedin: 'https://linkedin.com/company/jotillabs',
    x: 'https://x.com/jotillabs',
    youtube: 'https://youtube.com/@jotillabs',
  },
}

// Convenience: © line rendered in footers.
export function copyrightLine() {
  return `© ${new Date().getFullYear()} ${brand.legalName}. All rights reserved.`
}

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

    // Tonal scales — mirror the @theme tokens in app/globals.css.
    // Use these instead of ad-hoc rgba() tints on the base color.
    primaryScale: {
      50:  '#EEF2FB',
      100: '#D8E1F4',
      200: '#B2C2E8',
      300: '#8CA3CC',               // === logoMuted
      400: '#5A78B8',
      500: '#3859a8',               // === primary
      600: '#2a4688',               // === primaryDark
      700: '#22396E',
      800: '#182A54',
      900: '#0F1E3A',
      950: '#0A1428',
    },
    navyScale: {
      50:  '#E8EAF3',
      100: '#C8CCE0',
      200: '#9AA0C0',
      300: '#6C74A0',
      400: '#3E4880',
      500: '#2A3268',
      600: '#1F2651',
      700: '#171D40',
      800: '#131834',
      900: '#0F1129',               // === navy
      950: '#090B1A',
    },
    accentScale: {
      50:  '#ECFDFD',
      100: '#CFFAFA',
      200: '#A5F3F5',
      300: '#67E8EC',
      400: '#3DDFE6',
      500: '#22D3EE',               // === accent
      600: '#0EB6D1',
      700: '#0D92A8',
      800: '#106F82',
      900: '#125B6C',
      950: '#083C47',
    },
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

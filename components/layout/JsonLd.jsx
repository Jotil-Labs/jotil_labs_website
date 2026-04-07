export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jotil Labs',
    url: 'https://jotillabs.com',
    logo: 'https://jotillabs.com/favicon.svg',
    description:
      'AI-powered business automation. Voice agents, chatbots, SMS automation, CRM, and workflow tools for modern businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lehi',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-358-900-0040',
      email: 'contact@jotillabs.com',
      contactType: 'sales',
    },
    sameAs: [
      'https://linkedin.com/company/jotillabs',
      'https://x.com/jotillabs',
    ],
    foundingDate: '2024',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jotil Labs',
    url: 'https://jotillabs.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jotillabs.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  url,
  image,            
  logo,             
  sameAs = [],      
}) => {
  /* --- JSON-LD blocks --- */
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ananta Technology",
    url,
    logo,
    sameAs,
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name: title,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}search?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      {/* Basic & canonical */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Ananta Technology" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon / Apple Touch */}
      <link rel="icon" href={logo} sizes="any" />
      <link rel="apple-touch-icon" href={logo} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteLd)}
      </script>
    </Helmet>
  );
};

export default Seo;

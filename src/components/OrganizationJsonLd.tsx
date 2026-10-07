import { CENTRAL_OFFICE, SCHOOLS, SITE_NAME, SITE_URL, SOCIAL_LINKS, type Stage } from "@/lib/content";

// schema.org type for each school stage, so search engines can tell a
// nursery from a secondary school.
const SCHEMA_TYPE: Record<Stage, string> = {
  Nursery: "Preschool",
  Primary: "ElementarySchool",
  Secondary: "HighSchool",
  Boarding: "HighSchool",
  Tertiary: "CollegeOrUniversity",
};

const address = (streetAddress: string) => ({
  "@type": "PostalAddress",
  streetAddress,
  addressCountry: "NG",
});

/** Organization + WebSite structured data, rendered once on the home page. */
export function OrganizationJsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: SITE_NAME,
        alternateName: "Corona Schools",
        url: SITE_URL,
        logo: `${SITE_URL}/icon-512.png`,
        slogan: "A Legacy of World-Class Education",
        foundingDate: "1955",
        email: CENTRAL_OFFICE.email,
        telephone: CENTRAL_OFFICE.phones[0],
        address: address(CENTRAL_OFFICE.address),
        sameAs: SOCIAL_LINKS.map((s) => s.href),
        subOrganization: SCHOOLS.map((school) => ({
          "@type": SCHEMA_TYPE[school.stage],
          name: school.name,
          ...(school.founded && { foundingDate: school.founded }),
          address: address(school.address),
          telephone: school.phones[0],
          email: school.email,
          parentOrganization: { "@id": orgId },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": orgId },
        inLanguage: "en-NG",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

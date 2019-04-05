import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import CompanyLogo from "../components/CompanyLogo";
import LinkToPage from "../components/LinkToPage";
import Section from "../components/Section";
import { VictoryLine } from "victory";

export const IndexPageTemplate = ({
  heading,
  cta,
  investorsHeading,
  investorsSubheading,
  investorsCta,
  companiesHeading,
  companiesSubheading,
  companiesCta,
  vcs,
  companies,
  exits,
  investments
}) => (
  <div className={`dt w-90 center`}>
    {/* Header */}
    <Section
      heading={heading}
      Subheading={""}
      cta={cta}
      path={"/contact"}
      isHeadingLeft={true}
      hasBorder={false}
    >
      <VictoryLine
        interpolation="natural"
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 6 }
        ]}
      />
    </Section>

    {/* Companies */}
    <Section
      heading={companiesHeading}
      Subheading={companiesSubheading}
      cta={companiesCta}
      path={"/companies"}
      isHeadingLeft={true}
      hasBorder={true}
    >
      <section class="cf w-100 pa2">
        {exits.map(exit => (
          <CompanyLogo company={exit} />
        ))}
        {companies.map(company => (
          <CompanyLogo company={company} />
        ))}
        {investments.map(investment => (
          <CompanyLogo company={investment} />
        ))}
      </section>
    </Section>

    {/* Investors  */}
    <Section
      heading={investorsHeading}
      Subheading={investorsSubheading}
      cta={investorsCta}
      path={"/companies"}
      isHeadingLeft={false}
      hasBorder={true}
    >
      <section class="cf w-100 pa2">
        {vcs.map(vc => (
          <CompanyLogo company={vc} />
        ))}
      </section>
    </Section>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        cta={frontmatter.cta}
        investorsHeading={frontmatter.investorsHeading}
        investorsSubheading={frontmatter.investorsSubheading}
        investorsCta={frontmatter.investorsCta}
        companiesHeading={frontmatter.companiesHeading}
        companiesSubheading={frontmatter.companiesSubheading}
        companiesCta={frontmatter.companiesCta}
        vcs={frontmatter.vcs}
        companies={frontmatter.companies}
        exits={frontmatter.exits}
        investments={frontmatter.investments}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        cta
        investorsHeading
        investorsSubheading
        investorsCta
        companiesHeading
        companiesSubheading
        companiesCta
        vcs {
          name
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        companies {
          name
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        exits {
          name
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        investments {
          name
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

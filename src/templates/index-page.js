import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import CompanyLogo from "../components/CompanyLogo";
import Section from "../components/Section";
import { ChevronDown } from "react-feather";

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
  investments,
  image
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
      <div className={`center w-100`}>
        <img
          src={
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }
          alt={"New York City"}
          className={`br4 pa2 center`}
          width={350}
        />
      </div>
      <div className={``}>
        <ChevronDown />
      </div>
    </Section>

    {/* Companies */}
    <Section
      heading={companiesHeading}
      Subheading={companiesSubheading}
      cta={companiesCta}
      path={"/company"}
      isHeadingLeft={false}
      hasBorder={false}
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
      path={"/investor"}
      isHeadingLeft={true}
      hasBorder={false}
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
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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

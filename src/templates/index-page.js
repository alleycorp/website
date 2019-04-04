import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import CompanyLogo from "../components/CompanyLogo";
import LinkToPage from "../components/LinkToPage";

export const IndexPageTemplate = ({
  heading,
  subheading,
  vcs,
  companies,
  exits,
  investments
}) => (
  <div className={`dt w-90 center`}>
    {/* Header */}
    <div className={`dt-row w-100`}>
      <div className={`dt w-100 pb4`}>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <div className={`f3 measure-narrow center lh-copy pa4 mv6-l`}>
            <div className={`f3 lh-copy dark-gray fw4 pb4`}>{heading}</div>
            <div className={`f3 lh-copy mid-gray fw1 pb4`}>{subheading}</div>
            <LinkToPage text={`Brainstorm with us`} path={`/contact`} />
          </div>
        </div>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
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
          <div className={`fr pt3 ph2`}>
            <LinkToPage
              text={`See more of our companies`}
              path={`/companies`}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2 */}
    <div className={`dt-row w-100`}>
      <div className={`dt h-100 w-100 mt6-l mt5 ba br4 b--light-gray`}>
        <div className={`dtc-l dt-row w-50 h-100`}>
          <div className={`pa1 pa4-l w-100 h-100-l`}>
            <section class="cf w-100 pa2">
              {vcs.map(vc => (
                <CompanyLogo company={vc} />
              ))}
            </section>
            <div className={`pt3 ph3`}>
              <LinkToPage
                text={`See more of our co-investors`}
                path={`/companies`}
              />
            </div>
          </div>
        </div>
        <div className={`dtc-l dt-row w-50 v-mid`}>
          <div className={`f3 measure-narrow center lh-copy pa4`}>
            <div className={`f3 dark-gray fw4 pb4`}>Our co-investors</div>
            <div className={`f4 gray fw2`}>
              Growing a startup is all about choosing the right partners. We can
              help you find those.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        kevin={frontmatter.kevin}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
        subheading
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

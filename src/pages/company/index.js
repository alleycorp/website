import React from "react";
import { graphql, StaticQuery, navigateTo } from "gatsby";
import Layout from "../../components/Layout";
import _ from "lodash";

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { data } = this.props;
    const { edges: companies } = data.allMarkdownRemark;
    const { isMouseOver } = this.state;

    return (
      <Layout>
        <div className={`w-90 center pt5`}>
          <div className={`pv5`}>
            <div className={`f-subheadline pb3`}>Our companies</div>
            <p className={`measure lh-copy gray`}>
              AlleyCorp continuously founds and builds companies. On the
              incubation side, we originate the idea, hire the team, fund the
              initial 6-12 months, launch the company, and maintain integral
              leadership throughout the company's lifecycle. We also invest in
              very early stage companies as the first seed investors.{" "}
            </p>
          </div>
          <div className={`cf`}>
            {companies.map((companyNode, index) => {
              const company = companyNode.node.frontmatter;

              return (
                <div className={`fl pa4 mv2`} key={`${company.name}${index}`}>
                  <a
                    className={`link`}
                    onClick={() => [navigateTo(companyNode.node.fields.slug)]}
                  >
                    <div
                      className={`relative dt ba br4 b--light-gray pa4 lh-copy grow pointer`}
                    >
                      <div
                        className={`f7 absolute br4 top--1 right--1 bg-light-blue white pv2 ph3 `}
                      >
                        {company.status}
                      </div>
                      <div className={`dt-row`}>
                        <img
                          src={
                            !!company.pic.childImageSharp
                              ? company.pic.childImageSharp.fluid.src
                              : company.pic
                          }
                          alt={company.name}
                          width={250}
                          className={`br4 pa2`}
                          onMouseOver={() => {
                            this.setState({
                              isMouseOver: true
                            });
                          }}
                          onMouseLeave={() => {
                            this.setState({
                              isMouseOver: false
                            });
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CompaniesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "company" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                name
                description
                url
                status
                category
                pic {
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
      }
    `}
    render={(data, count) => <Companies data={data} count={count} />}
  />
);

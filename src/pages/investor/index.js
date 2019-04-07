import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import _ from "lodash";

class Investors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { data } = this.props;
    const { edges: investors } = data.allMarkdownRemark;
    const { isMouseOver } = this.state;

    return (
      <Layout>
        <div className={`w-90 dt center pt5`}>
          <div className={`pv5`}>
            <div className={`f-subheadline pb3`}>Our Co-investors</div>
            <p className={`measure lh-copy gray`}>
              We can help you find the right partners to grow your startup.
            </p>
          </div>
          <div className={`cf`}>
            {investors.map(investorNode => {
              const investor = investorNode.node.frontmatter;

              return (
                <div className={`fl pa4 mv2`}>
                  <a className={`link`} href={investor.url} target="_blank">
                    <div
                      className={`dt ba br4 b--light-gray pa4 lh-copy grow pointer`}
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
                    >
                      <div className={`dt-row`}>
                        <img
                          src={
                            !!investor.pic.childImageSharp
                              ? investor.pic.childImageSharp.fluid.src
                              : investor.pic
                          }
                          alt={investor.name}
                          width={250}
                          className={`br4 pa2`}
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
      query InvestorsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "investor" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                url
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
    render={(data, count) => <Investors data={data} count={count} />}
  />
);

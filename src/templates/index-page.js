import React from "react";
import PropTypes from "prop-types";
import { navigateTo, graphql } from "gatsby";

import Layout from "../components/Layout";
import { ChevronRight } from "react-feather";

export const IndexPageTemplate = ({
  image,
  title,
  kevin,
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
            <div className={`dt pb5`} onClick={() => [navigateTo("/contact")]}>
              <div className={`dtc`}>
                <span
                  className={`f4 lh-copy dark-gray b bb bw1 pointer b--light-blue`}
                >
                  Get in touch
                </span>
              </div>
              <div className={`dtc v-mid`}>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <section class="cf w-100 pa2">
            {exits.map(exit => (
              <a href={exit.url} className={`link gray`}>
                <article class="fl w-25 pa2 grow pointer ">
                  <div class="aspect-ratio aspect-ratio--1x1">
                    <img
                      style={{
                        backgroundImage: `url(${
                          !!exit.logo.childImageSharp
                            ? exit.logo.childImageSharp.fluid.src
                            : exit.logo
                        })`,
                        backgroundSize: "fill"
                      }}
                      class="db bg-center cover aspect-ratio--object br4"
                    />
                  </div>
                </article>
              </a>
            ))}
            {investments.map(investment => (
              <a href={investment.url} className={`link gray`}>
                <article class="fl w-25 pa2 grow pointer ">
                  <div class="aspect-ratio aspect-ratio--1x1">
                    <img
                      style={{
                        backgroundImage: `url(${
                          !!investment.logo.childImageSharp
                            ? investment.logo.childImageSharp.fluid.src
                            : investment.logo
                        })`,
                        backgroundSize: "fill"
                      }}
                      class="db bg-center cover aspect-ratio--object br4"
                    />
                  </div>
                </article>
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>

    {/* Kevin */}
    <div className={`dt-row w-100`}>
      <div className={`w-100 pt4`}>
        <div className={`measure center`}>
          <div className={`f3 light-blue lh-copy pb4`}>
            led by{" "}
            <span className={`dark-gray b bb bw1 pointer b--light-blue`}>
              Kevin Ryan
            </span>
          </div>
          <div className={`f4 fw2 dark-gray lh-copy pb4`}>
            The 'Godfather' of NYC tech
          </div>
          <div className={`fl f6 gray ttu lh-copy`}>- fortune</div>
        </div>
      </div>
    </div>

    {/* Feature 1 */}
    <div className={`dt-row w-100`}>
      <div className={`dt w-100 mt6-l pv4 mt5 ba br4 b--light-gray`}>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <div className={`f3 measure-narrow center lh-copy pa4 mv6-l`}>
            <div className={`f3 dark-gray fw4 pb4`}>Our companies</div>
            <div className={`f4 mid-gray fw2`}>
              Originator of MongoDB, Business Insider, Gilt Groupe, we continue
              to launch new companies, each influencing their respective fields
              and paving growth of entrepreneurship in New York City.
            </div>
          </div>
        </div>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <section class="cf w-100 pa2">
            {companies.map(company => (
              <a href={company.url} className={`link gray`}>
                <article class="fl w-25 pa2 grow pointer ">
                  <div class="aspect-ratio aspect-ratio--1x1">
                    <img
                      style={{
                        backgroundImage: `url(${
                          !!company.logo.childImageSharp
                            ? company.logo.childImageSharp.fluid.src
                            : company.logo
                        })`
                      }}
                      class="db bg-center cover aspect-ratio--object br4"
                    />
                  </div>
                </article>
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>

    <div className={`dt-row w-100`}>
      <div className={`w-100 pt6`}>
        <div className={`measure center`}>
          <div className={`f3 dark-gray fw4 pb4`}>For students</div>
          <div className={`f4 fw2 mid-gray lh-copy pb4`}>
            We are also invested in supporting student entrepreneurship sourced
            by our AlleyCorp Fellows at universities.
          </div>
          <div className={`fr light-blue lh-copy`}>
            <a
              className={`link dark-gray dt pb5`}
              href={`https://docs.google.com/forms/u/2/d/e/1FAIpQLSfZXREslR9D_1JPwuziMpLrOezSroXuWEGYyiYPl6EMIxKiYA/viewform?usp=send_form`}
            >
              <div className={`dtc`}>
                <span
                  className={`f4 lh-copy dark-gray b bb bw1 pointer b--light-blue`}
                >
                  Apply here
                </span>
              </div>
              <div className={`dtc v-mid`}>
                <ChevronRight />
              </div>
            </a>
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
                <a href={vc.url} className={`link gray`}>
                  <article class="fl w-25 pa2 grow pointer ">
                    <div class="aspect-ratio aspect-ratio--1x1">
                      <img
                        style={{
                          backgroundImage: `url(${
                            !!vc.logo.childImageSharp
                              ? vc.logo.childImageSharp.fluid.src
                              : vc.logo
                          })`
                        }}
                        class="db bg-center cover aspect-ratio--object br4"
                      />
                    </div>
                  </article>
                </a>
              ))}
            </section>
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

    {/* <div className={`dt-row w-100`}>
      <div className={`w-100 pt6`}>
        <div className={`measure-wide center`}>
          <div className={`f4 fw2 mid-gray lh-copy pb4`}>
            The role of the imagination is to create new meanings and to
            discover connections that, even if obvious, seem to escape
            detection.
          </div>
          <div className={`fr ttu light-blue lh-copy`}>- Paul Rand</div>
        </div>
      </div>
    </div> */}

    {/* Feature 3 */}
    {/* <div className={`dt-row w-100`}>
      <div className={`dt w-100 mt6-l mt5 br4 b--light-gray ba`}>
        <div className={`dt-row w-100`}>
          <div className={`f3 measure-narrow center lh-copy pa4`}>
            <div className={`f3 dark-gray fw4 pb4`}>Keep your notes fresh.</div>
            <div className={`f4 mid-gray fw2`}>
              Tangle resurfaces helpful notes in real-time as you build your
              knowledge. Don’t let last year's great ideas slip through the
              cracks again.
            </div>
          </div>
        </div>
        <div className={`dtc-l dt-row w-50`}>
          <div className={`w-100 tc`}>
            <img
              className={`pa4`}
              style={{
                maxWidth: "80%"
              }}
              src={`https://storage.googleapis.com/usetangle-static-assets/albert-einstein.png`}
            />
          </div>
        </div>
      </div>
    </div> */}

    {/* Mission */}
    {/* <div className={`dt-row w-100`}>
      <div className={`measure-wide center pv6`}>
        <div className={`ttu light-blue lh-copy pb4`}>Why build Tangle?</div>
        <div className={`f4 fw2 mid-gray lh-copy`}>
          To empower everyone to create big ideas.
        </div>
      </div>
    </div> */}
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  vcs: PropTypes.array
};

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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kevin {
          childImageSharp {
            fluid(maxWidth: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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

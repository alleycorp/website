import React from "react";
import PropTypes from "prop-types";
import { Link, navigateTo, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import { ChevronRight } from "react-feather";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div className={`dt w-90 center`}>
    {/* Header */}
    <div className={`dt-row vh-50 w-100`}>
      <div className={`h-100 w-100`}>
        <div
          className={`w-50-l w-100 fr mt4-l br4 shadow-1`}
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              padding: "54.09% 0 0 0",
              position: "relative"
            }}
          />
        </div>
        <div className={`w-50-l w-100 fl pt4`}>
          <div className={`measure mt4-l mr4-l`}>
            <div className={`f3 lh-copy dark-gray fw4 pb4`}>
              Dedicated to building transformative companies in New York City.
            </div>
            <div className={`f3 lh-copy mid-gray fw1 pb4`}>
              Founding and building companies in Silicon Alley. We also angel
              and seed invest across sectors, usually as the one of the first
              investors. Conversations often start pre-product and pre-deck.
            </div>
            <div className={`dt pb5`} onClick={() => [navigateTo("/contact")]}>
              <div className={`dtc`}>
                <span
                  className={`f4 lh-copy dark-gray b bb bw1 pointer b--accent`}
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
      </div>
    </div>

    {/* What is it */}
    <div className={`dt-row w-100`}>
      <div className={`w-100 pt6-l pt4`}>
        <div className={`measure-wide center`}>
          <div className={`ttu accent lh-copy pb4`}>Who are we?</div>
          <div className={`f4 fw2 mid-gray lh-copy`}>
            Originator of MongoDB, Business Insider, Gilt Groupe, AlleyCorp
            continues to launch new companies, each influencing their respective
            fields and paving growth of entrepreneurship in New York City.
          </div>
        </div>
      </div>
    </div>

    {/* Feature 1 */}
    <div className={`dt-row w-100`}>
      <div className={`dt w-100 mt6-l pv4 mt5 ba br4 b--light-gray`}>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <div className={`f3 measure-narrow lh-copy pa4 fr-l mv6-l`}>
            <div className={`f3 dark-gray fw4 pb4`}>Led by Kevin Ryan</div>
            <div className={`f4 mid-gray fw2`}>
              Chairman and Founder, MongoDB, Zola, Workframe and Nomad Health
            </div>
          </div>
        </div>
        <div className={`dt-row dtc-l v-mid w-100 w-50-l`}>
          <div
            className={`dt center h5 shadow-1 ba br4 b--light-gray bg-white`}
            style={{
              minWidth: "17.5em",
              backgroundImage: `url(${
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              })`
              // backgroundPosition: `top left`,
              // backgroundAttachment: `fixed`
            }}
          />
        </div>
      </div>
    </div>

    {/* Steve Jobs */}
    <div className={`dt-row w-100`}>
      <div className={`w-100 pt6`}>
        <div className={`measure center`}>
          <div className={`f4 fw2 mid-gray lh-copy pb4`}>
            Kevin Ryan, the ‘Godfather’ of NYC tech
          </div>
          <div className={`fr ttu accent lh-copy`}>- fortune</div>
        </div>
      </div>
    </div>

    {/* Feature 2 */}
    <div className={`dt-row w-100`}>
      <div className={`dt h-100 w-100 mt6-l mt5 ba br4 b--light-gray`}>
        <div className={`dtc-l dt-row w-50 h-100`}>
          <div
            className={`pa1 pa4-l w-100 h-100-l h5`}
            style={{
              pointerEvents: "none"
            }}
          >
            <section class="cf w-100 pa2-ns">
              <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
                <div class="aspect-ratio aspect-ratio--1x1">
                  <img
                    style={{
                      backgroundImage: `url(http://mrmrs.github.io/images/0006.jpg)`
                    }}
                    class="db bg-center cover aspect-ratio--object"
                  />
                </div>
                <a href="#0" class="ph2 ph0-ns pb3 link db">
                  <h3 class="f5 f4-ns mb0 black-90">Title of piece</h3>
                  <h3 class="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
                </a>
              </article>
            </section>
          </div>
        </div>
        <div className={`dtc-l dt-row w-50 v-mid`}>
          <div className={`f3 pv7-l measure-narrow center lh-copy pa4`}>
            <div className={`f3 dark-gray fw4 pb4`}>Our friends</div>
            <div className={`f4 gray fw2`}>
              Growing a startup is all about choosing the right partners. We can
              help you find those partners.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Steven Johnson */}
    <div className={`dt-row w-100`}>
      <div className={`w-100 pt6`}>
        <div className={`measure-wide center`}>
          <div className={`f4 fw2 mid-gray lh-copy pb4`}>
            The role of the imagination is to create new meanings and to
            discover connections that, even if obvious, seem to escape
            detection.
          </div>
          <div className={`fr ttu accent lh-copy`}>- Paul Rand</div>
        </div>
      </div>
    </div>

    {/* Feature 3 */}
    <div className={`dt-row w-100`}>
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
    </div>

    {/* Mission */}
    <div className={`dt-row w-100`}>
      <div className={`measure-wide center pv6`}>
        <div className={`ttu accent lh-copy pb4`}>Why build Tangle?</div>
        <div className={`f4 fw2 mid-gray lh-copy`}>
          To empower everyone to create big ideas.
        </div>
      </div>
    </div>

    {/* Subscribe */}
    <div className={`dt-row w-100`}>Blank</div>

    {/* Data ownwership */}
    <div className={`dt-row w-100`}>
      <div className={`measure-wide center mv6`}>
        <div className={`ttu accent lh-copy pb4`}>PS.</div>
        <div className={`f4 fw2 mid-gray lh-copy`}>
          We know ownership of your data is important to you. Tangle will always
          allow you to export your data, no questions asked.
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        heading
        subheading
      }
    }
  }
`;

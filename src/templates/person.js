import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CompanyLogo from "../components/CompanyLogo";
import marked from "marked";
import { Linkedin } from "react-feather";

export const PersonTemplate = ({
  title,
  helmet,
  pic,
  name,
  founder,
  linkedin,
  description,
  boardsSubheading,
  recognitionsSubheading,
  mediaSubheading,
  media,
  recognitions,
  boards,
  engagements,
  engagementsSubheading
}) => {
  return (
    <div className={`w-90 center`}>
      {helmet || ""}
      <article className="cf ph3 ph5-ns pv5">
        <header className="fn fl-l w-50-l pr4-l">
          <div className={`dt pa4 lh-copy measure`}>
            <div className={`dt-row`}>
              <img
                src={
                  !!pic.childImageSharp ? pic.childImageSharp.fluid.src : pic
                }
                alt={name}
                width={400}
                className={`br4 pa2`}
              />
            </div>
            <div className={`dt-row`}>
              <div className={`f4 fl fw3 dark-gray pt2`}>{name}</div>
              <a
                href={linkedin}
                className={`fr link pr3 gray hover-light-blue pointer`}
              >
                <Linkedin />
              </a>
            </div>
            <div className={`dt-row`}>
              <div className={`dt pt2`}>
                <div className={`dtc f4 fw6 f6 gray v-mid pr2`}>{title}</div>
                {founder && (
                  <div
                    className={`pl2 dtc f6 fw6 light-blue v-mid bl b--light-blue`}
                  >
                    <span className={``}>{`founder`}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className="fn fl-l w-50-l">
          <p
            className="lh-copy measure mt4 mt0-l"
            dangerouslySetInnerHTML={{ __html: marked(description) }}
          />
        </div>
      </article>
      <div className={`dt center w-90`}>
        {recognitions.length ? (
          <Section
            heading={`Recognitions`}
            Subheading={recognitionsSubheading}
            cta={``}
            path={``}
            isHeadingLeft={true}
            hasBorder={true}
          >
            <section class="cf w-100 pa2">
              {recognitions.map(r => (
                <CompanyLogo company={r} />
              ))}
            </section>
          </Section>
        ) : null}
        {boards.length ? (
          <Section
            heading={`Boards`}
            Subheading={boardsSubheading}
            cta={``}
            path={``}
            isHeadingLeft={false}
            hasBorder={true}
          >
            <section class="cf w-100 pa2">
              {boards.map(b => (
                <CompanyLogo company={b} />
              ))}
            </section>
          </Section>
        ) : null}
        {engagements.length ? (
          <Section
            heading={`Engagements`}
            Subheading={engagementsSubheading}
            cta={``}
            path={``}
            isHeadingLeft={true}
            hasBorder={true}
          >
            <section class="cf w-100 pa2">
              {engagements.map(e => (
                <CompanyLogo company={e} />
              ))}
            </section>
          </Section>
        ) : null}
        {media.length ? (
          <Section
            heading={`Media`}
            Subheading={mediaSubheading}
            cta={``}
            path={``}
            isHeadingLeft={false}
            hasBorder={true}
          >
            <section class="cf w-100 pa2">
              {media.map(m => (
                <CompanyLogo company={m} />
              ))}
            </section>
          </Section>
        ) : null}
      </div>
    </div>
  );
};

const Person = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PersonTemplate
        helmet={
          <Helmet titleTemplate="%s | People">
            <title>{`${post.frontmatter.name}`}</title>
            <meta name="title" content={`${post.frontmatter.title}`} />
          </Helmet>
        }
        name={post.frontmatter.name}
        title={post.frontmatter.title}
        founder={post.frontmatter.founder}
        linkedin={post.frontmatter.linkedin}
        pic={post.frontmatter.pic}
        description={post.frontmatter.description}
        boardsSubheading={post.frontmatter.boardsSubheading}
        recognitionsSubheading={post.frontmatter.recognitionsSubheading}
        engagementsSubheading={post.frontmatter.EngagementsSubheading}
        mediaSubheading={post.frontmatter.MediaSubheading}
        media={post.frontmatter.media}
        boards={post.frontmatter.boards}
        recognitions={post.frontmatter.recognitions}
        engagements={post.frontmatter.engagements}
      />
    </Layout>
  );
};

export default Person;

export const pageQuery = graphql`
  query PersonByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        title
        founder
        description
        linkedin
        boardsSubheading
        recognitionsSubheading
        MediaSubheading
        EngagementsSubheading
        engagements {
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
        media {
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
        boards {
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
        recognitions {
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
        pic {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

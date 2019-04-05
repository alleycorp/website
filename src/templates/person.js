import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const PersonTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  pic,
  name,
  founder,
  linkedin
}) => {
  const PersonContent = contentComponent || Content;

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
              <div className={`f4 fw3 dark-gray pt2`}>{name}</div>
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
          <p className="lh-copy measure mt4 mt0-l">
            <PersonContent content={content} />
          </p>
        </div>
      </article>
    </div>
  );
};

const Person = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PersonTemplate
        content={post.html}
        contentComponent={HTMLContent}
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
        linkedin
        boardsSubheading
        recognitionsSubheading
        mediaSubheading
        pic {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
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
      }
    }
  }
`;

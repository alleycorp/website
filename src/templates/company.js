import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import marked from "marked";
import { Link } from "react-feather";

export const PersonTemplate = ({
  helmet,
  pic,
  name,
  category,
  status,
  url,
  description
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
                className={`br4 ba b--light-gray pa2`}
              />
            </div>
          </div>
        </header>
        <div className="fn fl-l w-50-l">
          <a href={url} target="_blank" className={`link pointer`}>
            <div className={`f-subheadline pb3 dark-gray hover-light-blue pt2`}>
              {name}
            </div>
          </a>
          <p
            className="lh-copy measure mt4 mt0-l"
            dangerouslySetInnerHTML={{ __html: marked(description) }}
          />
        </div>
      </article>
    </div>
  );
};

const Company = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PersonTemplate
        helmet={
          <Helmet titleTemplate="%s | Company">
            <title>{`${post.frontmatter.name}`}</title>
            <meta name="title" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        name={post.frontmatter.name}
        status={post.frontmatter.status}
        category={post.frontmatter.category}
        pic={post.frontmatter.pic}
        url={post.frontmatter.url}
        description={post.frontmatter.description}
      />
    </Layout>
  );
};

export default Company;

export const pageQuery = graphql`
  query CompanyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        name
        description
        url
        status
        category
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

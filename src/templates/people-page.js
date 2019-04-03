import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const PeoplePageTemplate = props => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                test
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PeoplePage = ({ data }) => {
  // const { markdownRemark: post } = data

  return (
    <Layout>
      <PeoplePageTemplate />
    </Layout>
  );
};

export default PeoplePage;

export const peoplePageQuery = graphql`
  query PeoplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

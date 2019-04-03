import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

export const PeoplePageTemplate = ({ people }) => {
  return (
    <div className={`center`}>
      <div className={`w-100 db mw7 pt4 center`}>
        {people.map(person => (
          <div key={person.name} className={`dib w-100 center`}>
            <Profile {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PeoplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PeoplePageTemplate people={frontmatter.people} />
    </Layout>
  );
};

export default PeoplePage;

export const peoplePageQuery = graphql`
  query PeoplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "people-page" } }) {
      frontmatter {
        people {
          name
          linkedin
          description
          title
          founder
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
  }
`;

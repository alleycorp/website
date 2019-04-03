import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

export const PeoplePageTemplate = ({ team }) => {
  return (
    <div className={`center`}>
      <div className={`w-100 db mw7 pt4 center`}>
        {team.map(teamMember => (
          <div key={teamMember.name} className={`dib w-100 w-50-l`}>
            <Profile {...teamMember} />
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
      <PeoplePageTemplate team={frontmatter.team} />
    </Layout>
  );
};

export default PeoplePage;

export const peoplePageQuery = graphql`
  query PeoplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "people-page" } }) {
      frontmatter {
        team {
          name
          linkedin
          description
          title
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

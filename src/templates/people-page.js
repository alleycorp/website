import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import { ChevronRight } from "react-feather";

export const PeoplePageTemplate = ({ people }) => {
  return (
    <div className={`w-90 dt center pt5`}>
      <div className={`dt-row cf`}>
        {people.map(person => {
          return (
            <div key={person.name} className={`fl w-100 w-50-m w-25-l pa3`}>
              <Profile {...person} />
            </div>
          );
        })}
      </div>
      <div className={`dt-row w-100`}>
        <div className={`w-100 pt5`}>
          <div className={`measure center`}>
            <div className={`f3 dark-gray fw4 pb4`}>For students</div>
            <div className={`f4 fw2 mid-gray lh-copy pb4`}>
              We are also invested in supporting student entrepreneurship
              sourced by our AlleyCorp Fellows at universities.
            </div>
            <div className={`fr light-blue lh-copy`}>
              <a
                className={`link dark-gray dt pb5`}
                href={`https://docs.google.com/forms/u/2/d/e/1FAIpQLSfZXREslR9D_1JPwuziMpLrOezSroXuWEGYyiYPl6EMIxKiYA/viewform?usp=send_form`}
              >
                <div className={`dtc`}>
                  <span
                    className={`f4 lh-copy  hover-light-blue dark-gray b bb bw1 pointer b--light-blue`}
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

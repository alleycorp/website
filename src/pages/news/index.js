import React from "react";
import { graphql, StaticQuery, navigate } from "gatsby";
import Layout from "../../components/Layout";
import _ from "lodash";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false,
      isValidated: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.props;
    const { edges: news } = data.allMarkdownRemark;
    const { isMouseOver } = this.state;

    return (
      <Layout>
        <div className={`w-90 dt center pt5`}>
          <div className={`pv5`}>
            <div className={`f-subheadline pb3`}>Our News</div>
            <p className={`measure lh-copy gray`}>
              This is a sampling of stories about our founders, our portfolio
              companies, and the issues that matter to us.
            </p>
            <form
              name="news"
              className={`pv4 measure`}
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="news" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor={"name"}>
                  If there is a story that you should be added, submit the link
                  below.
                </label>
                <div className="control mv3">
                  <input
                    className="input-reset br4 ba b--light-gray input pa3 w-100"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <button
                  className="fl button is-link pa2 br4 grow"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className={`cf`}>
            {news.map(newsNode => {
              const news = newsNode.node.frontmatter;

              return (
                <div className={`fl pa4 mv2`}>
                  <a className={`link`} href={news.url} target="_blank">
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
                            !!news.pic.childImageSharp
                              ? news.pic.childImageSharp.fluid.src
                              : news.pic
                          }
                          alt={news.name}
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
      query NewsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "news" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                company
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
    render={(data, count) => <News data={data} count={count} />}
  />
);

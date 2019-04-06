import React from "react";

class CompanyLogo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { company } = this.props;

    return (
      <a
        href={company.url && company.url}
        className={`link gray`}
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
        target="_blank"
      >
        <article className="fl w-25 pa2 grow pointer ">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              style={{
                backgroundImage: `url(${
                  !!company.logo.childImageSharp
                    ? company.logo.childImageSharp.fluid.src
                    : company.logo
                })`
              }}
              className="db bg-center cover aspect-ratio--object br4"
            />
          </div>
        </article>
      </a>
    );
  }
}

export default CompanyLogo;

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
      >
        <article class="fl w-25 pa2 grow pointer ">
          <div class="aspect-ratio aspect-ratio--1x1">
            <img
              style={{
                backgroundImage: `url(${
                  !!company.logo.childImageSharp
                    ? company.logo.childImageSharp.fluid.src
                    : company.logo
                })`
              }}
              class="db bg-center cover aspect-ratio--object br4"
            />
          </div>
        </article>
      </a>
    );
  }
}

export default CompanyLogo;

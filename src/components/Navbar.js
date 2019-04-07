import React from "react";
import { navigateTo } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="db dt-l w-100 b border-box pa3 b ph5-l z-max">
        <a
          className="db dtc-l v-mid mid-gray link pointer dim w-100 w-25-l f2 tc tl-l mb2 mb0-l pb2"
          onClick={() => [navigateTo("/")]}
        >
          <div className={`h2`}>
            <img src={`/img/alleycorp-name.png`} style={{ maxHeight: "1em" }} />
          </div>
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l pb0-l pv2">
          <a
            className="link pointer hover-light-blue dark-gray f4 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/person/kevin-ryan")]}
          >
            Kevin Ryan
          </a>
          <a
            className="link pointer hover-light-blue dark-gray f4 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/people")]}
          >
            People
          </a>
          <a
            className="link pointer hover-light-blue dark-gray f4 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/company")]}
          >
            Companies
          </a>
          <a
            className="link pointer hover-light-blue dark-gray f4 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/news")]}
          >
            News
          </a>
          {/* <a
            className="link pointer dim dark-gray f6 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/companies")]}
          >
            Companies
          </a> */}
          <a
            className="link pointer hover-light-blue dark-gray f4 f4-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/contact")]}
          >
            Contact
          </a>
        </div>
      </nav>
    );
  }
};

export default Navbar;

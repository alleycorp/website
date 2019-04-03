import React from "react";
import { navigateTo } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="db dt-l w-100 border-box pa3 ph5-l">
        <a
          class="db dtc-l v-mid mid-gray link pointer dim w-100 w-25-l f2 tc tl-l mb2 mb0-l pb2"
          onClick={() => [navigateTo("/")]}
        >
          AlleyCorp
        </a>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l pb0-l pb2">
          <a
            class="link pointer dim dark-gray f6 f5-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/contact")]}
          >
            People
          </a>
          <a
            class="link pointer dim dark-gray f6 f5-l dib mr3 mr4-l"
            onClick={() => [navigateTo("/contact")]}
          >
            Companies
          </a>
          <a
            class="link pointer dim dark-gray f6 f5-l dib"
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

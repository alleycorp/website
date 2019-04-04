import React from "react";
import { navigateTo } from "gatsby";
import { ChevronRight } from "react-feather";

class LinkToPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, path } = this.props;

    return (
      <div className={`dt pb5`} onClick={() => [navigateTo(path)]}>
        <div className={`dtc`}>
          <span
            className={`f4 lh-copy hover-light-blue dark-gray b bb bw1 pointer b--light-blue`}
          >
            {text}
          </span>
        </div>
        <div className={`dtc v-mid`}>
          <ChevronRight />
        </div>
      </div>
    );
  }
}

export default LinkToPage;

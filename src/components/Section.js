import React from "react";
import LinkToPage from "./LinkToPage";

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      children,
      heading,
      Subheading,
      cta,
      path,
      isHeadingLeft,
      hasBorder
    } = this.props;

    const Text = () => {
      return (
        <div className={`dtc-l dt-row w-50 v-mid`}>
          <div className={`f3 measure-narrow center lh-copy pa4`}>
            <div className={`f3 dark-gray fw4 pb4`}>{heading}</div>
            <div className={`f4 gray fw2`}>{Subheading}</div>
            <div className={`pt4`}>
              <LinkToPage text={cta} path={path} />
            </div>
          </div>
        </div>
      );
    };

    const Graphic = () => {
      return (
        <div className={`dtc-l dt-row w-50 h-100`}>
          <div className={`pa1 pa4-l w-100 h-100-l`}>{children}</div>
        </div>
      );
    };

    return (
      <div className={`dt-row w-100`}>
        <div
          className={`dt h-100 w-100 mt6-l mt5 ${
            hasBorder ? "ba br4 b--light-gray" : ""
          }`}
        >
          {isHeadingLeft ? <Text /> : <Graphic />}
          {isHeadingLeft ? <Graphic /> : <Text />}
        </div>
      </div>
    );
  }
}

export default Section;

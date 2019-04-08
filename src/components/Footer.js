import * as React from "react";

const Footer = props => {
  return (
    <div className={`w-100 b--light-gray pv5 mt6`}>
      <div className={`measure-narrow tc center f5 gray`}>
        <div className={`dt`}>
          <div className={`dt-row h2`}>
            On LinkedIn at{" "}
            <a
              className={`link dark-gray`}
              href={"https://www.linkedin.com/company/alleycorp"}
            >
              @alleycorp
            </a>
          </div>
          <div className={`dt-row h2`}>
            Email us at{" "}
            <a className={`link dark-gray`} href={"mailto:info@alleycorp.com"}>
              info@alleycorp.com
            </a>
          </div>
          <div className={`dt-row h2`}>
            Address at{" "}
            <a
              className={`link dark-gray`}
              href={"https://goo.gl/maps/cWtybifWLdk"}
            >
              1633 Broadway, 38th Flr, NY, NY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

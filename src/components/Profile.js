import * as React from "react";

import { Linkedin } from "react-feather";

const Profile = props => {
  return (
    <div className={`mb6 center`}>
      <a className={`link`} href={props.linkedin}>
        <div className={`dt ba br4 b--light-gray pa4 lh-copy grow pointer`}>
          <div className={`dt-row`}>
            <img
              src={
                !!props.pic.childImageSharp
                  ? props.pic.childImageSharp.fluid.src
                  : props.pic
              }
              alt={props.name}
              width={300}
              className={`br4 pa2`}
            />
          </div>
          <div className={`dt-row`}>
            <div className={`f4 fw3 dark-gray pt2`}>{props.name}</div>
          </div>
          <div className={`dt-row`}>
            <div className={`dt pt2`}>
              <div className={`dtc f4 fw4 f4 gray v-mid pr2`}>
                {props.title}
              </div>
              {props.founder == "true" && (
                <div className={`pl2 dtc f5 fw5 accent v-mid bl b--accent`}>
                  <span className={``}>{`founder`}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Profile;

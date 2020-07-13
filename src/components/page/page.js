import React from "react";

import './page.scss';

const Page = (props) => {
  return (
    <div className="page container-sm d-flex flex-column flex-sm-row justify-content-center align-items-center">
      {props.children}
    </div>
  );
};

export default Page;

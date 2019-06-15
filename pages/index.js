import React from "react";

import Layout from "../src/layouts/default";

function index() {
  const pageData = {
    pageName: "Home",
  };

  return (
    <Layout pagedata={pageData}>
      <div className="container">Home</div>
    </Layout>
  );
}

export default index;

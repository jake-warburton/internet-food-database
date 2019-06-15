import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import "./style.css";

function index(props) {
  const { pagedata } = props;

  let pageTitle = "";
  if (pagedata.pageName) {
    pageTitle = pagedata.pageName;
  }
  if (pagedata.title) {
    pageTitle = `${pageTitle} | ${pagedata.title}`;
  }
  pageTitle += " | internetfooddatabase.co.uk";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}

index.propTypes = {
  pagedata: PropTypes.node.isRequired,
};

export default index;

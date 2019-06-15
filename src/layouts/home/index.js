import React from "react";
import PropTypes from "prop-types";
import Head from "../../components/head";
import Navbar from "../../components/navbar";

import "../../assets/css/bootstrap.css";
import "./style.css";

function index(props) {
  const { pagedata, children } = props;

  return (
    <div className="d-flex flex-column layout-home">
      <Head pagedata={pagedata} />
      <Navbar currentpage={pagedata.pageName} searchbar={false} />
      {children}
    </div>
  );
}

index.propTypes = {
  pagedata: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default index;

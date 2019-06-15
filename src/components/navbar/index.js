import React from "react";
import Link from "next/link";
import Sticky from "react-sticky-el";

import SearchBar from "../search-components/search-bar";

import "./style.css";

function ToggleNavbar() {
  const navbar = document.getElementById("navbarNavDropdown");
  navbar.classList.toggle("navbar-custom-opened-height");
  const background = document.getElementById("close-navbar-background-button");
  background.classList.toggle("close-navbar-background-button-show");
}

function index() {
  return (
    <>
      <Sticky className="sticky-navbar-waiting">
        <div className="container-fluid sticky-nav-background no-padding-on-mobile">
          <div className="container no-padding-on-mobile">
            <nav className="navbar navbar-dark navbar-expand-lg navbar-custom row mx-0 px-0">
              <div className="col-lg-1 d-flex">
                <Link prefetch href="/">
                  <a>
                    <img
                      src="/static/images/misc/logo_1.png"
                      alt="Dota logo"
                      className="d-none d-lg-block navbar-sm-logo"
                    />
                  </a>
                </Link>
              </div>
              <div
                className="col-12 col-lg navbar-dropdown-area navbar-custom-closed-height"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav justify-content-between">
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/">
                      <a>HOME</a>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/heroes">
                      <a>HEROES</a>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/items">
                      <a>ITEMS</a>
                    </Link>
                  </li>
                  {/*
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/news">
                      <a>NEWS</a>
                    </Link>
                  </li>
                    */}
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/leagues">
                      <a>LEAGUES</a>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/teams">
                      <a>TEAMS</a>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/matches">
                      <a>MATCHES</a>
                    </Link>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link prefetch href="/players">
                      <a>PLAYERS</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-3 row mx-0 px-0">
                <div className="d-inline-flex d-lg-none p-0">
                  <button
                    className="d-lg-none navbar-toggler custom-navbar-toggler py-0 px-1"
                    onClick={() => ToggleNavbar()}
                    type="button"
                    aria-controls="navbarNavDropdown"
                    aria-label="Toggle navbar dropdown"
                  >
                    <img
                      src="/static/images/misc/logo_1.png"
                      alt="Dota logo"
                      className="navbar-sm-logo"
                    />
                  </button>
                </div>
                <div className="col p-0 pr-1">
                  <SearchBar />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Sticky>
      <div
        id="close-navbar-background-button"
        className="close-navbar-background-button"
        onClick={() => ToggleNavbar()}
        onKeyPress={() => ToggleNavbar()}
        role="button"
        tabIndex={0}
      />
    </>
  );
}

export default index;

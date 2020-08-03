import React, { Component } from "react";
import NavBar from "./components/NavBar.jsx";
import TopHeader from "./components/TopHeader.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

export default class App extends Component {
  render() {
    return (
      <header>
        <TopHeader />
        <NavBar />
        <MobileMenu />
      </header>
    );
  }
}

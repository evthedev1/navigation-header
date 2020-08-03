import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import Dropdown from "./Dropdown.jsx";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "SOLUTIONS",
        "PRODUCTS",
        "AUTOMATION",
        "EDUCATION",
        "RESOURCES",
      ],
      activeDropdown: null,
      dropdownOpen: false,
    };
    this.updateActiveDropdown = this.updateActiveDropdown.bind(this);
  }

  updateActiveDropdown(e) {
    const navbarLinks = document.querySelectorAll(".navbar__link");

    for (const navbarLink of navbarLinks) {
      navbarLink.classList.remove("dropdown--active");
    }

    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    if (
      !this.state.dropdownOpen &&
      e.target.getAttribute("data-index") !== this.state.activeDropdown
    ) {
      e.target.classList.add("dropdown--active");
    }
    this.setState({ activeDropdown: [e.target.getAttribute("data-index")] });
  }
  render() {
    return (
      <div>
        <div className="bottom-header">
          <img src="../images/logo.png" />
          <nav className="navbar">
            {this.state.categories.map((category, index) => {
              return (
                <span
                  onClick={(e) => this.updateActiveDropdown(e)}
                  className="navbar__link"
                  role="button"
                  data-index={index}
                  key={index}
                >
                  {category}
                </span>
              );
            })}
          </nav>
          <SearchBar />
        </div>
        {this.state.dropdownOpen ? (
          <Dropdown categoryid={this.state.activeDropdown} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

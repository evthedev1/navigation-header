import React, { Component } from "react";
import MobileMenuDetail from "./MobileMenuDetail.jsx";

export default class MobileMenu extends Component {
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
      links: [
        { name: "Help", image: "../images/help-whitebg.png", link: "#help" },
        {
          name: "Where to Buy/Rent",
          image: "../images/location-whitebg.png",
          link: "#location",
        },
        {
          name: "Safety",
          image: "../images/security-whitebg.png",
          link: "#safety",
        },
        {
          name: "EN",
          image: "../images/flag-whitebg.png",
          link: "#language",
        },
      ],
      mobileLinkDetailOpen: false,
      categoryActive: null,
    };
    this.exitMobileMenu = this.exitMobileMenu.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  exitMobileMenu() {
    const topHeaderMobile = document.querySelector(".top-header-mobile");
    topHeaderMobile.classList.toggle("hide");
    const mobileMenu = document.querySelector(".mobile-menu-container");
    mobileMenu.classList.toggle("hide");

    this.setState({ mobileLinkDetailOpen: false });
  }

  toggleCategory(index, e) {
    this.setState({ mobileLinkDetailOpen: !this.state.mobileLinkDetailOpen });
    this.setState({ categoryActive: index });

    const mobileMenu = document.querySelector(".mobile-menu-links");
    mobileMenu.classList.toggle("hide");
  }

  render() {
    return (
      <div className="mobile-menu-container hide">
        {/* mobile menu black bar */}
        <div className="mobile-menu-bar ">
          Menu
          <div
            onClick={() => {
              this.exitMobileMenu();
            }}
          >
            <img src="../images/exit-blackbg.png" />
          </div>
        </div>
        <div>
          {/* mobile menu categories */}
          <div className="mobile-menu-links ">
            {this.state.categories.map((category, index) => {
              return (
                <span
                  className="navbar__link mobile-links"
                  role="button"
                  key={index}
                  data-category={index}
                  onClick={(e) => {
                    this.toggleCategory(index, e);
                  }}
                >
                  {category}
                  <img src="../images/arrow.png" />
                </span>
              );
            })}

            {/* mobile menu general links */}
            <div className="mobile-general-links">
              {this.state.links.map((link, index) => {
                return (
                  <div key={index}>
                    <a className="mobile-general-link" href={link.link}>
                      <img className="general-icon" src={link.image} />
                      {link.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {this.state.mobileLinkDetailOpen ? (
            <MobileMenuDetail
              toggleCategory={this.toggleCategory}
              category={this.state.categoryActive}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

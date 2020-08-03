import React, { Component } from "react";

export default class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingBagCount: 0,
      links: [
        { link: "#security", image: "../images/securityicon.png" },
        { link: "#help", image: "../images/helpicon.png" },
        { link: "#location", image: "../images/locationicon.png" },
        { link: "#account", image: "../images/accounticon.png" },
      ],
    };
    this.clickMenu = this.clickMobileMenu.bind(this);
  }
  componentDidMount() {
    this.setState({ shoppingBagCount: 3 });
  }
  clickMobileMenu() {
    const topHeaderMobile = document.querySelector(".top-header-mobile");
    topHeaderMobile.classList.toggle("hide");
    const mobileMenu = document.querySelector(".mobile-menu-container");
    mobileMenu.classList.toggle("hide");
  }
  render() {
    return (
      <div>
        {/* white top header - mobile */}
        <div className="top-header-mobile">
          <span
            className="icon mobile navbar__link"
            onClick={() => {
              this.clickMobileMenu();
            }}
          >
            <img src="../images/hamburger-whitebg.png" />
          </span>
          <img src="../images/logo.png" className="icon mobile" />
          <div className="icon-mobile-container">
            <a href="#search">
              <div className="icon mobile">
                <img src="../images/search-whitebg.png" />
              </div>
            </a>

            <a href="#account">
              <div className="icon mobile">
                <img src="../images/account-whitebg.png" />
              </div>
            </a>
            <a href="#cart">
              <div className="icon mobile">
                <img src="../images/cart-whitebg.png" />
              </div>
            </a>
          </div>
        </div>

        {/* black top header - desktop */}
        <div className="top-header">
          <div className="language">
            <img src="../images/flagicon.png" />
            <button>EN</button>
          </div>
          <div className="header-icons">
            {this.state.links.map((link, index) => {
              return (
                <a href={link.link} className="icon desktop" key={index}>
                  <img src={link.image} />
                </a>
              );
            })}
          </div>
          <div className="shopping-cart-container desktop">
            <a href="#cart" className="icon desktop">
              <img src="../images/carticon.png" />
            </a>
            <span className="cart-count">{this.state.shoppingBagCount}</span>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class MobileMenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailLinks: [
        [
          "SOLUTIONS BY INDUSTRY",
          "SOLUTIONS BY PROCESS",
          "SOFTWARE SOLUTIONS",
          "SERVICES",
        ],
        [],
        [],
        [],
        [],
      ],
    };
  }
  render() {
    return (
      <div className="mobile-menu-detail">
        <span
          className="navbar__link mobile-links detail"
          role="button"
          onClick={this.props.toggleCategory}
        >
          <img src="../images/arrowback.png" />
          GO BACK
        </span>

        {this.state.detailLinks[this.props.category].map((link, index) => {
          return (
            <span
              className="navbar__link mobile-link-detail"
              role="button"
              key={index}
            >
              {link}
              <img src="../images/arrow-greybg.png" />
            </span>
          );
        })}
      </div>
    );
  }
}

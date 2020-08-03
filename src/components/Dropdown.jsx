import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        [
          "Solutions By Industry",
          "Solutions By Process",
          "Software Solutions",
          "Services",
        ],
        [""],
        [""],
        [""],
        [""],
      ],
    };
  }
  render() {
    return (
      <div className="dropdown header ">
        {this.state.categories[this.props.categoryid].map((category, index) => {
          return (
            <span key={index} className="dropdown-link">
              {category}
            </span>
          );
        })}
      </div>
    );
  }
}

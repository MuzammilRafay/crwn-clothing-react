import React from "react";
import { withRouter } from "react-router-dom";
//we need history of main route there we are creating route in Homepage component but react dom provide us withRouter
// its higher order compoennt return functionality and auto return history in props don't need to prop drilling like passing the history from to parent children then children
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

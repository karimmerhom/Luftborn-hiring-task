import React from "react";
import "./statCard.scss";

export default function statCard({ stat, index }) {
  const colors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#FF8B64",
    "#55C2E6",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
    "#4BCF82",
    "#7335D2",
  ];
  return (
    <div className="statCard" style={{ backgroundColor: colors[index % 10] }}>
      <div className="statCardBottom">
        <div className="title">
          <text>{stat.category.charAt(0).toUpperCase() + stat.category.slice(1)}</text>
          <div className="dots">
          &#8226;&#8226;&#8226;
          </div>
        </div>
        <div className="statCardBody">
          <text className="price">
            {stat.price.toFixed(2) + "$"}
          </text>
          <text className="desc2">
           { stat.description.charAt(0).toUpperCase() + stat.description.slice(1)}
          </text>
          <div  className="footer">
          <text className="desc">
           { stat.description.charAt(0).toUpperCase() + stat.description.slice(1)}
          </text>
          <div className="quantity">
          <text >
          InStore
          </text>
          <text>
           120
          </text>
          </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

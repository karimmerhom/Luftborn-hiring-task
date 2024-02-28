import React from "react";
import ProfilePic from "../../assets/profile_pic.png";
import "./reportCard.scss";

export default function ReportCard() {
  return (
    <div className="reportCardBody">
      <div className="cardTop">
        <div className="picContainer">
          <img src={ProfilePic} className="cardPic" alt="profile pic" />
        </div>
        <div className="textContainer">
          <text className="txt1">Report for</text>
          <text className="txt2">Best Sales</text>
        </div>
      </div>
      <div className="cardBottom">
        <text style={{ color: "#7078C9" }}>Daily</text>{" "}
        <text style={{ color: "#FFFFFF" }}>Weekly</text>{" "}
        <text style={{ color: "#7078C9" }}>Monthly</text>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import "./ProfileInfo.css";
import Tabs from "./Tabs";

const ProfileInfo = () => {
  return (
    <div>
      <div className="profileinfo-layout">
        <div className="profileinfo-layout-l"></div>
        <div id="profileinfo-layout-r">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

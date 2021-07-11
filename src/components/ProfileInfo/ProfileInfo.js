import React, { useState, useEffect, useRef } from "react";
import "./ProfileInfo.css";
import FreelancerTabs from "./Freelancer/FreelancerTabs";
import CreatorTabs from "./Creator/CreatorTabs";
import BuyerTabs from "./Buyer/BuyerTabs";

import ProfileOverview from "./ProfileOverview";

const ProfileInfo = () => {
  return (
    <div>
      <div className="profileinfo-layout">
        <div className="profileinfo-layout-l">
          <ProfileOverview
            name="sansakar"
            number={343}
            email="daksh@gmail.com"
          />
        </div>
        <div id="profileinfo-layout-r">
          <BuyerTabs />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

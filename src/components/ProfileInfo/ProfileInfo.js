import React from "react";
import "./ProfileInfo.css";
import FreelancerTabs from "./Freelancer/FreelancerTabs";
import CreatorTabs from "./Creator/CreatorTabs";
import BuyerTabs from "./Buyer/BuyerTabs";
import { useSelector } from "react-redux";
import ProfileOverview from "./ProfileOverview";

const ProfileInfo = () => {
  const username = useSelector((state) => state.userData.username);
  const email = useSelector((state) => state.userData.email);
  const role = useSelector((state) => state.userData.role);
  return (
    <div>
      <div className="profileinfo-layout">
        <div className="profileinfo-layout-l">
          <ProfileOverview name={username} email={email} role={role} />
        </div>
        <div id="profileinfo-layout-r">
          {role === "Creator" && <CreatorTabs />}
          {role === "Freelancer" && <FreelancerTabs />}
          {role === "Brand" && <BuyerTabs />}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

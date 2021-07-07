import React, { useState, useEffect, useRef } from "react";

const ProfileOverview = (props) => {
    return (
      <div className="profile">
          <div>
              {/* Image comes here */}

          </div>
          <h1>Name {props.name}</h1>
          <h2> Email: {props.email} </h2>
          <h2>Phone number : {props.number}</h2>
      </div>
    );
  };
  
export default ProfileOverview;
import React from "react";

const Camera = () => {
  return (
    <div className="App" id="cam">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "0 0 -15px" }}
      >
        <g clip-path="url(#clip0)">
          <path
            d="M23.5762 19.5767C23.5762 20.1071 23.3655 20.6158 22.9904 20.9909C22.6153 21.3659 22.1066 21.5767 21.5762 21.5767H3.57617C3.04574 21.5767 2.53703 21.3659 2.16196 20.9909C1.78689 20.6158 1.57617 20.1071 1.57617 19.5767V8.57666C1.57617 8.04623 1.78689 7.53752 2.16196 7.16245C2.53703 6.78737 3.04574 6.57666 3.57617 6.57666H7.57617L9.57617 3.57666H15.5762L17.5762 6.57666H21.5762C22.1066 6.57666 22.6153 6.78737 22.9904 7.16245C23.3655 7.53752 23.5762 8.04623 23.5762 8.57666V19.5767Z"
            stroke="#F8F8F8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5762 17.5767C14.7853 17.5767 16.5762 15.7858 16.5762 13.5767C16.5762 11.3675 14.7853 9.57666 12.5762 9.57666C10.367 9.57666 8.57617 11.3675 8.57617 13.5767C8.57617 15.7858 10.367 17.5767 12.5762 17.5767Z"
            stroke="#F8F8F8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.576172 0.57666)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
export default Camera;

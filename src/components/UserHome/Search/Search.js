import React, { useEffect, useState } from "react";
import useStyles from "../SidebarStyles";
import Sort from "./Sort";
import UserCard from "./UserCard";
import Filters from "./Filters";
import axios from "axios";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 35%;
  left: 45%;
`;

function Search(props) {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const classes = useStyles();
  const [creatorsArray, setcreatorsArray] = useState([]);
  // const email = useSelector((state) => state.userData.email);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + "/creator/list")
      .then(async (res) => {
        setcreatorsArray(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_URL]);
  return (
    <div>
      {loading ? (
        <ClipLoader
          loading={loading}
          css={override}
          color={"#457b9d"}
          size={100}
        />
      ) : (
        <main className={classes.content}>
          <Sort
            setNewCreators={setcreatorsArray}
            creatorsArray={creatorsArray}
          />

          <div style={{ display: "grid", gridTemplateColumns: "5fr 2fr" }}>
            {creatorsArray.length !== 0 ? (
              <div
                className={classes.toolbar}
                style={{ display: "flex", flexDirection: "Column" }}
              >
                {creatorsArray &&
                  creatorsArray.map(
                    (creator, index) =>
                      creator.profileInfo && (
                        <UserCard
                          key={index}
                          name={
                            creator.profileInfo.personalInfo.firstName +
                            " " +
                            creator.profileInfo.personalInfo.lastName
                          }
                          category={creator.profileInfo.categories.Category}
                          image={creator.profileImg}
                          about={creator.profileInfo.personalInfo.about}
                          YouTube={creator.profileInfo.socialLinks.YouTube}
                          LinkedIn={creator.profileInfo.socialLinks.LinkedIn}
                          Instagram={creator.profileInfo.socialLinks.Instagram}
                          Facebook={creator.profileInfo.socialLinks.Facebook}
                          Twitter={creator.profileInfo.socialLinks.Twitter}
                          username={creator.username}
                        />
                      )
                  )}
              </div>
            ) : (
              <div>
                <h3>No user found</h3>
              </div>
            )}
            <Filters setNewCreators={setcreatorsArray} />
          </div>
        </main>
      )}
    </div>
  );
}

export default Search;

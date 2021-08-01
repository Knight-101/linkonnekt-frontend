import React, { useEffect, useState } from "react";
import useStyles from "../SidebarStyles";
import Sort from "./Sort";
import UserCard from "./UserCard";
import Filters from "./Filters";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../ProfileInfo/Assets/Loader";

function Search(props) {
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const classes = useStyles();
  const [creatorsArray, setcreatorsArray] = useState([]);
  const email = useSelector((state) => state.userData.email);
  const [creatorType, setCreatorType] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL + "/creator/list")
      .then(async (res) => {
        setcreatorsArray(res.data);
        setloading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(creatorsArray);
  return (
    <div>
      {loading ? (
        <Loader />
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
                      creator.email !== email && (
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
            <Filters
              setNewCreators={setcreatorsArray}
              creatorType={setCreatorType}
            />
          </div>
        </main>
      )}
    </div>
  );
}

export default Search;

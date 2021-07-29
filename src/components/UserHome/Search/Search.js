import React, { useEffect, useState } from "react";
import useStyles from "../SidebarStyles";
import Sort from "./Sort";
import UserCard from "./UserCard";
import Filters from "./Filters";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Search(props) {
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:8000";
  const classes = useStyles();
  const [creatorsArray, setcreatorsArray] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [creatorType, setCreatorType] = useState("");
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
  }, []);
  return (
    <main className={classes.content}>
      <Sort setNewCreators={setcreatorsArray} creatorsArray={creatorsArray} />
      {loading ? (
        <h5>Loading....</h5>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "5fr 2fr" }}>
          {creatorsArray.length !== 0 ? (
            <div
              className={classes.toolbar}
              style={{ display: "flex", flexDirection: "Column" }}
            >
              {creatorsArray &&
                creatorsArray.map((creator, index) => (
                  <UserCard
                    key={index}
                    name={
                      creator.profileInfo.personalInfo.firstName +
                      " " +
                      creator.profileInfo.personalInfo.lastName
                    }
                    category={creator.profileInfo.categories.Category}
                    image={creator.profileImg}
                    YouTube={creator.profileInfo.socialLinks.YouTube}
                    LinkedIn={creator.profileInfo.socialLinks.LinkedIn}
                    Instagram={creator.profileInfo.socialLinks.Instagram}
                    Facebook={creator.profileInfo.socialLinks.Facebook}
                    Twitter={creator.profileInfo.socialLinks.Twitter}
                    creator={creator}
                  />
                ))}
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
      )}
    </main>
  );
}

export default Search;

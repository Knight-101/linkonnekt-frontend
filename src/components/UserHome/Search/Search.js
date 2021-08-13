import React, { useEffect, useState } from "react";
import useStyles from "../SidebarStyles";
import Sort from "./Sort";
import UserCard from "./UserCard";
import Filters from "./Filters";
import axios from "axios";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "@material-ui/lab/Pagination";

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
  const [page, setPage] = useState(1);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(BASE_URL + "/creator/list", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then(async (res) => {
        setcreatorsArray(res.data);
        const len = res.data.length;
        setPageNo(Math.floor(len / 10) + 1);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [BASE_URL]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
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
                  creatorsArray
                    .slice(page * 10 - 10, page * 10)
                    .map(
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
                            Instagram={
                              creator.profileInfo.socialLinks.Instagram
                            }
                            Facebook={creator.profileInfo.socialLinks.Facebook}
                            Twitter={creator.profileInfo.socialLinks.Twitter}
                            username={creator.username}
                          />
                        )
                    )}
                <hr></hr>
                <Pagination
                  count={pageNo}
                  page={page}
                  onChange={handleChange}
                />
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

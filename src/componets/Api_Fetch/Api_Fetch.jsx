import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsPeople } from "react-icons/bs";

import { RiGitRepositoryLine } from "react-icons/ri";
import "./styles.css";

const Api_Fetch = ({ username }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(`Error ${error}`));
  }, [username]);

  return (
    <div className="contianer">
      <img className="profileImg" src={data.avatar_url} alt=""/>
      <div>
        <div className="leftContainer">
          <div className="top">
            <div className="name">{data.name}</div>
            <a
              target="_blank"
              className="username"
              href={`https://github.com/${data.login}`}
            >
              @{data.login}
            </a>
            <div className="location">{data.location}</div>
          </div>
          <div className="public_repo">
            <div className="tooltip">
              {" "}
              <RiGitRepositoryLine /> {data.public_repos}
              <span className="tooltiptext">Public Repos</span>
            </div>
          </div>
          <div className="bottom">
            <div className="follower">
              <BsPeople />
              {data.followers} followers
            </div>
            <span className="span_1">.</span>
            <div className="following">{data.following} following</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api_Fetch;

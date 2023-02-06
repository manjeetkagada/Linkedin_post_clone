import React from "react";
import "./post_view.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const ListCardView = ({ profile, login }) => {
  return (
    <div className="view">
      <div className="header">
        <div className="profile">
          <img src={profile} alt="profile_image" className="profile_image" />
        </div>
        <div className="title_info">
          <span>{login} . 1st</span>
          <span id="bio">BlockChain | Author | CEO </span>
        </div>
      </div>

      <div className="content">
        <p>
          Today I can proudly say that I am a Certified Associate Cloud
          Engineer. I've been looking forward to completing this certification
          as an essential part of my growth and am excited to be applying my new
          skills at work!
        </p>
      </div>

      <div className="image_content">
        <img
          src="https://media.licdn.com/dms/image/C5622AQE_h0lPXNok4g/feedshare-shrink_2048_1536/0/1674390840418?e=1678320000&v=beta&t=IV67aExVJgFVRx3p4HoTIfgnPtykCON-JbA0Goa-4So"
          alt="content_image"
          className="image__content"
        />
      </div>

      <hr />

      <div className="buttons">
        <ThumbUpAltOutlinedIcon className="icons" />
        <CommentOutlinedIcon className="icons" />
        <CachedOutlinedIcon className="icons" />
        <SendOutlinedIcon className="icons" />
      </div>
    </div>
  );
};

export default ListCardView;

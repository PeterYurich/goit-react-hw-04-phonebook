import React from "react";
import css from "./Profile.module.css";
import propTypes from "prop-types"

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className="label">Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className="label">Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className="label">Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: propTypes.string.isRequired, 
  tag: propTypes.string.isRequired, 
  location: propTypes.string.isRequired, 
  avatar: propTypes.string.isRequired, 
  stats: propTypes.objectOf(propTypes.number).isRequired
}

export default Profile
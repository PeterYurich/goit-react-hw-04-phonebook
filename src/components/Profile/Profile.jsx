import React from "react";
import css from "./Profile.module.css";
import PropTypes from "prop-types"

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
          <span>Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span>Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span>Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}

export default Profile
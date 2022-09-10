import React from "react";
import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import Friend from "../../components/FriendList/Friend.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></Friend>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

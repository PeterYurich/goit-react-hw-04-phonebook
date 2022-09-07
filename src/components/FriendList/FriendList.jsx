import React from "react";
import css from "./FriendList.module.css";
import propTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul class={css.friend_list}>
      {friends.map((friend) => 
        <li key={friend.id} className={css.friend_card}>
          <span
            class={friend.isOnline ? css.status_online : css.status_offline}
          >
          </span>
          <img class={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p class={css.name}>{friend.name}</p>
        </li>
      )}
    </ul>
  );
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.object)
}

export default FriendList
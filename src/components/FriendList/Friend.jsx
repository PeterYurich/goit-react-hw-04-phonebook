import React from "react"
import css from "./FriendList.module.css";
// import PropTypes from "prop-types";



const Friend = ({avatar, name, isOnline}) => {
    return (<li className={css.friend_card}>
    <span
      className={isOnline ? css.status_online : css.status_offline}
    >
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>)
}



export default Friend
import React from 'react';
// import css from "./FriendList.module.css";
import PropTypes from 'prop-types';

import {
  FriendCard,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './friend.styled';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;

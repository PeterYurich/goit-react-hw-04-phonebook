import React from 'react';
import PropTypes from 'prop-types';
import Friend from '../../components/FriendList/Friend.jsx';

import { FriendListRef } from 'components/FriendList/friend-list.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListRef>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        ></Friend>
      ))}
    </FriendListRef>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;

import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;

  padding: 15px;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 18px 3px rgba(0, 0, 0, 0.74);
  margin-bottom: 10px;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-right: 15px;

  background-color:
  ${
    (props) => {
        let color = 'black'
        if (props.isOnline) {
            color = 'green'
        } else {
            color = 'red'
        }
        return color
    }
  }
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

export const FriendName = styled.span`
  font-size: large;
  font-weight: bold;
`;

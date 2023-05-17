import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline ? 1 : 0}
            key={id}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;

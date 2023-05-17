import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
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

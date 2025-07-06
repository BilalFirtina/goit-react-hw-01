import FriendListItem from "./FriendListItem";
import clsx from "clsx";
import css from "./Friends.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.ul}>
      {/* li sayısı, dizideki nesne sayısına bağlıdır */}
      {friends.map((friend) => (
        <li key={friend.id} className={clsx(css.li)}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;

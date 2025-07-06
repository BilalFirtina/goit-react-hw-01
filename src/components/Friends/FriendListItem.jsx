import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={clsx(css.img)} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOfline)}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
};

export default FriendListItem;

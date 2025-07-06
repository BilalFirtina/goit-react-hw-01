import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div>
        <img className={css.profilePhoto} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.ul}>
        <li className={clsx(css.li, css.leftRadius)}>
          <span>Followers</span>
          <span className={css.name}>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span>Views</span>
          <span className={css.name}>{stats.views}</span>
        </li>
        <li className={clsx(css.li, css.rightRadius)}>
          <span>Likes</span>
          <span className={css.name}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

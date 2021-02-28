import PropTypes from 'prop-types';
import React from 'react';
import s from './Profile.module.css';
import defaultImage from './no-photo.png';

function Profile({ avatar, name, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={s.profileCard}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="200"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@p{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.list}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.list}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.list}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.defaultProps = {
  name: 'Unknown',
  location: 'Unknown',
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
export default Profile;

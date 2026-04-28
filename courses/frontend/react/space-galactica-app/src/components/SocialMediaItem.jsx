export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url}>
        <img src={icon} alt={icon} width="20" /> {title}
      </a>
    </li>
  );
};
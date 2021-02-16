import { useHistory } from "react-router-dom";
import { AvatarGenerator } from "random-avatar-generator";

export const generator = new AvatarGenerator();

export const avatar = generator.generateRandomAvatar();

const Avatar = () => {
  const history = useHistory();
  return (
    <div>
      <img
        style={{ width: "30px" }}
        src={avatar}
        alt="Avatar"
        onClick={() => {
          history.push("/editProfile");
        }}
      />
    </div>
  );
};

export default Avatar;

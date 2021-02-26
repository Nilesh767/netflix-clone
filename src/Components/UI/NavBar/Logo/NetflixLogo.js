import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectSubscription } from "../../../../features/userSlice";
import { toast } from "react-toastify";

const NetflixLogo = () => {
  const userSubcription = useSelector(selectSubscription);
  const history = useHistory();

  const onLogoClickHandler = () => {
    !userSubcription
      ? toast.error("You need to be Subscribed")
      : history.push("/");
  };

  return (
    <div>
      <img
        style={{ width: "100px" }}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
        onClick={onLogoClickHandler}
      />
    </div>
  );
};

export default NetflixLogo;

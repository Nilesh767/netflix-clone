import { useHistory } from "react-router-dom";

const NetflixLogo = () => {
  const history = useHistory();
  return (
    <div>
      <img
      style={{width: "100px"}}
        onClick={() => history.push("/")}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default NetflixLogo;

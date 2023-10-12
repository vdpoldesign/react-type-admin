import "./user.scss";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

const User = () => {
  //Fetch data en stuur naar enkele componen
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;

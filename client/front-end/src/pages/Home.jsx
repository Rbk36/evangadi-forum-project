import { useContext } from "react";
import { AppState } from "../routes/AppRoutes";

const Home = () => {
  const { user } = useContext(AppState);
  console.log(user);
  return (
    <div>
      <h1>Home</h1>
      <br />
      <br />
      <br />
      <h2>Welcome : {user?.username}</h2>
    </div>
  );
};

export default Home;

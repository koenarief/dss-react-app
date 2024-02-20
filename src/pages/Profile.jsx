import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a Profile page</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/">Home</Link>
    </div>
  );
};


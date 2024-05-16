import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

export const Navbar = () => {
  const navigate = useNavigate();
  const onClickHomeHandler = () => {
    navigate(ROUTES.home);
  };
  return (
    <nav className="">
      <div className="">
        <FaHome onClick={onClickHomeHandler} />
      </div>
    </nav>
  );
};
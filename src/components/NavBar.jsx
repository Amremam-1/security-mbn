import { navigations } from "../constants";
import { FaLanguage } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container bg-main">
      <div className="flex items-center justify-between h-[70px] text-white">
        <Link to="/" className="">
          <img src="/assets/Logo.png" alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center">
            {navigations.map((link) => (
              <li
                key={link.id}
                className="mr-5 uppercase text-xs font-medium max-[769px]:hidden block"
              >
                <Link to={link.path}>{link.titleEn}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 text-2xl cursor-pointer">
          <FaLanguage />
          <CiDark />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

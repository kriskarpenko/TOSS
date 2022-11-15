import useMobile from "../../utils/useMobile";
import NavBarDesktop from "./components/NavBarDesktop";
import NavBarMobile from "./components/NavBarMobile";

const NavBar = () => {
  const isMobile = useMobile();

  return isMobile ? <NavBarMobile /> : <NavBarDesktop />;
};

export default NavBar;

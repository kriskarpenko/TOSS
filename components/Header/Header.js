import NavBar from "../NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link href="./">
        <img src="./img/icons/icon.jpeg" width="40" height="40" />
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;

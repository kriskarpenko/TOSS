import styles from "../styles/Home.module.css";
import ContentMain from "./contentMain/ContentMain";
import MainMobile from "./contentMain/MainMobile";
import { useMediaQuery } from "react-responsive";

export default function Home({}) {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return <div>{isMobile ? <MainMobile /> : <ContentMain />}</div>;
}

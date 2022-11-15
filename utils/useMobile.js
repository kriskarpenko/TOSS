import { useMediaQuery } from "react-responsive";

export function useMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return isMobile;
}

export default useMobile;

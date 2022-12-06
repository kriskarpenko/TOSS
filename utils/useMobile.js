import { useMediaQuery } from "react-responsive";

export function useMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

  return isMobile;
}

export default useMobile;

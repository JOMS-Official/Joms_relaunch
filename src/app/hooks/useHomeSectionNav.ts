import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { getHomeSectionId, scrollToHomeSection } from "../utils/homeSectionNav";

export function useHomeSectionNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = useCallback(
    (to: string) => {
      const id = getHomeSectionId(to);
      if (!id) return false;

      const hash = `#${id}`;

      if (location.pathname === "/") {
        scrollToHomeSection(id);
        if (location.hash !== hash) {
          navigate({ pathname: "/", hash });
        }
        return true;
      }

      navigate({ pathname: "/", hash });
      return true;
    },
    [location.pathname, location.hash, navigate],
  );

  return { goToSection };
}

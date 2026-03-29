import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash (e.g. /#services), scroll to that element
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        return;
      }
    }
    // Only scroll to top for non-hash navigations
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

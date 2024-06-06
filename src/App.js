import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FLCommerceInfoPageDesktop from "./pages/FLCommerceInfoPageDesktop";
import FLCommerceInfoPageDesktop1 from "./pages/FLCommerceInfoPageDesktop1";
import MCPResourcesDesktop from "./pages/MCPResourcesDesktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/resources":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FLCommerceInfoPageDesktop1 />} />
      <Route path="/get-started" element={<FLCommerceInfoPageDesktop />} />
      <Route path="/resources" element={<MCPResourcesDesktop />} />
    </Routes>
  );
}
export default App;

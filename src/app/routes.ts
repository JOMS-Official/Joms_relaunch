import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import InvestorsPage from "./pages/InvestorsPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "careers", Component: CareersPage },
      { path: "blog", Component: BlogPage },
      { path: "investors", Component: InvestorsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import JobDetailPage from "./pages/JobDetailPage";
import InternshipsPage from "./pages/InternshipsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import InvestorsPage from "./pages/InvestorsPage";
import ContactPage from "./pages/ContactPage";
import TeamMemberProfilePage from "./pages/TeamMemberProfilePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import DisclaimerPage from "./pages/DisclaimerPage";
import CookiesPolicyPage from "./pages/CookiesPolicyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "careers", Component: CareersPage },
      { path: "careers/internships", Component: InternshipsPage },
      { path: "careers/:jobId", Component: JobDetailPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:postId", Component: BlogPostPage },
      { path: "investors", Component: InvestorsPage },
      { path: "contact", Component: ContactPage },
      { path: "team/:memberSlug", Component: TeamMemberProfilePage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
      { path: "disclaimer", Component: DisclaimerPage },
      { path: "cookies-policy", Component: CookiesPolicyPage },
    ],
  },
]);

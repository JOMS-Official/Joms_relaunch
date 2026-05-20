import React from "react";
import { useOutletContext } from "react-router";
import { LegalH2, LegalPageShell } from "../components/LegalPageShell";

export default function CookiesPolicyPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const st = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";

  return (
    <LegalPageShell
      darkMode={darkMode}
      title="Cookie Policy"
      metaLine="Last Updated On: January 28, 2025"
    >
      <p style={{ color: st }}>
        At JOMS Commerce & Technologies Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
        &quot;us&quot;), we use cookies and similar technologies to enhance your experience on our website. This Cookie
        Policy explains what cookies are, how we use them, and your choices regarding their use.
      </p>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>1. What Are Cookies?</LegalH2>
        <p style={{ color: st }}>
          Cookies are small text files stored on your device (computer, smartphone, or other devices) when you visit a
          website. They help websites recognize your device, store your preferences, and improve your browsing
          experience.
        </p>
        <p style={{ color: st }}>Cookies can be classified as:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Cookies that remain on your device until they expire or are deleted.
          </li>
          <li>
            <strong>First-Party Cookies:</strong> Set by the website you are visiting.
          </li>
          <li>
            <strong>Third-Party Cookies:</strong> Set by third-party services integrated into the website.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>2. Types of Cookies We Use</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Essential Cookies:</strong> Necessary for the operation of our website, such as enabling you to log
            in.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Collect information about how users interact with our website to help
            us improve its performance.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Allow us to remember your preferences and provide a more personalized
            experience.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand website traffic, user behavior, and other metrics
            using tools like Google Analytics.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Enable us to deliver targeted advertisements based on your interests
            and track ad performance.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>3. Why We Use Cookies</LegalH2>
        <p style={{ color: st }}>We use cookies to:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Improve website functionality and user experience.</li>
          <li>Analyze website performance and usage patterns.</li>
          <li>Deliver personalized content and recommendations.</li>
          <li>Manage security and prevent fraudulent activity.</li>
          <li>Display relevant advertisements and measure their effectiveness.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>4. Third-Party Cookies</LegalH2>
        <p style={{ color: st }}>Our website may include third-party cookies from services like:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Google Analytics:</strong> To analyze website traffic and usage.
          </li>
          <li>
            <strong>Social Media Platforms:</strong> To enable sharing and interaction with content.
          </li>
          <li>
            <strong>Advertising Networks:</strong> To display relevant ads.
          </li>
        </ul>
        <p style={{ color: st }}>
          These third parties may collect and use information in accordance with their own privacy policies.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>5. Managing Cookies</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Browser Settings:</strong> You can configure your browser to refuse or delete cookies.
          </li>
          <li>
            <strong>Opt-Out Options:</strong> Some third-party services, such as Google Analytics, provide tools to opt
            out of data collection.
          </li>
          <li>
            <strong>Cookie Banner:</strong> When you first visit our website, you can manage your cookie preferences
            through the cookie consent banner.
          </li>
        </ul>
        <p style={{ color: st }}>
          Please note that disabling cookies may affect the functionality of our website and limit your access to certain
          features.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>6. Your Choices</LegalH2>
        <p style={{ color: st }}>You can:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Accept or decline cookies via the cookie consent banner.</li>
          <li>Adjust your browser settings to block or delete cookies.</li>
          <li>Use third-party opt-out tools to manage advertising preferences.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>7. Updates to This Policy</LegalH2>
        <p style={{ color: st }}>
          We may update this Cookie Policy from time to time to reflect changes in technology, laws, or business
          practices. Any updates will be posted on this page with the revised effective date.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>8. Contact Information</LegalH2>
        <p style={{ color: st }}>
          If you have questions or concerns about our use of cookies, please contact us at:
        </p>
        <p className="whitespace-pre-line" style={{ color: st }}>
          JOMS Commerce & Technologies Private Limited{"\n"}
          No-592/2/635, NGEF Layout, Nagarbhavi,{"\n"}
          Bangalore North, Bangalore-560072, Karnataka, India{"\n"}
          Email:{" "}
          <a
            href="mailto:hello@joms.in"
            className="hover:opacity-90"
            style={{
              color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
            }}
          >
            hello@joms.in
          </a>
        </p>
      </section>
    </LegalPageShell>
  );
}

import React from "react";
import { Link, useOutletContext } from "react-router";
import { LegalH2, LegalPageShell } from "../components/LegalPageShell";

export default function PrivacyPolicyPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const st = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";

  return (
    <LegalPageShell
      darkMode={darkMode}
      title="Privacy Policy"
      metaLine="Last Updated On: 28th January 2025"
    >
      <p style={{ color: st }}>
        JOMS Commerce & Technologies Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
        &quot;us&quot;) values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
        your personal information when you visit our website, interact with our services, or engage with us. By using
        our website or services, you agree to the practices described in this Privacy Policy. If you do not agree,
        please refrain from using our services.
      </p>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>1. Information We Collect:</LegalH2>
        <p style={{ color: st }}>
          We collect information that you provide to us directly and automatically when you use our website or
          services. This includes:
        </p>
        <p className="font-semibold" style={{ color: st }}>
          Personal Information:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Name, email address, phone number, and address.</li>
          <li>Login credentials, including username and password.</li>
        </ul>
        <p className="font-semibold" style={{ color: st }}>
          Non-Personal Information:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Browser type, operating system, IP address, and device identifiers.</li>
          <li>Usage data, such as pages viewed, time spent on the website, and interactions with content.</li>
        </ul>
        <p className="font-semibold" style={{ color: st }}>
          Information from Third Parties:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Data from analytics tools or advertising partners.</li>
          <li>Information shared via social media platforms if you log in using those services.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>2. How We Use Your Information:</LegalH2>
        <p className="font-semibold" style={{ color: st }}>
          To Provide Services:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Manage user accounts.</li>
          <li>Provide customer support.</li>
        </ul>
        <p className="font-semibold" style={{ color: st }}>
          To Improve Our Website and Services:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Analyze website usage and user behavior.</li>
          <li>Enhance functionality and user experience.</li>
        </ul>
        <p className="font-semibold" style={{ color: st }}>
          For Marketing and Communications:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Send promotional emails, newsletters, and offers.</li>
          <li>Display personalized ads based on user preferences.</li>
        </ul>
        <p className="font-semibold" style={{ color: st }}>
          To Comply with Legal Obligations:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Meet requirements under applicable laws, such as tax or consumer protection regulations.</li>
          <li>Address fraud prevention, security, and enforcement.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>3. Sharing Your Information</LegalH2>
        <p style={{ color: st }}>We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist with marketing or analytics.
          </li>
          <li>
            <strong>Business Partners:</strong> Companies with whom we collaborate to offer joint products or services.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required to comply with legal obligations, subpoenas, or court
            orders.
          </li>
          <li>
            <strong>Merger or Acquisition:</strong> In the event of a merger, acquisition, or sale of company assets,
            your information may be transferred.
          </li>
        </ul>
        <p style={{ color: st }}>
          We will never sell your personal information to any other parties that is not listed in this agreement
          without your consent.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>4. Cookies and Tracking Technologies</LegalH2>
        <p style={{ color: st }}>
          We use cookies, web beacons, and similar technologies to collect information about your browsing behavior.
          For more details, please refer to our{" "}
          <Link to="/cookies-policy" className="underline font-medium" style={{ color: "#A78BFA" }}>
            Cookie Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>5. User Rights</LegalH2>
        <p style={{ color: st }}>
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Update inaccurate or incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> Request the deletion of your personal information, subject to legal or
            contractual obligations.
          </li>
          <li>
            <strong>Portability:</strong> Request a copy of your data in a portable format.
          </li>
          <li>
            <strong>Restriction:</strong> Restrict the processing of your personal information under certain
            conditions.
          </li>
          <li>
            <strong>Objection:</strong> Object to the processing of your personal data for direct marketing or other
            purposes.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> Revoke any consent previously given for data processing.
          </li>
        </ul>
        <p style={{ color: st }}>
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:hello@joms.in"
            className="hover:opacity-90"
            style={{
              color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
            }}
          >
            hello@joms.in
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>6. Data Security</LegalH2>
        <p style={{ color: st }}>
          We implement appropriate technical and organizational measures to safeguard your information from unauthorized
          access, disclosure, alteration, or destruction. However, no security system is impenetrable, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>7. Data Retention</LegalH2>
        <p style={{ color: st }}>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
          Privacy Policy or as required by law. Once retention periods expire, your data will be securely deleted or
          anonymized.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>8. International Data Transfers</LegalH2>
        <p style={{ color: st }}>
          If you are accessing our services from outside India, your information may be transferred to and processed in
          India or other countries where our service providers operate. By using our services, you consent to such data
          transfers.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>9. Third-Party Links</LegalH2>
        <p style={{ color: st }}>
          Our website may contain links to third-party websites or services. We are not responsible for the privacy
          practices or content of these external sites. We encourage you to review their privacy policies before
          providing personal information.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>10. Children&apos;s Privacy</LegalH2>
        <p style={{ color: st }}>
          Our products or services are not directed at children under 18 years of age. We do not knowingly collect
          personal information from children. If we discover that we have inadvertently collected such data, we will
          promptly delete it.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>11. Updates to This Privacy Policy</LegalH2>
        <p style={{ color: st }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements,
          or other circumstances. Updates will be posted on this page with a revised &quot;Effective Date.&quot; Your
          continued use of our services constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>12. Contact Information</LegalH2>
        <p style={{ color: st }}>If you have questions, concerns, or requests related to this Privacy Policy, please contact us at:</p>
        <p className="whitespace-pre-line" style={{ color: st }}>
          JOMS Commerce & Technologies Private Limited{"\n"}
          No-592/2/635, NGEF Layout, Nagarbhavi, Bangalore North,{"\n"}
          Bangalore-560072, Karnataka, India{"\n"}
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

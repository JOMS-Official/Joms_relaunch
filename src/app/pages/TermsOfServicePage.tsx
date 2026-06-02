import React from "react";
import { useOutletContext } from "react-router";
import { LegalH2, LegalPageShell } from "../components/LegalPageShell";

export default function TermsOfServicePage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const st = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";

  return (
    <LegalPageShell
      darkMode={darkMode}
      title="Terms of Service"
      metaLine="Updated On: January 28, 2025"
    >
      <p style={{ color: st }}>
        Welcome to JOMS Commerce & Technologies Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot;
        or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website,
        services, and any related content. By accessing or using our website, user(s) (referred to as &apos;you&apos;)
        agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our services.
      </p>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>1. Purpose</LegalH2>
        <p style={{ color: st }}>
          These Terms provide a framework for your relationship with JOMS Commerce & Technologies Private Limited and
          ensure that both parties understand their rights and responsibilities.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>2. User Obligations</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Eligibility:</strong> You must be at least 18 years old or have the consent of a legal guardian to
            use our services.
          </li>
          <li>
            <strong>Account Information:</strong> You agree to provide accurate, complete, and up-to-date information
            when creating an account. You are responsible for maintaining the confidentiality of your login credentials
            and all activities conducted under your account.
          </li>
          <li>
            <strong>Compliance:</strong> You agree to use our services only for lawful purposes and in compliance with
            these Terms and applicable laws.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>3. Prohibited Activities</LegalH2>
        <p style={{ color: st }}>Users are prohibited from:</p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>Engaging in any activity that violates applicable laws, regulations, or third-party rights.</li>
          <li>
            Uploading, transmitting, or sharing content that is unlawful, defamatory, obscene, or harmful.
          </li>
          <li>Exploiting the website for fraudulent activities or impersonating others.</li>
          <li>Introducing malware, viruses, or any other malicious software.</li>
          <li>Scraping, crawling, or using automated tools to extract data without permission.</li>
          <li>Attempting to bypass security measures or interfere with the website&apos;s functionality.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>4. Intellectual Property Rights</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Ownership:</strong> All content on this website, including text, graphics, logos, designs, and
            software, is the property of JOMS Commerce & Technologies Private Limited or its licensors.
          </li>
          <li>
            <strong>License to Users:</strong> We grant you a limited, non-exclusive, and revocable license to access
            and use the website for personal, non-commercial purposes.
          </li>
          <li>
            <strong>Restrictions:</strong> You may not reproduce, distribute, or modify our content without our
            explicit written consent.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>5. User-Generated Content</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Ownership of Content:</strong> Users retain their intellectual property rights over the content
            they submit, such as photos, videos, reviews, or posts.
          </li>
          <li>
            <strong>License to the Company:</strong> By submitting content, users grant the company a worldwide,
            royalty-free license to use, modify, and distribute the content within its services (for example, displaying
            it on the website or using it in marketing materials), including adjustments such as cropping images where
            necessary.
          </li>
          <li>
            <strong>Prohibited Content:</strong> You may not upload content that infringes intellectual property rights,
            contains harmful material, or violates these Terms.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>6. Disclaimers</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>No Warranties:</strong> The website and services are provided &quot;as is&quot; and &quot;as
            available.&quot; We disclaim all warranties, express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement.
          </li>
          <li>
            <strong>Service Interruptions:</strong> We are not responsible for interruptions or delays caused by factors
            beyond our control.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>7. Limitation of Liability</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Indirect Damages:</strong> To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages arising from your use of our website or services.
          </li>
          <li>
            <strong>Direct Damages:</strong> Our total liability for direct damages shall not exceed the amount paid by
            you for the use of our services, if applicable.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>8. Indemnification</LegalH2>
        <p style={{ color: st }}>
          You agree to indemnify, defend, and hold harmless JOMS Commerce & Technologies Private Limited, its officers,
          directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses
          (including legal fees) arising from your use of the website, breach of these Terms, or violation of any rights.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>9. Third-Party Links</LegalH2>
        <p style={{ color: st }}>
          Our website may contain links to third-party websites. We are not responsible for the content, policies, or
          practices of these external sites. Access them at your own risk.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>10. Dispute Resolution</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Amicable Resolution:</strong> Parties agree to attempt to resolve disputes amicably before pursuing
            legal remedies.
          </li>
          <li>
            <strong>Arbitration:</strong> Unresolved disputes shall be referred to arbitration under the Arbitration and
            Conciliation Act, 1996. The arbitration shall take place in Bangalore, Karnataka, in English, and the
            decision shall be final and binding.
          </li>
          <li>
            <strong>Jurisdiction:</strong> Any disputes not subject to arbitration shall be resolved in the courts of
            Bangalore, Karnataka.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>11. Termination</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>By the Company:</strong> We reserve the right to terminate your access to the website without prior
            notice if you violate these Terms.
          </li>
          <li>
            <strong>By the User:</strong> You may discontinue using our services at any time.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>12. Changes to Terms</LegalH2>
        <p style={{ color: st }}>
          We may update these Terms periodically. Changes will be posted on this page, and your continued use of our
          services constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>13. Miscellaneous</LegalH2>
        <ul className="list-disc pl-5 space-y-2" style={{ color: st }}>
          <li>
            <strong>Severability:</strong> If any provision of these Terms is deemed invalid, the remaining provisions
            shall remain in effect.
          </li>
          <li>
            <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and JOMS Commerce
            & Technologies Private Limited.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>14. Contact Information</LegalH2>
        <p style={{ color: st }}>
          If you have questions or concerns about these Terms, please contact us at:
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

import React from "react";
import { useOutletContext } from "react-router";
import { LegalH2, LegalPageShell } from "../components/LegalPageShell";

export default function DisclaimerPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const st = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";

  return (
    <LegalPageShell
      darkMode={darkMode}
      title="Disclaimer"
      metaLine="Last Updated On: January 28, 2025"
    >
      <p style={{ color: st }}>
        The information provided on the JOMS Commerce & Technologies Private Limited website (&quot;Website&quot;) is
        for general informational purposes only. While we strive to ensure that the information is accurate and
        up-to-date, we make no representations or warranties of any kind, express or implied, regarding the accuracy,
        adequacy, validity, reliability, availability, or completeness of any information on the Website.
      </p>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>1. No Professional Advice</LegalH2>
        <p style={{ color: st }}>
          The Website does not offer professional advice. Any reliance you place on the information provided is
          strictly at your own risk. For specific advice regarding your situation, consult a qualified professional.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>2. Limitation of Liability</LegalH2>
        <p style={{ color: st }}>
          Under no circumstances shall JOMS Commerce & Technologies Private Limited be liable for any direct, indirect,
          incidental, consequential, or punitive damages arising out of or in connection with your use of the Website,
          including but not limited to errors or omissions in the content.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>3. External Links</LegalH2>
        <p style={{ color: st }}>
          The Website may contain links to external websites. These links are provided for your convenience, and we
          are not responsible for the content, policies, or practices of these external sites.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>4. Endorsements</LegalH2>
        <p style={{ color: st }}>
          Any reference to third-party products, services, or information does not constitute an endorsement or
          recommendation by JOMS Commerce & Technologies Private Limited.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>5. Changes to Disclaimer</LegalH2>
        <p style={{ color: st }}>
          We reserve the right to amend this Disclaimer at any time. Updates will be reflected on this page, and
          continued use of the Website implies acceptance of the revised terms.
        </p>
      </section>

      <section className="space-y-4">
        <LegalH2 darkMode={darkMode}>6. Contact Information</LegalH2>
        <p style={{ color: st }}>If you have questions or concerns, contact us at:</p>
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

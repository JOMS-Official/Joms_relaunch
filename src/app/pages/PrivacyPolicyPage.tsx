import { useEffect } from "react";
import { useOutletContext } from "react-router";

const lastUpdated = "March 1, 2026";

export default function PrivacyPolicyPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading = darkMode ? "#F8FAFC" : "#020617";
  const body = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";
  const muted = darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.5)";
  const sectionTitle = darkMode ? "#F8FAFC" : "#0f172a";

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-3xl mx-auto text-left">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: "'Sora', sans-serif", color: heading }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: muted }}>
          Last updated: {lastUpdated}
        </p>

        <div
          className="h-px w-full mb-10"
          style={{
            background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        />

        <div className="space-y-10 text-[15px] leading-[1.8]" style={{ color: body }}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}>
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, submit a form,
              contact us, or otherwise communicate with us.
            </p>
            <p>
              This may include your name, email address, phone number, company name, and any other information you
              choose to provide.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}>
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process transactions,
              to send you technical notices and support messages, and to respond to your comments and questions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}>
              Information Sharing
            </h2>
            <p>
              We do not share, sell, or rent your personal information to third parties for their marketing purposes
              without your explicit consent.
            </p>
            <p>
              We may share information with service providers who perform services on our behalf, or when required by
              law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}>
              Data Security
            </h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}>
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at hello@joms.co.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

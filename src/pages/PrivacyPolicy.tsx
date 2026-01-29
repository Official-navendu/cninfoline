import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    CN InfoLine collects information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Company information</li>
                    <li>Project requirements and technical specifications</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process and respond to your inquiries</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Communicate about products, services, and events</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as required by law or to provide our services. We may share 
                    information with trusted partners who assist us in operating our website and conducting 
                    our business.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your personal information. 
                    This includes encryption, secure servers, and regular security audits. However, no method 
                    of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    5. Your Rights
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    6. Contact Us
                  </h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-foreground mt-2">
                    Email: support@cninfoline.com<br />
                    Phone: +91 96506 94923
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

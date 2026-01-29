import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground">
                    By accessing and using CN InfoLine's website and services, you accept and agree to be 
                    bound by the terms and provisions of this agreement. If you do not agree to abide by 
                    these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    2. Services
                  </h2>
                  <p className="text-muted-foreground">
                    CN InfoLine provides IT infrastructure, cloud computing, hosting, and related technology 
                    services. The specific terms of each service engagement will be outlined in individual 
                    service agreements or statements of work.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    3. User Responsibilities
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for any unlawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    4. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground">
                    All content on this website, including text, graphics, logos, images, and software, 
                    is the property of CN InfoLine and is protected by intellectual property laws. 
                    You may not reproduce, distribute, or create derivative works without our written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground">
                    CN InfoLine shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages resulting from your use of or inability to use our services. 
                    Our total liability shall not exceed the amount paid by you for the specific service 
                    giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    6. Service Level Agreements
                  </h2>
                  <p className="text-muted-foreground">
                    Specific service level commitments, including uptime guarantees and support response times, 
                    will be defined in individual service agreements. These commitments may vary based on the 
                    service tier and package selected.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    7. Termination
                  </h2>
                  <p className="text-muted-foreground">
                    Either party may terminate service agreements in accordance with the terms specified 
                    in the individual agreement. CN InfoLine reserves the right to suspend or terminate 
                    services for violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    8. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground">
                    CN InfoLine reserves the right to modify these terms at any time. We will notify users 
                    of significant changes via email or through our website. Continued use of our services 
                    after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                    9. Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    For questions regarding these terms, please contact us at:
                  </p>
                  <p className="text-foreground mt-2">
                    Email: support@cninfoline.com<br />
                    Phone: +91 96506 94923<br />
                    Address: Noida, Uttar Pradesh, India
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

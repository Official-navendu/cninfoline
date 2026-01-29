import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import faqImage from '@/assets/faq-image.jpg';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: 'What IT services does CN InfoLine provide?',
    answer: 'We provide comprehensive IT services including infrastructure setup and management, cloud solutions (IaaS, PaaS, SaaS, DaaS), networking design and implementation, web hosting, cybersecurity solutions, and enterprise IT management. Our services span from physical hardware procurement to virtual environment deployment, ensuring complete end-to-end technology solutions for businesses of all sizes.',
  },
  {
    question: 'Do you offer 24/7 technical support?',
    answer: 'Yes, we provide round-the-clock technical support for all our enterprise clients. Our dedicated team of certified IT professionals is always available to address any issues, perform emergency maintenance, and ensure your systems run smoothly at all times. We offer multiple support channels including phone, email, and remote assistance.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a diverse range of industries including Enterprise & Corporate businesses, SMEs & Startups, Educational Institutions, Healthcare Organizations, E-commerce Platforms, Financial Services, Manufacturing, and Government sectors. Our solutions are tailored to meet the specific compliance requirements, scalability needs, and security standards of each industry vertical.',
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer: 'We implement multiple layers of security including end-to-end encryption, enterprise-grade firewalls, intrusion detection and prevention systems, and conduct regular security audits and penetration testing. Our backup and disaster recovery solutions ensure your data is always protected. We maintain compliance with industry standards including ISO 27001, GDPR, HIPAA, and PCI-DSS based on your business requirements.',
  },
  {
    question: 'Can you help with cloud migration and digital transformation?',
    answer: 'Absolutely! We specialize in seamless cloud migration services and comprehensive digital transformation initiatives. Our expert team assesses your current infrastructure, develops a detailed migration strategy, and executes the transition with minimal downtime. We support migrations to AWS, Azure, Google Cloud, and hybrid cloud environments, ensuring optimal performance and cost efficiency throughout the process.',
  },
];

export default function FAQSection({ 
  faqs = defaultFAQs, 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our enterprise IT services and solutions"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-32">
              <div className="relative rounded-2xl overflow-hidden image-styled">
                <img
                  src={faqImage}
                  alt="Enterprise Data Center"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl card-shadow border border-border"
              >
                <div className="text-3xl font-display font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-start justify-between p-5 sm:p-6 bg-card rounded-xl border transition-all duration-300 text-left group ${
                    openIndex === index 
                      ? 'border-primary shadow-lg' 
                      : 'border-border hover:border-primary/50 card-shadow'
                  }`}
                >
                  <span className="font-medium text-foreground pr-4 text-sm sm:text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 py-4 text-muted-foreground text-sm sm:text-base leading-relaxed bg-card/50 rounded-b-xl border-x border-b border-primary/20 -mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import portfolioCloud from '@/assets/portfolio-cloud.jpg';
import portfolioSecurity from '@/assets/portfolio-security.jpg';
import portfolioHybrid from '@/assets/portfolio-hybrid.jpg';
import portfolioManaged from '@/assets/portfolio-managed.jpg';
import portfolioNetwork from '@/assets/portfolio-network.jpg';
import servicesInfra from '@/assets/services-infrastructure.jpg';

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Complete cloud infrastructure migration for a leading financial services company with operations across 12 countries. Migrated 500+ workloads to AWS with zero downtime, achieving 40% cost reduction and improved scalability.',
    image: portfolioCloud,
    highlights: ['500+ workloads migrated', '40% cost reduction', 'Zero downtime'],
    link: '#',
  },
  {
    title: 'Data Center Modernization',
    description: 'Designed and implemented a state-of-the-art Tier III data center for a major healthcare provider. Included redundant power systems, advanced cooling infrastructure, and N+1 network redundancy ensuring 99.99% uptime.',
    image: servicesInfra,
    highlights: ['Tier III certified', '99.99% uptime', 'HIPAA compliant'],
    link: '#',
  },
  {
    title: 'Security Infrastructure Overhaul',
    description: 'Comprehensive security assessment and implementation for a high-traffic e-commerce platform processing $50M+ annually. Achieved PCI-DSS compliance and reduced security incidents by 90% within 6 months.',
    image: portfolioSecurity,
    highlights: ['PCI-DSS certified', '90% incident reduction', '24/7 SOC'],
    link: '#',
  },
  {
    title: 'Hybrid Cloud Architecture',
    description: 'Implemented a sophisticated hybrid cloud architecture for a manufacturing company with 15 facilities. Seamless integration between on-premise legacy systems and cloud resources with automated scaling.',
    image: portfolioHybrid,
    highlights: ['15 facilities connected', 'Auto-scaling enabled', '35% efficiency gain'],
    link: '#',
  },
  {
    title: 'Managed IT Services',
    description: 'End-to-end IT management for a mid-sized enterprise with 2,000+ employees across multiple locations. Reduced IT operational costs by 35% while improving system uptime from 97% to 99.99%.',
    image: portfolioManaged,
    highlights: ['2,000+ users supported', '35% cost reduction', '99.99% uptime'],
    link: '#',
  },
  {
    title: 'Campus Network Infrastructure',
    description: 'Complete network redesign for a prestigious university campus spanning 200 acres. Deployed high-speed fiber network with WiFi 6 coverage supporting 50,000+ concurrent users and smart campus features.',
    image: portfolioNetwork,
    highlights: ['50,000+ users', 'WiFi 6 enabled', '10Gbps backbone'],
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium mb-2 block">Our Portfolio</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Projects That <span className="gradient-text">Deliver Results</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and case studies showcasing how we've helped businesses across 
              industries transform their IT infrastructure, enhance security, and achieve their technology goals 
              with measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Zig-zag Layout */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-16 sm:space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="group relative rounded-2xl overflow-hidden image-styled">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border card-shadow">
                    <span className="text-primary text-sm font-medium mb-2 block">
                      Case Study #{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs sm:text-sm font-medium text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="hero" size="lg" className="btn-glow">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">100+</div>
              <div className="text-muted-foreground text-sm sm:text-base">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">40%</div>
              <div className="text-muted-foreground text-sm sm:text-base">Avg. Cost Reduction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">99.9%</div>
              <div className="text-muted-foreground text-sm sm:text-base">Uptime Achieved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">500+</div>
              <div className="text-muted-foreground text-sm sm:text-base">Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}

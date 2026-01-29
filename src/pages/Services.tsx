import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Cloud, 
  Shield, 
  Laptop, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  Heart,
  ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import WorkingStepsSection from '@/components/sections/WorkingStepsSection';
import servicesCloud from '@/assets/services-cloud.jpg';
import servicesInfra from '@/assets/services-infrastructure.jpg';
import servicesSecurity from '@/assets/services-security.jpg';

const services = [
  {
    icon: Server,
    title: 'Infrastructure Services',
    description: 'Enterprise-grade IT infrastructure solutions designed for maximum performance, reliability, and scalability. We provide comprehensive infrastructure services that form the backbone of your digital operations, ensuring your business runs smoothly 24/7.',
    image: servicesInfra,
    features: [
      'Physical Servers & High-Performance Storage Solutions',
      'Enterprise Laptops, Desktops & Workstations',
      'Data Center Design, Build & Operations',
      'Network Devices & Advanced Configuration',
      'Hardware Procurement & Lifecycle Management',
      'Infrastructure Monitoring & Optimization',
    ],
    benefits: [
      'Reduce infrastructure costs by up to 40%',
      'Achieve 99.99% uptime guarantee',
      'Scale resources on-demand',
      'Enterprise-grade security built-in',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions that empower businesses to innovate faster, scale efficiently, and reduce operational overhead. Our cloud expertise spans all major platforms and deployment models to meet your unique requirements.',
    image: servicesCloud,
    features: [
      'Infrastructure as a Service (IaaS) - AWS, Azure, GCP',
      'Platform as a Service (PaaS) - Development Environments',
      'Software as a Service (SaaS) - Business Applications',
      'Desktop as a Service (DaaS/VDI) - Virtual Workspaces',
      'Cloud Migration Strategy & Execution',
      'Backup, Disaster Recovery & Business Continuity',
    ],
    benefits: [
      'Migrate to cloud with zero downtime',
      'Pay only for what you use',
      'Access from anywhere, anytime',
      'Automatic updates and patches',
    ],
  },
  {
    icon: Shield,
    title: 'Hosting & Security',
    description: 'Secure, reliable hosting solutions combined with enterprise-grade cybersecurity to protect your digital assets. We ensure your websites, applications, and data are always available, fast, and protected against evolving threats.',
    image: servicesSecurity,
    features: [
      'Managed Website & Application Hosting',
      'VPS & Dedicated Server Solutions',
      'Enterprise Email & Collaboration Platforms',
      'Cybersecurity Assessment & Implementation',
      'Firewall, IDS/IPS & Threat Prevention',
      '24/7 Security Monitoring & Incident Response',
    ],
    benefits: [
      'PCI-DSS, HIPAA, GDPR compliant',
      '99.9% uptime SLA guarantee',
      'Real-time threat detection',
      'Automated backup & recovery',
    ],
  },
];

const industries = [
  { name: 'Enterprise & Corporate', icon: Building2, description: 'Large-scale solutions for complex organizational needs' },
  { name: 'SMEs & Startups', icon: Laptop, description: 'Flexible, cost-effective solutions for growing businesses' },
  { name: 'Education', icon: GraduationCap, description: 'Digital learning infrastructure and campus networks' },
  { name: 'Healthcare', icon: Heart, description: 'HIPAA-compliant systems and patient data management' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Scalable platforms for online retail success' },
];

export default function Services() {
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
            <span className="text-primary font-medium mb-2 block">Our Services</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Comprehensive <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From infrastructure design to cloud migration and cybersecurity, we provide end-to-end technology 
              solutions that transform your business operations, enhance productivity, and drive sustainable growth 
              in an increasingly digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden image-styled">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-4">What We Provide:</h3>
                      <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-muted/50 rounded-xl p-4 sm:p-6 mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm">Business Benefits:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/contact">
                      <Button variant="hero" size="lg" className="btn-glow">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">Industries We Serve</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Tailored Solutions for Every Sector
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              We understand that each industry has unique challenges and requirements. Our solutions are 
              customized to meet specific compliance, security, and operational needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-5 sm:p-6 border border-border card-shadow hover:border-primary/50 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-sm sm:text-base">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Steps */}
      <WorkingStepsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </Layout>
  );
}

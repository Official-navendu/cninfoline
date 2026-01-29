import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Cloud, Shield, CheckCircle2, Users, Award, Clock, Zap, Globe, Headphones, TrendingUp } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import WorkingStepsSection from '@/components/sections/WorkingStepsSection';
import heroVideo from '@/assets/videos/tech-abstract.mp4';
import homeAboutImage from '@/assets/home-about.jpg';
import whyChooseUsImage from '@/assets/why-choose-us.jpg';
import servicesCloud from '@/assets/services-cloud.jpg';
import servicesInfra from '@/assets/services-infrastructure.jpg';
import servicesSecurity from '@/assets/services-security.jpg';

const services = [
  {
    icon: Server,
    title: 'Infrastructure Services',
    description: 'Enterprise-grade physical servers, storage solutions, data center design, and network infrastructure for organizations demanding peak performance and reliability.',
    image: servicesInfra,
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions including IaaS, PaaS, SaaS, and Desktop as a Service (DaaS/VDI) with seamless migration, management, and disaster recovery capabilities.',
    image: servicesCloud,
  },
  {
    icon: Shield,
    title: 'Hosting & Security',
    description: 'Secure web hosting, VPS, dedicated servers, enterprise email platforms, and multi-layered cybersecurity solutions with 24/7 monitoring and threat prevention.',
    image: servicesSecurity,
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Enterprise Clients' },
  { icon: Award, value: '10+', label: 'Years Excellence' },
  { icon: Server, value: '1000+', label: 'Projects Delivered' },
  { icon: Clock, value: '24/7', label: 'Expert Support' },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Enterprise-Grade Infrastructure',
    description: 'Cutting-edge hardware and software solutions designed for maximum performance, scalability, and reliability.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Technical Support',
    description: 'Round-the-clock access to certified IT professionals ready to resolve any issue with industry-leading response times.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable & Flexible Solutions',
    description: 'Modular architecture that grows with your business, from startup to enterprise, without service disruption.',
  },
  {
    icon: Shield,
    title: 'Industry-Leading Security',
    description: 'Multi-layered protection with encryption, firewalls, intrusion detection, and compliance with ISO, GDPR, and HIPAA.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over a decade of successful implementations across Fortune 500 companies, SMEs, and government organizations.',
  },
  {
    icon: Globe,
    title: 'Global Technology Partnerships',
    description: 'Certified partnerships with Microsoft, AWS, Google Cloud, Cisco, and other leading technology providers.',
  },
];

const aboutPoints = [
  'Over 10 years of enterprise IT experience with 500+ satisfied clients',
  'Team of 50+ certified professionals across cloud, networking, and security',
  'Comprehensive solutions from infrastructure to application management',
  'Tailored approaches for each industry with compliance expertise',
  'Proactive monitoring and maintenance to prevent issues before they occur',
  'Transparent pricing with no hidden costs and flexible engagement models',
];

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 video-overlay" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Enterprise IT Solutions Provider</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              Transform Your{' '}
              <span className="gradient-text">Digital Infrastructure</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              CN InfoLine delivers enterprise-grade IT infrastructure, cloud computing, networking, 
              and hosting solutions. We empower organizations to design, deploy, and manage secure, 
              scalable, and high-performance digital environments that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/about">
                <Button variant="hero" size="xl" className="w-full sm:w-auto btn-glow">
                  About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-muted-foreground text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>AWS Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Microsoft Gold Partner</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden image-styled">
                <img
                  src={homeAboutImage}
                  alt="About CN InfoLine"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl card-shadow border border-border"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years of Excellence</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-2 block">About CN InfoLine</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Trusted IT Partner for Digital Excellence & Innovation
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                CN InfoLine is a premier IT services company delivering enterprise-grade infrastructure, 
                cloud computing, networking, and hosting solutions. With over a decade of industry experience, 
                we have established ourselves as a trusted technology partner for organizations across diverse sectors.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We help businesses design, deploy, and manage secure, scalable, and high-performance 
                digital environments that not only meet today's demands but are ready for tomorrow's challenges. 
                Our commitment to excellence drives everything we do.
              </p>
              <ul className="space-y-3 mb-8">
                {aboutPoints.slice(0, 4).map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="hero" size="lg" className="btn-glow">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive IT Services & Solutions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
              End-to-end technology solutions designed to transform your business operations, 
              enhance productivity, and drive sustainable growth in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link to="/services">
                  <div className="group h-full bg-card rounded-2xl overflow-hidden border border-border card-shadow hover:border-primary/50 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="hero" size="lg" className="btn-glow">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Working Steps */}
      <WorkingStepsSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-2 block">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Success Is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With years of experience and a dedication to excellence, we provide unmatched IT solutions 
                that drive business growth and digital transformation. Our client-centric approach ensures 
                that every solution is tailored to meet your unique requirements and exceed expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card p-4 rounded-xl border border-border card-shadow hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden image-styled">
                <img
                  src={whyChooseUsImage}
                  alt="Why Choose CN InfoLine"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}

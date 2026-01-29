import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Target, Eye, Award, ArrowRight, Users, Globe, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import WorkingStepsSection from '@/components/sections/WorkingStepsSection';
import aboutTeam from '@/assets/about-team.jpg';
import aboutVision from '@/assets/about-vision.jpg';
import aboutMission from '@/assets/about-mission.jpg';
import aboutGoal from '@/assets/about-goal.jpg';

const cards = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading provider of innovative IT solutions that empower businesses to thrive in the digital age. We envision a world where technology seamlessly enables growth, efficiency, and competitive advantage for organizations of all sizes. Our goal is to be the trusted partner that helps companies navigate the complexities of digital transformation with confidence and clarity.',
    image: aboutVision,
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver enterprise-grade IT infrastructure and services that are secure, scalable, and tailored to meet the unique needs of each client. We are committed to excellence in every project, leveraging cutting-edge technologies and industry best practices to ensure our clients receive solutions that drive real business value and sustainable growth.',
    image: aboutMission,
  },
  {
    icon: Award,
    title: 'Our Goal',
    description: 'To achieve 100% client satisfaction through exceptional service delivery, cutting-edge technology solutions, and a dedicated team of professionals who go above and beyond. We measure our success by the success of our clients, continuously striving to exceed expectations and set new benchmarks for quality in the IT services industry.',
    image: aboutGoal,
  },
];

const aboutPoints = [
  'Over 10 years of enterprise IT industry experience',
  'Team of 50+ certified IT professionals',
  'Serving 500+ satisfied clients worldwide',
  'Round-the-clock 24/7 technical support',
  'Industry-leading security standards (ISO 27001)',
  'Strategic partnerships with top technology vendors',
];

const coreValues = [
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We put our clients at the center of everything we do, ensuring solutions are tailored to their unique needs.',
  },
  {
    icon: Shield,
    title: 'Uncompromising Security',
    description: 'Security is not an afterthought. We implement robust protection measures in every solution we deliver.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'We adhere to international standards and best practices to ensure world-class service delivery.',
  },
  {
    icon: Clock,
    title: 'Reliable Support',
    description: 'Our dedicated support team is available 24/7 to ensure your systems run smoothly at all times.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-2 block">About Us</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Powering Digital <span className="gradient-text">Transformation</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                CN InfoLine is a premier IT services company delivering enterprise-grade IT infrastructure, 
                cloud computing, networking, and hosting solutions. With over a decade of experience, 
                we have established ourselves as a trusted technology partner for organizations across diverse sectors.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                We help organizations design, deploy, and manage secure, scalable, and high-performance 
                digital environments that drive innovation and competitive advantage. Our commitment to 
                excellence and client satisfaction sets us apart in the industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                {aboutPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="btn-glow">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden image-styled">
                <img
                  src={aboutTeam}
                  alt="CN InfoLine Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl card-shadow border border-border"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">Our Core Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Our values define who we are and how we deliver value to our clients every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-2 block">Our Purpose</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Our vision, mission, and goals define the path we take to deliver excellence and drive client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border card-shadow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
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

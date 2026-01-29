import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 cta-gradient" />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Let's Build Something Great Together</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="relative">
              IT Infrastructure
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-foreground/30 rounded-full" />
            </span>
            ?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with CN InfoLine to unlock the full potential of your technology investments. 
            Our team of certified experts is ready to design, implement, and manage solutions 
            that drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:support@cninfoline.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Mail Us Now
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm group w-full sm:w-auto"
                >
                  Visit Contact Page
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>No Hidden Costs</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

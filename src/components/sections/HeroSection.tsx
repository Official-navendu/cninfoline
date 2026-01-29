import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  showGrid?: boolean;
  centered?: boolean;
  fullHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  children,
  backgroundImage,
  showGrid = true,
  centered = true,
  fullHeight = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        fullHeight ? 'min-h-screen' : 'pt-32 pb-20'
      } ${fullHeight ? 'flex items-center' : ''}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid Pattern */}
      {showGrid && (
        <div className="absolute inset-0 grid-pattern opacity-50" />
      )}

      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

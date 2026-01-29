import { motion } from 'framer-motion';
import { FileSearch, Lightbulb, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: 'Discovery',
    description: 'We analyze your requirements and understand your business goals to create a tailored solution.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Our experts design a comprehensive plan with the best technologies and approach for your needs.',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'We deploy and configure your solutions with minimal disruption to your operations.',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 support to ensure your systems run at peak performance.',
  },
];

export default function WorkingStepsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proven process ensures successful project delivery every time
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:translate-x-0 lg:flex lg:justify-center lg:mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg relative z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border card-shadow hover:border-primary/50 transition-all duration-300 mt-8 lg:mt-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

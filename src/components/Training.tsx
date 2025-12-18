import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Building2, Clock, CheckCircle2 } from "lucide-react";

const training = {
  title: "Front-End Development Training",
  organization: "Excellence Technology, Mohali",
  duration: "June 2024 – Sept 2024",
  highlights: [
    "3-month intensive front-end development training",
    "Focus on responsive web design principles",
    "UI/UX enhancement techniques",
    "Real-world project implementation",
    "Modern development workflows and tools",
  ],
};

export default function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase"
          >
            Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Professional <span className="gradient-text">Training</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Structured learning experiences that enhanced my practical skills
          </motion.p>
        </motion.div>

        {/* Training Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card overflow-hidden">
            {/* Header with Gradient */}
            <div className="relative p-8 pb-6 bg-gradient-to-br from-blue-500/10 to-violet-500/10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 glow-sm">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{training.title}</h3>

              {/* Organization & Duration */}
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>{training.organization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{training.duration}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 pt-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Key Highlights
              </h4>

              <ul className="space-y-3">
                {training.highlights.map((highlight, index) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Continuously seeking opportunities to learn and grow through
            <span className="text-accent"> structured training programs </span>
            and<span className="text-accent"> self-directed learning</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

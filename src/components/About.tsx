import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Target, Sparkles } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "CGPA", value: "8.17", sublabel: "B.Tech CSE" },
  { icon: Code, label: "Tech Stack", value: "6+", sublabel: "Technologies" },
  { icon: Target, label: "Projects", value: "2+", sublabel: "Completed" },
  { icon: Sparkles, label: "Focus", value: "Frontend", sublabel: "Development" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-medium text-accent mb-4 tracking-wider uppercase"
          >
            About Me
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Passionate about creating{" "}
            <span className="gradient-text">meaningful</span> digital experiences
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I'm a B.Tech Computer Science student at I.K. Gujral Punjab Technical University 
            with a strong foundation in front-end development. My journey in web development 
            has equipped me with hands-on experience in HTML, CSS, Bootstrap, JavaScript, and React. 
            I'm constantly learning and building projects that solve real-world problems while 
            exploring new technologies to expand my skill set.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="stat-card group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code while focusing on user experience. 
              Every project I undertake is an opportunity to learn something new and push my 
              boundaries as a developer.
            </p>
          </div>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              Actively seeking web  development internships to gain industry experience. 
              Continuously expanding my React expertise and exploring modern development 
              practices and tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

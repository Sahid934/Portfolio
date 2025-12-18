import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Web",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Programming & Database",
    skills: ["Python (Beginner)", "SQL"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Responsive Web Design"],
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
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
            Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A curated collection of technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
              className="glass-card p-6 md:p-8 hover-lift"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-pill cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 glass-card p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Currently Exploring</h3>
          <p className="text-muted-foreground mb-6">
            Always expanding my knowledge and staying updated with modern web technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "React"].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="px-4 py-2 rounded-full border border-dashed border-accent/50 text-accent text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

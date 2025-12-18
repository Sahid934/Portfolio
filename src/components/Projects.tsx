import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Library Management System",
    description:
      "A comprehensive library management solution with book management, student records, and issue/return tracking. Features include PYQ (Previous Year Questions) management for enhanced academic support.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    period: "Mar 2025 – Apr 2025",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "blue",
    github:'https://github.com/Khush54/LMS',
  },
  {
    title: "FitGym Website",
    description:
      "A multi-page fitness center website with dedicated sections for Home, About, and Contact. Built with a focus on clean design and smooth user navigation.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    period: "Jul 2024",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "amber",
    github:'https://github.com/Sahid934/Fit-Gym-Website',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of projects that showcase my skills and passion for web development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
              className="project-card group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image/Visual */}
                <div
                  className={`relative h-64 md:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Abstract Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-current animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-current animate-pulse delay-150" />
                    <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border-2 border-current animate-pulse delay-300" />
                  </div>
                  
                  {/* Project Number */}
                  <span className="text-[120px] md:text-[180px] font-bold text-foreground/5 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className="p-3 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:gradient-text transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sahid934"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

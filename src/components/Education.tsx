import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Universal Institute of Engineering and Technology",
    location: "Punjab, India",
    period: "Expected Aug 2026",
    grade: "CGPA: 8.17 / 10",
    isCurrent: true,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Kamla Rai College",
    location: "Bihar, India",
    period: "2021",
    grade: "Percentage: 65%",
    board: "BSEB",
    isCurrent: false,
  },
  {
    degree: "Secondary (X)",
    institution: "H.S. Sankhe Ram Das High College",
    location: "Bihar, India",
    period: "2019",
    grade: "Percentage: 77.40%",
    board: "BSEB",
    isCurrent: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30" ref={ref}>
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
            Education <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My academic path that shaped my technical foundation
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-8 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                    className={`w-4 h-4 rounded-full ${
                      item.isCurrent ? "gradient-bg glow-sm" : "bg-muted-foreground/30"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="md:ml-20">
                  <div
                    className={`glass-card p-6 md:p-8 hover-lift ${
                      item.isCurrent ? "gradient-border" : ""
                    }`}
                  >
                    {/* Current Badge */}
                    {item.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Currently Pursuing
                      </span>
                    )}

                    {/* Degree */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-secondary shrink-0">
                        <GraduationCap className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        {item.board && (
                          <span className="text-sm text-muted-foreground">({item.board})</span>
                        )}
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="text-foreground font-medium mb-4">{item.institution}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="font-medium text-foreground">{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

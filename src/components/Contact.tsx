import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "as9308974@gmail.com",
    href: "mailto:as9308974@gmail.com",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9162787967",
    href: "tel:+919162787967",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Sahid934",
    href: "https://github.com/Sahid934",
    gradient: "from-gray-500 to-gray-700",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sahid-alam",
    href: "https://www.linkedin.com/in/sahid-alam-81b23b287/",
    gradient: "from-blue-500 to-blue-700",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
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
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Build{" "}
            <span className="gradient-text">Something Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I'm actively looking for internship opportunities and would love to connect. 
            Feel free to reach out for collaborations or just a friendly chat!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <contact.icon className="w-6 h-6 text-white" />
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>

              {/* Value */}
              <div className="flex items-center gap-2">
                <p className="font-medium text-foreground truncate">{contact.value}</p>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
      </motion.div>
      </div>
    </section>
  );
}

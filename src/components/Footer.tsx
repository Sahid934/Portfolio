import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Sahid934", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sahid-alam-81b23b287/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:as9308974@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              className="text-2xl font-bold tracking-tight inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Sahid.</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">
              Building the web, one pixel at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Sahid Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

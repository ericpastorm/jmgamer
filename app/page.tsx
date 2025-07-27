'use client'

import { motion, Transition, TargetAndTransition } from 'framer-motion'
import { Github, Instagram, Twitter, Twitch, Youtube, MessageCircle } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { SKILLS, PROJECTS } from '@/lib/data'

// --- TIPO AÑADIDO ---
// Definimos un tipo para nuestras animaciones para que TypeScript esté contento
type MotionProps = {
  whileHover: TargetAndTransition;
  transition: Transition;
}

export default function HomePage() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  }

  // --- SOLUCIÓN: Añadimos el tipo a la constante ---
  const iconAnimation: MotionProps = {
    whileHover: { y: -3, scale: 1.1 },
    transition: { type: "spring", stiffness: 300 },
  }
  
  // Añadimos tipo también aquí para ser consistentes
  const cardAnimation: MotionProps = {
    whileHover: { y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
    transition: { type: 'spring', stiffness: 300 },
  }

  return (
    <main className="max-w-4xl mx-auto p-8 antialiased">
      {/* SECCIÓN HERO */}
      <motion.section
        id="hero"
        className="min-h-screen flex flex-col justify-center text-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text bg-gradient-to-r from-primary to-foreground">
          Hola, soy Jmgamer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Desarrollador Full Stack & Entusiasta Tecnológico
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <motion.a href="https://github.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" {...iconAnimation}>
            <Github className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.instagram.com/jmgamer.1199/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" {...iconAnimation}>
            <Instagram className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://twitter.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" {...iconAnimation}>
            <Twitter className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.twitch.tv/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="Twitch" title="Twitch" {...iconAnimation}>
            <Twitch className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.youtube.com/@_JmGamer1199_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" {...iconAnimation}>
            <Youtube className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://discord.gg/Ap8MPDX" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" {...iconAnimation}>
            <MessageCircle className="text-foreground hover:text-primary" />
          </motion.a>
        </div>
      </motion.section>

      {/* SECCIÓN SOBRE MÍ */}
      <motion.section id="about" className="py-24" {...sectionAnimation}>
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Mí</h2>
        <p className="text-center max-w-2xl mx-auto text-muted-foreground">
          Soy un desarrollador de software con una profunda pasión por construir aplicaciones web intuitivas, eficientes y visualmente atractivas. Me encanta resolver problemas complejos y aprender continuamente sobre nuevas tecnologías para llevar mis ideas a la realidad digital.
        </p>
      </motion.section>

      {/* SECCIÓN DE HABILIDADES */}
      <motion.section id="skills" className="py-24" {...sectionAnimation}>
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div 
              key={category} 
              className="bg-card p-6 rounded-lg border border-border"
              {...cardAnimation}
            >
              <h3 className="font-bold text-lg mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECCIÓN DE PROYECTOS */}
      <motion.section id="projects" className="py-24" {...sectionAnimation}>
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.section>

      {/* SECCIÓN DE CONTACTO (FOOTER) */}
      <motion.footer id="contact" className="text-center py-16" {...sectionAnimation}>
        <h2 className="text-3xl font-bold text-center mb-4">Ponte en Contacto</h2>
        <p className="text-muted-foreground mb-6">
          Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
        </p>
        <motion.a
          href="mailto:jmdeveloper1199@gmail.com"
          className="text-lg font-semibold text-primary hover:underline"
          whileHover={{ letterSpacing: "0.5px" }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          jmdeveloper1199@gmail.com
        </motion.a>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <motion.a href="https://github.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" {...iconAnimation}>
            <Github className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.instagram.com/jmgamer.1199/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" {...iconAnimation}>
            <Instagram className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://twitter.com/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)" {...iconAnimation}>
            <Twitter className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.twitch.tv/jmgamer1199" target="_blank" rel="noopener noreferrer" aria-label="Twitch" title="Twitch" {...iconAnimation}>
            <Twitch className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://www.youtube.com/@_JmGamer1199_" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" {...iconAnimation}>
            <Youtube className="text-foreground hover:text-primary" />
          </motion.a>
          <motion.a href="https://discord.gg/Ap8MPDX" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" {...iconAnimation}>
            <MessageCircle className="text-foreground hover:text-primary" />
          </motion.a>
        </div>
         <p className="text-sm text-muted-foreground mt-12">© {new Date().getFullYear()} Eric Pastor. Todos los derechos reservados.</p>
      </motion.footer>
    </main>
  )
}
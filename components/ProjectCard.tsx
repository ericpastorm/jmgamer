'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, FolderDown, ChevronDown } from 'lucide-react'

// Tipos
type DownloadLink = {
  label: string;
  url: string;
}

type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  imageUrl?: string
  liveUrl?: string
  // --- CAMBIO 1: Hacemos 'repoUrl' opcional añadiendo '?' ---
  repoUrl?: string
  downloads?: DownloadLink[]
}

export function ProjectCard({ title, description, tags, imageUrl, liveUrl, repoUrl, downloads }: ProjectCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const linkAnimation = {
    whileHover: { y: -2, scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden"
    >
      {/* Sección de la imagen (sin cambios) */}
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image src={imageUrl} alt={`Vista previa del proyecto ${title}`} fill className="object-cover" />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-border/50">
          {/* Enlace de Demo (sin cambios) */}
          {liveUrl && (
            <motion.a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-foreground hover:text-primary" title="Ver demo en vivo" {...linkAnimation}>
              <ExternalLink size={16} />
              Demo
            </motion.a>
          )}

          {/* --- CAMBIO 2: Mostramos el botón de Código solo si 'repoUrl' existe --- */}
          {repoUrl && (
            <motion.a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-foreground hover:text-primary" title="Ver repositorio en GitHub" {...linkAnimation}>
              <Github size={16} />
              Código
            </motion.a>
          )}
          
          {/* Lógica de descarga (sin cambios) */}
          {downloads && downloads.length > 0 && (
            <>
              {downloads.length === 1 ? (
                <motion.a href={downloads[0].url} download className="flex items-center gap-1 text-sm text-foreground hover:text-primary" title={downloads[0].label} {...linkAnimation}>
                  <FolderDown size={16} />
                  {downloads[0].label}
                </motion.a>
              ) : (
                <div className="relative">
                  <motion.button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-1 text-sm text-foreground hover:text-primary" {...linkAnimation}>
                    <FolderDown size={16} />
                    Descargar
                    <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  {isDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-full mb-2 w-max rounded-md border border-border/20 shadow-lg z-10 overflow-hidden bg-card/80 backdrop-blur-sm">
                      <ul className="py-1">
                        {downloads.map((download) => (
                          <li key={download.label}>
                            <a href={download.url} download className="block px-4 py-2 text-sm text-foreground hover:bg-muted/50" onClick={() => setIsDropdownOpen(false)}>
                              {download.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
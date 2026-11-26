// Edita aquí toda la información del portafolio.
import sigoaImg from "@/assets/sigoa.jpg";
import badhabitsImg from "@/assets/badhabits.jpg";
import photoAsset from "@/assets/noe-herrera.jpg.asset.json";

export const profile = {
  name: "Noe Herrera",
  role: "Desarrollador de Software | Full Stack Developer",
  intro:
    "Soy estudiante de Ingeniería en Desarrollo y Gestión de Software, con experiencia práctica en desarrollo de aplicaciones web, implementación de APIs REST y gestión de bases de datos. Me interesa participar en proyectos reales, desarrollar soluciones tecnológicas y continuar fortaleciendo mis habilidades profesionales.",
  // Ruta de la foto (ej. importada desde src/assets). null = espacio reservado.
  photo: photoAsset.url as string | null,
  // Ruta del CV en /public (ej. "/cv-noe-herrera.pdf"). null = botón deshabilitado.
  cvUrl: null as string | null,
  phone: "220 155 7763",
  email: "23302056@utfv.edu.mx",
  location: "Tepotzotlán, Estado de México",
  github: "https://github.com/23302056-byte",
};

export const about = [
  "Soy estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica Fidel Velázquez.",
  "Tengo experiencia desarrollando aplicaciones web, trabajando con APIs REST, bases de datos relacionales y tecnologías modernas de frontend y backend.",
  "Me interesa especialmente el desarrollo Full Stack, la creación de aplicaciones web y la implementación de soluciones tecnológicas.",
];

export const education = {
  school: "Universidad Tecnológica Fidel Velázquez (UTFV)",
  degree: "Ingeniería en Desarrollo y Gestión de Software",
  period: "2023 – 2027",
};

export type SkillGroup = { title: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { title: "Lenguajes de programación", items: ["JavaScript", "TypeScript", "Java", "Python", "PHP"] },
  { title: "Desarrollo web", items: ["HTML5", "CSS3", "Bootstrap", "Angular", "React", "Node.js", "Express"] },
  { title: "Bases de datos y almacenamiento", items: ["MySQL", "SQL", "IndexedDB", "Cache Storage"] },
  { title: "Herramientas", items: ["Git", "GitHub", "Postman", "Chrome DevTools", "npm", "Angular CLI"] },
  { title: "Otros conocimientos", items: ["APIs REST", "Progressive Web Apps (PWA)", "JWT", "Autenticación por roles"] },
];

export type Project = {
  name: string;
  subtitle: string;
  date: string;
  description: string;
  features: string[];
  tech: string[];
  image: string | null;
  liveUrl: string | null;
  codeUrl: string | null;
};

export const projects: Project[] = [
  {
    name: "SIGOA",
    subtitle: "Sistema Integral de Gestión de Obras y Arquitectura",
    date: "Septiembre 2026",
    description:
      "Desarrollé los componentes de la interfaz y la API REST, participando como desarrollador principal de la aplicación.",
    features: [
      "Implementación del funcionamiento offline.",
      "Sincronización de datos en campo mediante Angular Service Worker e IndexedDB.",
      "Módulo de autenticación segura por roles mediante JWT.",
      "Sistema de notificaciones push.",
    ],
    tech: ["Angular", "Node.js", "Express", "MySQL", "PWA", "IndexedDB", "JWT"],
    image: sigoaImg,
    liveUrl: null,
    codeUrl: "https://github.com/23302056-byte/sigoa",
  },
  {
    name: "BAD HABITS",
    subtitle: "Catálogo Web E-commerce",
    date: "Septiembre – diciembre 2025",
    description:
      "Desarrollé un catálogo web interactivo para la digitalización de productos e integré módulos de contacto directo vía correo electrónico y WhatsApp para canalizar pedidos.",
    features: [
      "Catálogo interactivo de productos.",
      "Gestión dinámica de inventarios.",
      "Administración de precios y categorías.",
      "Base de datos relacional.",
      "Integración de contacto mediante correo electrónico y WhatsApp.",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "SQL", "Git"],
    image: badhabitsImg,
    liveUrl: "https://badhabits.com.mx/",
    codeUrl: null,
  },
];

export const softSkills = ["Trabajo en equipo", "Metodologías ágiles", "Comunicación técnica", "Resolución de problemas"];

export const languages = [{ name: "Español", level: "Nativo" }];

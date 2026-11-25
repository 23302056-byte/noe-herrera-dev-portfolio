import type { IconType } from "react-icons";
import {
  FaJs, FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaAngular, FaReact, FaNodeJs,
  FaDatabase, FaHdd, FaGitAlt, FaGithub, FaChrome, FaNpm, FaTerminal, FaServer, FaMobileAlt,
  FaKey, FaUserShield, FaUsers, FaSyncAlt, FaComments, FaPuzzlePiece, FaCode,
} from "react-icons/fa";
import { SiTypescript, SiExpress, SiMysql, SiPostman } from "react-icons/si";

const map: Record<string, IconType> = {
  JavaScript: FaJs, TypeScript: SiTypescript, Java: FaJava, Python: FaPython, PHP: FaPhp,
  HTML5: FaHtml5, CSS3: FaCss3Alt, Bootstrap: FaBootstrap, Angular: FaAngular, React: FaReact,
  "Node.js": FaNodeJs, Express: SiExpress, MySQL: SiMysql, SQL: FaDatabase, IndexedDB: FaDatabase,
  "Cache Storage": FaHdd, Git: FaGitAlt, GitHub: FaGithub, Postman: SiPostman, "Chrome DevTools": FaChrome,
  npm: FaNpm, "Angular CLI": FaTerminal, "APIs REST": FaServer, "Progressive Web Apps (PWA)": FaMobileAlt,
  PWA: FaMobileAlt, JWT: FaKey, "Autenticación por roles": FaUserShield,
  "Trabajo en equipo": FaUsers, "Metodologías ágiles": FaSyncAlt, "Comunicación técnica": FaComments,
  "Resolución de problemas": FaPuzzlePiece,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? FaCode;
  return <Icon className={className} aria-hidden />;
}

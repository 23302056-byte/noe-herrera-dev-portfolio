import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaDownload, FaEnvelope, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaCode, FaGraduationCap, FaLanguage, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import { profile, about, education, skillGroups, projects, softSkills, languages, type Project } from "@/data/portfolio";
import { TechIcon } from "@/components/portfolio/icons";
import { Reveal, Section, Btn } from "@/components/portfolio/ui";

const title = "Noe Herrera — Full Stack Developer | Portafolio";
const desc = "Portafolio de Noe Herrera, estudiante de Ingeniería en Desarrollo y Gestión de Software (UTFV). Proyectos Full Stack con Angular, Node.js, Express y MySQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["sobre-mi", "Sobre mí"], ["habilidades", "Habilidades"], ["proyectos", "Proyectos"], ["experiencia", "Experiencia"], ["contacto", "Contacto"],
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-mono text-sm font-semibold"><span className="text-primary">&lt;</span>NH<span className="text-primary"> /&gt;</span></a>
        <ul className="hidden gap-8 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</a></li>
          ))}
        </ul>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">{open ? <FaTimes /> : <FaBars />}</button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-4 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block py-2 text-muted-foreground hover:text-foreground">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="hero-glow" aria-hidden />
      <div className="grid-bg" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-success animate-pulse" /> Disponible para prácticas profesionales
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            NOE <span className="text-gradient">HERRERA</span>
          </h1>
          <p className="mt-4 font-mono text-base text-primary md:text-lg">Desarrollador de Software | Full Stack Developer</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#proyectos"><FaCode /> Ver mis proyectos</Btn>
            <Btn href={profile.cvUrl} variant="ghost" download><FaDownload /> Descargar CV</Btn>
          </div>
        </Reveal>
        <Reveal delay={150} className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="photo-frame">
            {profile.photo ? (
              <img src={profile.photo} alt="Noe Herrera" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl bg-card text-center">
                <span className="text-gradient text-6xl font-bold">NH</span>
                <span className="mt-3 font-mono text-xs text-muted-foreground">fotografía profesional</span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  if (p.placeholder) {
    return (
      <Reveal>
        <article className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/30 p-10 text-center">
          <div className="flex size-14 items-center justify-center rounded-full border border-border text-primary"><FaPlus /></div>
          <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.description}</p>
        </article>
      </Reveal>
    );
  }
  const reverse = i % 2 === 1;
  return (
    <Reveal>
      <article className="card-hover group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2">
        <div className={`relative overflow-hidden ${reverse ? "md:order-2" : ""}`}>
          {p.image && <img src={p.image} alt={`Vista de ${p.name}`} loading="lazy" width={1280} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
          <span className="absolute left-4 top-4 rounded-md bg-background/80 px-2 py-1 font-mono text-xs text-primary backdrop-blur">0{i + 1}</span>
        </div>
        <div className="flex flex-col p-7 md:p-9">
          <p className="font-mono text-xs text-muted-foreground">{p.date}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">{p.name}</h3>
          <p className="text-sm text-primary">{p.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {p.features.map((f) => (<li key={f} className="flex gap-2"><span className="text-accent-violet">▹</span>{f}</li>))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs">
                <TechIcon name={t} className="text-primary" /> {t}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            <Btn href={p.codeUrl} variant="ghost" external><FaGithub /> Ver código</Btn>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />

        <Section id="sobre-mi" index="01" title="Sobre mí">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
            <Reveal className="space-y-4 leading-relaxed text-muted-foreground">
              {about.map((t) => <p key={t}>{t}</p>)}
            </Reveal>
            <Reveal delay={120} className="space-y-4">
              <div className="card-hover rounded-2xl border border-border bg-card p-6">
                <FaGraduationCap className="text-2xl text-primary" />
                <h3 className="mt-3 font-semibold">{education.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{education.degree}</p>
                <p className="mt-3 font-mono text-xs text-accent-violet">{education.period}</p>
              </div>
              <div className="card-hover rounded-2xl border border-border bg-card p-6">
                <FaLanguage className="text-2xl text-primary" />
                <h3 className="mt-3 font-semibold">Idiomas</h3>
                {languages.map((l) => <p key={l.name} className="mt-1 text-sm text-muted-foreground">{l.name}: <span className="text-foreground">{l.level}</span></p>)}
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="habilidades" index="02" title="Habilidades técnicas">
          <div className="space-y-10">
            {skillGroups.map((g) => (
              <Reveal key={g.title}>
                <h3 className="mb-4 font-mono text-sm text-muted-foreground">// {g.title}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {g.items.map((s) => (
                    <div key={s} className="card-hover flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4">
                      <TechIcon name={s} className="shrink-0 text-2xl text-primary" />
                      <span className="text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="proyectos" index="03" title="Proyectos destacados">
          <div className="space-y-10">{projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}</div>
        </Section>

        <Section id="experiencia" index="04" title="Experiencia y habilidades profesionales">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {softSkills.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="card-hover flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground"><TechIcon name={s} className="text-xl" /></div>
                  <span className="font-medium">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contacto" index="05" title="Contacto">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="hero-glow opacity-60" aria-hidden />
              <div className="relative grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">¿Trabajamos juntos?</h3>
                  <p className="mt-3 text-muted-foreground">Busco oportunidades laborales y prácticas profesionales en desarrollo Full Stack.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Btn href={`mailto:${profile.email}`}><FaEnvelope /> Enviar correo</Btn>
                    <Btn href={profile.github} variant="ghost" external><FaGithub /> Visitar GitHub</Btn>
                    <Btn href={profile.cvUrl} variant="ghost" download><FaDownload /> Descargar CV</Btn>
                  </div>
                </div>
                <ul className="space-y-4 text-sm">
                  {[
                    [FaEnvelope, profile.email, `mailto:${profile.email}`],
                    [FaPhoneAlt, profile.phone, `tel:+52${profile.phone.replace(/\s/g, "")}`],
                    [FaMapMarkerAlt, profile.location, null],
                    [FaGithub, profile.github.replace("https://", ""), profile.github],
                  ].map(([Icon, text, href]) => {
                    const I = Icon as typeof FaEnvelope;
                    const inner = <><span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary"><I /></span><span className="break-all">{text as string}</span></>;
                    return <li key={text as string}>{href ? <a href={href as string} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition-colors hover:text-primary">{inner}</a> : <div className="flex items-center gap-4">{inner}</div>}</li>;
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Full Stack Developer
      </footer>
    </div>
  );
}

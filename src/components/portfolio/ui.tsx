import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? "reveal-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-sm text-primary">{index} /</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <div className="mt-4 h-px w-24 bg-gradient-accent" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

type BtnProps = { href?: string | null; children: ReactNode; variant?: "primary" | "ghost"; download?: boolean; external?: boolean };
export function Btn({ href, children, variant = "primary", download, external }: BtnProps) {
  const base = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-gradient-accent text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-glow-lg"
    : "border border-border bg-card/40 text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary";
  if (!href) {
    return <span aria-disabled className={`${base} cursor-not-allowed border border-dashed border-border text-muted-foreground`} title="Disponible pronto">{children}</span>;
  }
  return (
    <a href={href} download={download || undefined} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

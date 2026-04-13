import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

const FEATURES = [
  {
    title: "Calendario semanal",
    desc: "Organizá tus rutinas día por día de forma visual e intuitiva.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Peso récord",
    desc: "Registrá el máximo peso levantado por ejercicio y seguí tu evolución.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Series y repeticiones",
    desc: "Controlá cada ejercicio con series, reps y carga en un solo lugar.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Cuenta segura",
    desc: "Login con JWT. Tus rutinas son privadas y accesibles desde cualquier lugar.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Rutinas personalizadas",
    desc: "Creá rutinas a medida para cada día según tus objetivos.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Multi-dispositivo",
    desc: "Accedé desde tu celular, tablet o PC sin perder ningún dato.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-emerald-400 fill-none stroke-[1.5]">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Registrate",
    desc: "Creá tu cuenta con email y contraseña en segundos. Sin tarjeta de crédito.",
  },
  {
    num: "02",
    title: "Armá tu rutina",
    desc: "Elegí los días que entrenás y añadí tus ejercicios con todos los detalles.",
  },
  {
    num: "03",
    title: "Registrá y superáte",
    desc: "Anotá cada sesión, controlá tu progreso y batí tus propios récords de peso.",
  },
];

const STATS = [
  { value: "7", label: "Días de la semana" },
  { value: "∞", label: "Ejercicios por rutina" },
  { value: "100%", label: "Gratis para empezar" },
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#f0ede6] min-h-screen font-sans">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0acc] border-b border-[#1e1e1e] backdrop-blur-md">
        <span className="text-emerald-400 font-semibold text-lg tracking-tight">
          FitCalendar
        </span>

        <ul className="hidden md:flex gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs text-[#888] hover:text-[#f0ede6] tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:block text-xs text-[#888] hover:text-[#f0ede6] transition-colors duration-200 px-3 py-2"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="text-xs bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-300 transition-all duration-200 hover:-translate-y-px"
          >
            Registrarse
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="inicio" className="relative min-h-[520px] flex items-end overflow-hidden">

        {/* imagen de fondo derecha — reemplazá el div por un <img> con tu foto */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[52%] bg-[#141414] flex items-center justify-center">
            {/* PLACEHOLDER — reemplazá con: <img src="/hero-photo.jpg" alt="atleta" className="w-full h-full object-cover opacity-60" /> */}
            <div className="flex flex-col items-center gap-3 opacity-20">
              <div className="w-20 h-20 rounded-full bg-[#1e1e1e]" />
              <div className="w-14 h-24 rounded-lg bg-[#1a1a1a]" />
              <div className="flex gap-3">
                <div className="w-6 h-20 rounded-lg bg-[#1e1e1e]" />
                <div className="w-6 h-20 rounded-lg bg-[#1e1e1e]" />
              </div>
            </div>

            {/* badge de peso récord */}
            <div className="absolute bottom-5 right-5 bg-[#0d1f18] border border-emerald-900 rounded-xl px-4 py-3 text-right">
              <p className="text-[10px] text-emerald-400 tracking-widest mb-1">PESO RÉCORD HOY</p>
              <p className="text-2xl font-semibold text-[#f0ede6]">120 kg</p>
              <p className="text-[10px] text-[#555]">Peso muerto</p>
            </div>
          </div>

          {/* overlay gradiente izquierda */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 md:via-[#0a0a0a]/70 to-transparent" />
        </div>

        {/* contenido hero */}
        <div className="relative z-10 max-w-xl px-6 md:px-12 pb-16 pt-24 md:pt-0">
          <p className="text-[10px] tracking-[0.15em] text-emerald-400 mb-4">
            TU ENTRENAMIENTO, ORGANIZADO
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] mb-5">
            Planificá.<br />
            Registrá.<br />
            <span className="text-emerald-400">Superáte.</span>
          </h1>
          <p className="text-sm text-[#888] leading-relaxed mb-8 max-w-sm">
            Creá rutinas por día de la semana, registrá cada ejercicio con
            series, repeticiones y tus pesos récord. Todo en un solo lugar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/register"
              className="bg-emerald-400 text-emerald-950 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-emerald-300 transition-all duration-200 hover:-translate-y-px"
            >
              Empezar gratis
            </Link>
            <a
              href="#como-funciona"
              className="text-sm text-[#f0ede6] border border-[#333] px-6 py-3 rounded-lg hover:border-[#555] transition-colors duration-200"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 border-t border-b border-[#1a1a1a]">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-5 px-4 text-center ${i < STATS.length - 1 ? "border-r border-[#1a1a1a]" : ""}`}
          >
            <p className="text-2xl sm:text-3xl font-semibold text-emerald-400">{s.value}</p>
            <p className="text-[10px] text-[#555] mt-1 tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Sobre la app ── */}
      <section id="inicio" className="grid md:grid-cols-2 border-b border-[#1a1a1a]">

        {/* imagen lado izquierdo — reemplazá con <img> real */}
        <div className="bg-[#141414] border-b md:border-b-0 md:border-r border-[#1a1a1a] flex items-center justify-center min-h-[260px] md:min-h-[360px]">
          {/* PLACEHOLDER — reemplazá con: <img src="/about-photo.jpg" alt="entrenamiento" className="w-full h-full object-cover" /> */}
          <div className="flex gap-3 items-end p-8">
            <div className="w-20 h-36 bg-[#1e1e1e] rounded-xl" />
            <div className="w-20 h-28 bg-[#1a1a1a] rounded-xl" />
            <div className="w-20 h-32 bg-[#1e1e1e] rounded-xl" />
          </div>
        </div>

        {/* texto */}
        <div className="flex flex-col justify-center px-8 md:px-12 py-12">
          <p className="text-[10px] tracking-[0.12em] text-emerald-400 mb-3">SOBRE LA APP</p>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
            Diseñada para quienes<br className="hidden sm:block" /> entrenan en serio
          </h2>
          <p className="text-sm text-[#777] leading-relaxed mb-6">
            FitCalendar te permite organizar tu semana de entrenamiento de forma
            simple y visual. Asigná ejercicios a cada día, controlá tu progreso
            y batí tus propios récords de peso.
          </p>
          <Link
            to="/register"
            className="self-start text-sm text-emerald-400 border border-emerald-800 px-5 py-2.5 rounded-lg hover:bg-emerald-950 transition-colors duration-200"
          >
            Conocer más
          </Link>
        </div>
      </section>

      {/* ── Características ── */}
      <section id="caracteristicas" className="px-6 md:px-12 py-16 border-b border-[#1a1a1a]">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.12em] text-emerald-400 mb-2">CARACTERÍSTICAS</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">Todo lo que necesitás</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-emerald-900 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0d1f18] border border-emerald-950 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#f0ede6] mb-2">{f.title}</h3>
              <p className="text-xs text-[#666] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section id="como-funciona" className="px-6 md:px-12 py-16 border-b border-[#1a1a1a]">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.12em] text-emerald-400 mb-2">CÓMO FUNCIONA</p>
          <h2 className="text-2xl sm:text-3xl font-semibold">En tres pasos</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold text-emerald-900">{s.num}</span>
                {i < STEPS.length - 1 && (
                  <div className="hidden sm:block flex-1 h-px bg-[#1e1e1e]" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-[#f0ede6]">{s.title}</h3>
              <p className="text-xs text-[#666] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section id="contacto" className="px-6 md:px-12 py-20 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
          Empezá a entrenar<br className="hidden sm:block" /> con orden
        </h2>
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          Gratis, sin tarjeta de crédito. Creá tu cuenta en segundos<br className="hidden sm:block" />
          y armá tu primera rutina hoy.
        </p>
        <Link
          to="/register"
          className="inline-block bg-emerald-400 text-emerald-950 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-emerald-300 transition-all duration-200 hover:-translate-y-px"
        >
          Crear cuenta gratis
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 md:px-12 py-5 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-emerald-400 font-semibold text-sm">FitCalendar</span>
        <span className="text-[10px] text-[#444]">2025 · Todos los derechos reservados</span>
      </footer>
    </div>
  );
}
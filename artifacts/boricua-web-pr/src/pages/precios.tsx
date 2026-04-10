import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, MapPin, Plus, Zap, Users, Monitor, Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PreciosPage() {
  const addons = [
    {
      title: "Página adicional",
      price: "+$50",
      unit: "por página",
      desc: "¿Necesitas una página extra? La añadimos sin problema.",
    },
    {
      title: "Funcionalidad interactiva",
      price: "+$150",
      unit: "por función/página",
      desc: "Reservas, pedidos en línea, formularios avanzados, sistemas de citas — lo que tu negocio necesite.",
    },
    {
      title: "Google Business Profile",
      price: "+$50",
      unit: "configuración completa",
      desc: "Aparece en Google Maps cuando los turistas buscan negocios como el tuyo cerca.",
    },
  ];

  const valuePoints = [
    { icon: Users, text: "Más clientes encontrándote en línea" },
    { icon: Monitor, text: "Un sitio web diseñado para convertir visitantes en ventas" },
    { icon: Star, text: "Presencia profesional para turistas y locales" },
    { icon: Zap, text: "Fácil de usar desde cualquier teléfono" },
  ];

  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Planes simples para llevar tu negocio al{" "}
            <span className="text-secondary">próximo nivel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-10 max-w-xl mx-auto"
          >
            Páginas web diseñadas para atraer clientes y aumentar tus ventas en Puerto Rico.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg shadow-accent/30 hover:scale-105"
              data-testid="hero-cta-button"
            >
              Solicita tu página web
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            {...fadeUp}
            className="bg-white rounded-3xl shadow-2xl border-2 border-primary overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground text-center py-3 text-sm font-bold tracking-widest uppercase">
              Paquete Principal
            </div>
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900">Página Web Básica</h2>
                  <p className="text-muted-foreground mt-2 text-lg">
                    Todo lo que necesitas para tener presencia profesional en línea.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-6xl font-black text-slate-900">$400</div>
                  <div className="text-muted-foreground font-medium">pago único</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "5 páginas (Inicio, Sobre Nosotros, Servicios, Portafolio, Contacto)",
                  "Diseño moderno y optimizado para móviles",
                  "Formulario de contacto básico",
                  "Integración con Google Maps",
                  "SEO básico (títulos y descripciones)",
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-secondary shrink-0 mt-0.5" size={22} />
                    <span className="text-slate-700 text-lg">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contacto"
                className="block w-full text-center bg-accent hover:bg-accent/90 text-white font-bold text-xl py-5 rounded-2xl transition-all shadow-lg shadow-accent/25 hover:scale-[1.02]"
                data-testid="main-cta-button"
              >
                Empezar ahora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Servicios adicionales
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Personaliza tu sitio web según lo que tu negocio necesita.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-border rounded-2xl p-7 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-primary">
                  <Plus size={20} className="shrink-0" />
                  <span className="font-bold text-2xl text-slate-900">{addon.price}</span>
                  <span className="text-sm text-muted-foreground">{addon.unit}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{addon.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 px-4 bg-slate-950 text-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              ¿Qué estás obteniendo{" "}
              <span className="text-secondary">realmente</span>?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePoints.map((point, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="bg-secondary/20 text-secondary p-3 rounded-xl shrink-0">
                  <point.icon size={28} />
                </div>
                <span className="text-lg font-semibold text-white">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Simplicity */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Simple. Claro.{" "}
              <span className="text-primary">Sin complicaciones.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              No pagas por cosas que no necesitas. Solo por lo que te ayuda a crecer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary to-teal-700 text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            ¿Listo para llevar tu negocio online?
          </motion.h2>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-xl px-12 py-5 rounded-full transition-all shadow-xl shadow-black/20 hover:scale-105 mb-5"
              data-testid="final-cta-button"
            >
              Quiero mi página web
            </Link>
            <p className="text-white/70 text-base font-medium tracking-wide mt-4">
              Espacios limitados cada mes.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="text-center py-6 px-4 text-sm text-muted-foreground bg-slate-50">
        * Hosting y dominio no están incluidos. Cuestan aprox. $15/mes y te explicamos cómo conseguirlos.
      </div>
    </div>
  );
}

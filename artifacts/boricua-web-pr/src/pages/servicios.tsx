import { motion } from "framer-motion";
import { Link } from "wouter";
import { LayoutTemplate, Smartphone, Search, MapPin, Plus, CheckCircle2, Calendar, ShoppingCart, MessageSquare } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: LayoutTemplate,
      title: "5 Páginas Completas",
      desc: "Inicio, Sobre Nosotros, Servicios, Portafolio y Contacto. Todo lo que necesita un negocio para verse serio en internet.",
    },
    {
      icon: Smartphone,
      title: "Diseño Optimizado para Móviles",
      desc: "Tu página se ve perfecta en celulares, tablets y computadoras. Los turistas buscan desde el teléfono — nosotros los capturamos.",
    },
    {
      icon: MessageSquare,
      title: "Formulario de Contacto",
      desc: "Que los clientes te escriban directamente desde tu página. Sin perder leads, sin perder ventas.",
    },
    {
      icon: MapPin,
      title: "Integración con Google Maps",
      desc: "Ponemos tu negocio en el mapa — literalmente. Que te encuentren fácil cuando están en Puerto Rico.",
    },
    {
      icon: Search,
      title: "SEO Básico para Turistas",
      desc: "Configuramos títulos, descripciones y palabras clave para que Google te encuentre cuando los turistas buscan lo que ofreces.",
    },
  ];

  const addons = [
    {
      icon: Plus,
      title: "Página adicional",
      price: "+$50",
      unit: "por página",
      desc: "¿Tienes menú, galería o blog? Lo añadimos.",
    },
    {
      icon: Calendar,
      title: "Funcionalidad interactiva",
      price: "+$150",
      unit: "por función/página",
      desc: "Reservas online, pedidos, formularios avanzados, sistema de citas — lo que tu negocio necesite para operar en automático.",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      price: "+$50",
      unit: "configuración completa",
      desc: "Te configuramos en Google Maps para que aparezcas cuando la gente busca negocios como el tuyo cerca.",
    },
  ];

  return (
    <div className="pt-10 pb-24">

      {/* Header */}
      <section className="bg-slate-950 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Servicios al <span className="text-secondary">Grano</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Todo lo que necesitas para que tu negocio se vea pro en internet y traiga clientes, sin cosas que no usas.
          </motion.p>
        </div>
      </section>

      {/* Main Package */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary font-bold text-sm px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Paquete Principal — $400
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Página Web Básica
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Todo lo que necesitas para tener presencia profesional en línea y empezar a atraer clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((srv, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-50 rounded-2xl p-7 border border-border hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit">
                  <srv.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-xl px-10 py-5 rounded-full transition-all shadow-lg shadow-accent/25 hover:scale-105"
              data-testid="services-cta-button"
            >
              Quiero este paquete
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Servicios <span className="text-secondary">adicionales</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-xl mx-auto">
              Personaliza tu sitio web según lo que tu negocio necesita.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-secondary">{addon.price}</span>
                  <span className="text-slate-400 text-sm">{addon.unit}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{addon.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included summary */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              ¿Qué incluye todo esto?
            </h2>
            <p className="text-xl text-muted-foreground">Un resumen de lo que recibes con el paquete básico.</p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-slate-50 rounded-3xl border border-border p-8 md:p-12"
          >
            <ul className="space-y-5">
              {[
                "Diseño profesional adaptado a tu negocio y su personalidad",
                "5 páginas optimizadas: Inicio, Nosotros, Servicios, Portafolio, Contacto",
                "Formulario de contacto funcional",
                "Google Maps integrado para que te encuentren fácil",
                "SEO básico — aparecer en Google cuando buscan lo que tú ofreces",
                "Optimizado para celulares desde el primer día",
                "Entrega rápida — sin esperar semanas",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={22} />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/precios"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all"
              data-testid="link-to-precios"
            >
              Ver Precios
            </Link>
            <Link
              href="/contacto"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg"
              data-testid="link-to-contacto"
            >
              Solicitar Ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

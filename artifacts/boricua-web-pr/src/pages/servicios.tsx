import { motion } from "framer-motion";
import { Link } from "wouter";
import { LayoutTemplate, Smartphone, Search, Zap, CheckCircle2 } from "lucide-react";

export default function ServiciosPage() {
  return (
    <div className="pt-10 pb-24">
      {/* Header */}
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Servicios al Grano
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300"
          >
            Todo lo que necesitas para que tu negocio se vea pro en internet y traiga chavos, sin cosas que no usas.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: LayoutTemplate,
                title: "Diseño de 5 Páginas Completas",
                desc: "Inicio, Nosotros, Servicios/Menú, Galería y Contacto. Estructura probada para convertir visitas en clientes."
              },
              {
                icon: Smartphone,
                title: "100% Adaptado a Celulares",
                desc: "Todo el mundo busca en su celular. Tu página se verá perfecta y cargará rápido en cualquier pantalla."
              },
              {
                icon: Search,
                title: "SEO Básico (Turistas)",
                desc: "Configuramos tu página para que cuando busquen 'mejores sitios en PR', Google te encuentre a ti."
              },
              {
                icon: Zap,
                title: "Rápida como Rayo",
                desc: "Cero esperas. Si una página tarda, la gente se va. Nosotros hacemos que vuele."
              }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-xl shrink-0">
                  <srv.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{srv.title}</h3>
                  <p className="text-muted-foreground text-lg">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas algo más bravo?</h2>
            <p className="text-xl text-muted-foreground">Add-ons disponibles para potenciar tu página.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12">
            <ul className="space-y-6">
              {[
                { title: "Botón Flotante de WhatsApp", desc: "Para que te escriban directo y cierres ventas rápido." },
                { title: "Sistema de Reservaciones", desc: "Que reserven su mesa, tour o cita directamente en tu web." },
                { title: "Formularios de Contacto Avanzados", desc: "Para cotizaciones específicas o preguntas de clientes." },
                { title: "Integración con Instagram", desc: "Tus últimas fotos de IG salen automáticas en tu página." }
              ].map((addon, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-bold">{addon.title}</h4>
                    <p className="text-muted-foreground">{addon.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 text-center">
            <Link href="/precios" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
              Ver Precios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function PreciosPage() {
  const tiers = [
    {
      name: "Básico",
      price: "50",
      desc: "Perfecto para negocios que solo necesitan presencia en Google.",
      features: [
        "Página estilo One-Page (Landing)",
        "Adaptado a móviles",
        "Formulario de contacto",
        "SEO Básico",
      ],
      cta: "Empezar Básico"
    },
    {
      name: "Estándar",
      price: "150",
      popular: true,
      desc: "El más que buscan. Ideal para restaurantes y servicios locales.",
      features: [
        "Página completa (Hasta 5 pestañas)",
        "Adaptado a móviles",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Galería de fotos",
        "Integración de Google Maps",
        "SEO optimizado para turistas"
      ],
      cta: "Empezar Estándar"
    },
    {
      name: "Premium",
      price: "400",
      desc: "Para los que quieren romperla con reservas y ventas online.",
      features: [
        "Todo lo del plan Estándar",
        "Sistema de Reservaciones",
        "E-commerce básico (hasta 10 productos)",
        "Integración con Instagram",
        "Soporte prioritario",
        "Copywriting persuasivo incluido"
      ],
      cta: "Empezar Premium"
    }
  ];

  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Precios Claros, Sin Sorpresas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300"
          >
            Tú inviertes en tu página hoy, ella te trae clientes mañana.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 flex flex-col ${tier.popular ? 'border-primary relative scale-100 md:scale-105 z-10' : 'border-transparent mt-4'}`}
            >
              {tier.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold tracking-wide uppercase">
                  El Más Popular
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 min-h-[48px]">{tier.desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black">${tier.price}</span>
                  <span className="text-muted-foreground font-medium"> /pago único</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="text-secondary shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Link 
                  href="/contacto" 
                  className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-colors ${tier.popular ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16 text-muted-foreground">
          <p>* Hosting y dominio no están incluidos. Cuestan aprox. $15/mes y te enseñamos cómo sacarlo.</p>
        </div>
      </div>
    </div>
  );
}

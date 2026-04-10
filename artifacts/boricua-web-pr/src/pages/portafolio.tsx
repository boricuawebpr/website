import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function PortafolioPage() {
  const demos = [
    { title: "Restaurante Tropical", type: "Restaurante", img: "/demo-restaurant.png" },
    { title: "Eco Aventuras PR", type: "Tour Company", img: "/demo-tour.png" },
    { title: "Ocean View Stay", type: "Airbnb", img: "/demo-airbnb.png" },
    { title: "Estilo & Belleza", type: "Salón", img: "/demo-salon.png" },
    { title: "Fuerza PR Gym", type: "Gimnasio", img: "/demo-gym.png" },
    { title: "Rutas Locales", type: "Transporte", img: "/demo-travel.png" },
  ];

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
            Portafolio / Demos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300"
          >
            Así es como se va a ver tu negocio. Escoge el estilo, nosotros le metemos tu flow.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {demos.map((demo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img 
                    src={demo.img} 
                    alt={demo.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{demo.type}</div>
                  <h3 className="text-xl font-bold mb-4">{demo.title}</h3>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium py-3 rounded-xl transition-colors gap-2"
                  >
                    <ExternalLink size={18} /> Ver Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

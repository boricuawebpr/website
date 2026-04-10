import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Star, Store, Map, Home, Scissors, Dumbbell, Coffee } from "lucide-react";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-950 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545622783-b3e0214ee4f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950/95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-bold tracking-wide mb-6 uppercase">
                Mas Clientes, Menos Revolú
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Convierte visitantes en <span className="text-secondary">turistas que compran</span> en tu negocio
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Haz que tu negocio aparezca brillando cuando los turistas buscan en Google dónde comer, dónde quedarse o qué hacer en Puerto Rico. Páginas web rápidas, modernas y al grano.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/portafolio" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Ver Ejemplos
              </Link>
              <Link 
                href="/contacto" 
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
              >
                Quiero Mi Página Web <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Para quien es esto */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">¿Para quién es esto?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Si tu negocio depende de que la gente te encuentre por internet, estamos hablando contigo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Coffee, title: "Restaurantes", desc: "Muestra tu menú, horarios y atrae a los turistas que buscan dónde comer cerca de ti." },
              { icon: Map, title: "Tours y Excursiones", desc: "Vende la experiencia antes de que lleguen. Fotos brutales y botones para reservar." },
              { icon: Home, title: "Airbnb / Alquileres", desc: "Destácate de la competencia con tu propia página para mostrar fotos premium de tu propiedad." },
              { icon: Scissors, title: "Salones / Barberías", desc: "Que te encuentren rápido para ese recorte o blower antes de salir a janguear." },
              { icon: Dumbbell, title: "Gimnasios / Entrenadores", desc: "Atrae a los locales que buscan ponerse al día y los turistas que quieren mantener la rutina." },
              { icon: Store, title: "Y Mucho Más...", desc: "Cualquier negocio local que quiera verse más profesional que la competencia." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">¿Cómo Funciona?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cero dolores de cabeza. Tú sigues corriendo tu negocio, nosotros nos encargamos del internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Escoges un diseño", desc: "Te enseñamos diseños probados que funcionan para tu tipo de negocio. Escoges el que más te guste." },
              { step: "2", title: "Lo adaptamos a ti", desc: "Le ponemos tus colores, tu logo, tus fotos y tus textos. Queda a tu medida, bien clean." },
              { step: "3", title: "¡Página lista rápido!", desc: "En pocos días tienes tu página corriendo y atrayendo clientes en Google." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 mx-auto bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-lg shadow-secondary/20 relative z-10">
                  {item.step}
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border -z-0"></div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Por qué hacerla con nosotros</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Sabemos cómo se mueve el negocio en la isla. No te vamos a hablar con palabras técnicas raras, vamos al grano a lo que trae chavos.
              </p>
              <ul className="space-y-5">
                {[
                  "Rápido y al grano (sin reuniones interminables)",
                  "Enfocado en que turistas te encuentren",
                  "Diseño profesional de agencia grande, sin complicaciones",
                  "Precio accesible para negocios locales",
                  "Botón de WhatsApp integrado"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium">
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contacto" className="inline-block px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-full hover:bg-secondary/90 transition-colors shadow-lg">
                  Vamos pa' encima
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1000&auto=format&fit=crop" 
                  alt="Negocio local en PR" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex text-secondary mb-2">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-slate-800 font-bold">"Mis reservas subieron un 40% en dos semanas."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Lo que dice el corillo</h2>
            <p className="text-muted-foreground text-lg">Negocios reales rompiéndola con su nueva página.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", biz: "El Fogón de Carlos (Luquillo)", text: "Mano, antes nadie nos encontraba si no era pasando por el frente. Ahora con la página, los gringos llegan solitos con el GPS de Google. El menú se ve brutal." },
              { name: "Valeria R.", biz: "Valeria Tours PR", text: "La reserva directo por WhatsApp me salvó la vida. La página se ve súper premium y la gente confía más en depositar para las excursiones al Yunque." },
              { name: "Javier T.", biz: "OceanView Airbnb (Rincón)", text: "Súper rápido y cero estrés. Las fotos del apartamento se ven increíbles en la página. Dejé de pagarle tanto fee a las plataformas y ahora me reservan directo." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm"
              >
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground text-lg italic mb-6 leading-relaxed">"{item.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.biz}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

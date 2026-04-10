import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake submit
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos bien rápido. ¡Pendiente!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-10 pb-24 bg-background">
      <section className="bg-slate-950 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Vamos a Hablar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300"
          >
            Escríbenos y cuadramos los detalles de tu página. Cero compromisos.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Localización</h3>
                  <p className="text-muted-foreground text-lg">San Juan, Puerto Rico<br/>(Trabajamos toda la isla)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Teléfono / WhatsApp</h3>
                  <p className="text-muted-foreground text-lg">(787) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground text-lg">info@boricuawebpr.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-border">
              <h3 className="text-xl font-bold mb-2">¿Prefieres algo directo?</h3>
              <p className="text-muted-foreground mb-6">Tíranos un mensaje por WhatsApp, es más rápido y resolvemos en minutos.</p>
              <a href="https://wa.me/17871234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors w-full sm:w-auto">
                Mensaje por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border"
          >
            <h2 className="text-2xl font-bold mb-6">Solicita tu página web hoy</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Juan del Pueblo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Teléfono</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="(787) 555-0000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="juan@ejemplo.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tipo de Negocio</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none transition-all bg-white">
                  <option>Restaurante / Food Truck</option>
                  <option>Tour / Excursiones</option>
                  <option>Airbnb / Hospedaje</option>
                  <option>Salón de Belleza / Barbería</option>
                  <option>Gimnasio / Personal Trainer</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Cuéntanos sobre tu negocio</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Necesito una página para..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 shadow-lg shadow-accent/20"
              >
                {isSubmitting ? 'Enviando...' : <><Send size={20} /> Enviar Mensaje</>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

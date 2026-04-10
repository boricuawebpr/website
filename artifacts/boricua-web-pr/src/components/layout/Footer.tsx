import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">
                Boricua<span className="text-accent">Web</span><span className="font-light text-slate-400">PR</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 font-medium">
              Más Clientes, Menos Revolú. Diseños web hechos para negocios reales en Puerto Rico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-slate-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/portafolio" className="text-slate-400 hover:text-white transition-colors">Portafolio</Link></li>
              <li><Link href="/precios" className="text-slate-400 hover:text-white transition-colors">Precios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Restaurantes</li>
              <li className="text-slate-400">Tours y Excursiones</li>
              <li className="text-slate-400">Airbnbs</li>
              <li className="text-slate-400">Salones y Barberías</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span>San Juan, Puerto Rico</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(787) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} className="text-primary shrink-0" />
                <span>info@boricuawebpr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Boricua Web PR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

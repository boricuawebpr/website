import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PortafolioPage() {
  const demos = [
    {
      title: "Restaurante Tropical",
      type: "Restaurante",
      pages: [
        { name: "Inicio", img: "/demo-restaurant-1.png" },
        { name: "Sobre Nosotros", img: "/demo-restaurant-2.png" },
        { name: "Menú", img: "/demo-restaurant-3.png" },
        { name: "Galería", img: "/demo-restaurant-4.png" },
        { name: "Contacto", img: "/demo-restaurant-5.png" },
      ]
    },
    {
      title: "Eco Aventuras PR",
      type: "Tour Company",
      pages: [
        { name: "Inicio", img: "/demo-tour-1.png" },
        { name: "Sobre Nosotros", img: "/demo-tour-2.png" },
        { name: "Tours", img: "/demo-tour-3.png" },
        { name: "Galería", img: "/demo-tour-4.png" },
        { name: "Contacto", img: "/demo-tour-5.png" },
      ]
    },
    {
      title: "Ocean View Stay",
      type: "Airbnb",
      pages: [
        { name: "Inicio", img: "/demo-airbnb-1.png" },
        { name: "La Propiedad", img: "/demo-airbnb-2.png" },
        { name: "Habitaciones", img: "/demo-airbnb-3.png" },
        { name: "Galería", img: "/demo-airbnb-4.png" },
        { name: "Reservaciones", img: "/demo-airbnb-5.png" },
      ]
    },
    {
      title: "Estilo & Belleza",
      type: "Salón",
      pages: [
        { name: "Inicio", img: "/demo-salon-1.png" },
        { name: "Sobre Nosotros", img: "/demo-salon-2.png" },
        { name: "Servicios", img: "/demo-salon-3.png" },
        { name: "Galería", img: "/demo-salon-4.png" },
        { name: "Contacto", img: "/demo-salon-5.png" },
      ]
    },
    {
      title: "Fuerza PR Gym",
      type: "Gimnasio",
      pages: [
        { name: "Inicio", img: "/demo-gym-1.png" },
        { name: "Sobre Nosotros", img: "/demo-gym-2.png" },
        { name: "Clases", img: "/demo-gym-3.png" },
        { name: "Galería", img: "/demo-gym-4.png" },
        { name: "Membresías", img: "/demo-gym-5.png" },
      ]
    },
    {
      title: "Rutas Locales",
      type: "Transporte",
      pages: [
        { name: "Inicio", img: "/demo-travel-1.png" },
        { name: "Sobre Nosotros", img: "/demo-travel-2.png" },
        { name: "Rutas", img: "/demo-travel-3.png" },
        { name: "Galería", img: "/demo-travel-4.png" },
        { name: "Reservaciones", img: "/demo-travel-5.png" },
      ]
    }
  ];

  const [activeSlides, setActiveSlides] = useState(demos.map(() => 0));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxDemoIndex, setLightboxDemoIndex] = useState(0);
  const [lightboxSlideIndex, setLightboxSlideIndex] = useState(0);

  const nextSlide = (demoIndex: number) => {
    setActiveSlides(prev => {
      const next = [...prev];
      next[demoIndex] = (next[demoIndex] + 1) % 5;
      return next;
    });
  };

  const prevSlide = (demoIndex: number) => {
    setActiveSlides(prev => {
      const next = [...prev];
      next[demoIndex] = (next[demoIndex] - 1 + 5) % 5;
      return next;
    });
  };

  const openLightbox = (demoIndex: number) => {
    setLightboxDemoIndex(demoIndex);
    setLightboxSlideIndex(activeSlides[demoIndex]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxSlide = () => {
    setLightboxSlideIndex(prev => (prev + 1) % 5);
  };

  const prevLightboxSlide = () => {
    setLightboxSlideIndex(prev => (prev - 1 + 5) % 5);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextLightboxSlide();
      if (e.key === 'ArrowLeft') prevLightboxSlide();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="pt-10 pb-24 relative">
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
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 flex-shrink-0">
                  <AnimatePresence initial={false}>
                    <motion.img 
                      key={activeSlides[i]}
                      src={demo.pages[activeSlides[i]].img} 
                      alt={`${demo.title} - ${demo.pages[activeSlides[i]].name}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>
                  
                  {/* Left/Right Arrows */}
                  <button 
                    onClick={() => prevSlide(i)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => nextSlide(i)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {demo.pages.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => {
                          const next = [...activeSlides];
                          next[i] = dotIndex;
                          setActiveSlides(next);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          dotIndex === activeSlides[i] ? 'bg-white' : 'bg-white/40'
                        }`}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>

                  {/* Page Name Badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                    {demo.pages[activeSlides[i]].name}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{demo.type}</div>
                  <h3 className="text-xl font-bold mb-4">{demo.title}</h3>
                  <div className="mt-auto">
                    <button 
                      onClick={() => openLightbox(i)}
                      className="inline-flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium py-3 rounded-xl transition-colors gap-2"
                    >
                      <ExternalLink size={18} /> Ver Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 text-white">
              <div className="flex flex-col">
                <span className="font-bold text-xl">{demos[lightboxDemoIndex].title}</span>
                <span className="text-white/70">
                  {demos[lightboxDemoIndex].pages[lightboxSlideIndex].name} ({lightboxSlideIndex + 1} de 5)
                </span>
              </div>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Lightbox Image Area */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${lightboxDemoIndex}-${lightboxSlideIndex}`}
                  src={demos[lightboxDemoIndex].pages[lightboxSlideIndex].img}
                  alt={demos[lightboxDemoIndex].pages[lightboxSlideIndex].name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain rounded shadow-2xl"
                />
              </AnimatePresence>

              {/* Lightbox Nav */}
              <button 
                onClick={prevLightboxSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronLeft size={36} />
              </button>
              <button 
                onClick={nextLightboxSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronRight size={36} />
              </button>
            </div>
            
            {/* Lightbox Thumbnails/Dots */}
            <div className="p-4 flex justify-center gap-3">
              {demos[lightboxDemoIndex].pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxSlideIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === lightboxSlideIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

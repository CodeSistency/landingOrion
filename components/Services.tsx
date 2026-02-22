"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { ExternalLink, X, ChevronRight, ChevronLeft, Layers, Tag as TagIcon, Code } from 'lucide-react';

type Service = {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    categories: string[];
    technologies: string[];
    images?: string[];
    videoThumbnail?: string;
    youtubeId?: string;
    link?: string;
};

const serviceData: Service[] = [
    {
        id: "1",
        title: "Plataforma de Asesoramiento Inmobiliario",
        description: "Plataforma web conectada en tiempo real a bases de datos inmobiliarias mediante web scraping.",
        longDescription: "Desarrollamos una plataforma web avanzada para asesores inmobiliarios que sincroniza automáticamente el catálogo de propiedades desde sitios externos (como RE/MAX) utilizando técnicas optimizadas de web scraping. Esto permite gestionar ventas y alquileres de inmuebles desde un panel centralizado con datos siempre actualizados y listos para compartir con clientes.",
        categories: ["web"],
        technologies: ["Next.js", "React", "Web Scraping", "Node.js"],
        videoThumbnail: "https://img.youtube.com/vi/iBC8A1SBNdk/maxresdefault.jpg",
        youtubeId: "iBC8A1SBNdk"
    },
    {
        id: "2",
        title: "Gestión Empresarial Integral con Odoo",
        description: "Implementación de ERP para centralizar inventario, ventas y flujos organizacionales en una única plataforma.",
        longDescription: "Despliegue y configuración estratégica de Odoo ERP, integrando fluidamente múltiples módulos empresariales: gestión de inventarios, CRM, puntos de venta, contabilidad y comunicación interna. Diseñado para simplificar procesos corporativos, estructurar roles organizacionales y potenciar la escalabilidad operativa de la empresa mediante una fuente única de verdad.",
        categories: ["odoo", "erp"],
        technologies: ["Odoo", "Python", "PostgreSQL", "XML"],
        videoThumbnail: "https://img.youtube.com/vi/k-Tku2X1A8U/maxresdefault.jpg",
        youtubeId: "k-Tku2X1A8U"
    },
    {
        id: "3",
        title: "Automatización de Inventario con IA",
        description: "Sistema automatizado que permite consultar y gestionar el estado del inventario utilizando lenguaje natural.",
        longDescription: "Integramos inteligencia artificial con sistemas de bases de datos y hojas de cálculo (Google Sheets) mediante potentes flujos de trabajo en n8n. Esta solución orquesta los datos del inventario y permite al personal realizar consultas complejas o actualizar stocks simplemente hablando en lenguaje natural, obteniendo respuestas instantáneas y precisas sin necesidad de interfaces complejas ni conocimientos técnicos.",
        categories: ["workflows", "IA"],
        technologies: ["n8n", "OpenAI", "Google Sheets API", "Node.js"],
        videoThumbnail: "https://img.youtube.com/vi/AsCeWKWlhsU/maxresdefault.jpg",
        youtubeId: "AsCeWKWlhsU"
    },
    {
        id: "4",
        title: "Experiencias Web 3D Interactivas",
        description: "Renderizado 3D en tiempo real para la exhibición y configuración de productos interactivos en el navegador.",
        longDescription: "Creamos experiencias visuales inmersivas en la web utilizando librerías avanzadas como Three.js. Al integrar y optimizar modelos 3D detallados (como el de un iPhone) directamente en el ecosistema del navegador, logramos una interacción fluida y transiciones de alto desempeño visual. Esta técnica convierte catálogos de productos tradicionales en escaparates digitales dinámicos que aumentan dramáticamente la retención del usuario.",
        categories: ["web"],
        technologies: ["Next.js", "Three.js", "WebGL", "Framer Motion"],
        videoThumbnail: "https://img.youtube.com/vi/oSknDl0UmbA/maxresdefault.jpg",
        youtubeId: "oSknDl0UmbA"
    },
    {
        id: "5",
        title: "SportMania: Gestión de Complejos Deportivos",
        description: "Sistema integral web para administradores y usuarios de canchas e instalaciones deportivas.",
        longDescription: "Plataforma full-stack diseñada end-to-end para la administración eficiente de reservas de canchas y la gestión total de complejos deportivos. Construida con una arquitectura modular altamente responsiva (Next.js en el frontend y NestJS aportando la seguridad y escalabilidad del backend). Ofrece interfaces amigables para los deportistas, así como un panel de control gerencial automatizado con métricas y finanzas.",
        categories: ["web"],
        technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "TailwindCSS"],
        videoThumbnail: "https://img.youtube.com/vi/g5FBeiAuC6o/maxresdefault.jpg",
        youtubeId: "g5FBeiAuC6o"
    },
    {
        id: "6",
        title: "Sportlink: Red Social Deportiva",
        description: "Aplicación móvil para conectar atletas y organizar actividades deportivas comunitarias.",
        longDescription: "Una vibrante red social móvil orientada a deportistas. Conecta perfiles de atletas de todos los niveles, permitiendo agrupar personas con intereses afines para organizar y unirse a actividades deportivas, retos o entrenamientos. Diseño nativo optimizado y notificaciones en tiempo real para mantener a la comunidad activa y en constante movimiento.",
        categories: ["movil", "ios", "android"],
        technologies: ["React Native", "Firebase", "Node.js", "WebSockets"],
        videoThumbnail: "https://img.youtube.com/vi/UJKLxK3WfuQ/maxresdefault.jpg",
        youtubeId: "UJKLxK3WfuQ"
    },
    {
        id: "7",
        title: "Agente IA Corporativo Autónomo",
        description: "Asistente virtual entrenado con el conocimiento interno capaz de operar como un empleado digital altamente calificado.",
        longDescription: "Implementación de un ecosistema inteligente estructurado, dotando a la empresa de un analista digital capaz de procesar e indexar de forma segura toda la documentación propietaria. Este agente no solo responde como un oráculo de información; aprende continuamente de cada interacción, posee mecanismos para ejecutar acciones y workflows programados en otros sistemas, y se integra de forma nativa con los canales de comunicación habituales (Slack, WhatsApp, Telegram, WebSockets).",
        categories: ["agentes", "IA", "workflows"],
        technologies: ["LLMs", "RAG", "Vector Search", "WebSockets", "Node.js"],
        videoThumbnail: "https://img.youtube.com/vi/89oLV835uaE/maxresdefault.jpg",
        youtubeId: "89oLV835uaE"
    }
];

const categoriesList = ['todas', 'web', 'movil', 'ios', 'android', 'odoo', 'erp', 'workflows', 'agentes', 'IA'];

export default function Services() {
    const [activeCategory, setActiveCategory] = useState<string>('todas');
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const filteredServices = activeCategory === 'todas'
        ? serviceData
        : serviceData.filter(service => service.categories.includes(activeCategory));

    const openService = (service: Service) => {
        setSelectedService(service);
        setCurrentImageIndex(0);
    };

    const closeService = () => {
        setSelectedService(null);
    };

    const nextImage = (e: React.MouseEvent, max: number) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => (prev + 1) % max);
    };

    const prevImage = (e: React.MouseEvent, max: number) => {
        e.stopPropagation();
        setCurrentImageIndex(prev => (prev === 0 ? max - 1 : prev - 1));
    };

    const getMainVisual = (service: Service) => {
        if (service.images && service.images.length > 0) {
            return service.images[currentImageIndex];
        }
        if (service.videoThumbnail) {
            return service.videoThumbnail;
        }
        return null;
    };

    return (
        <section id="services" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
                            <p className="text-muted text-lg max-w-2xl">
                                Explora el ecosistema de demos y proyectos reales que construimos para llevar el software al siguiente nivel.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide">
                        {categoriesList.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-foreground text-background shadow-lg shadow-foreground/20'
                                    : 'bg-foreground/[0.03] text-foreground/70 hover:bg-foreground/[0.08] hover:text-foreground'
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map(service => {
                            const mainImg = service.images?.[0] || service.videoThumbnail;

                            return (
                                <motion.div
                                    key={service.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openService(service)}
                                    className="group cursor-pointer rounded-2xl border border-foreground/10 bg-background overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {mainImg ? (
                                        <div className="w-full h-56 relative bg-foreground/5 overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={mainImg}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-56 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] flex flex-col items-center justify-center p-6 text-center border-b border-foreground/5">
                                            <Layers className="w-12 h-12 text-foreground/20 mb-4" />
                                            <span className="text-foreground/40 font-medium tracking-widest uppercase text-xs">Sin imagen</span>
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.categories.slice(0, 3).map(cat => (
                                                <span key={cat} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-foreground/5 text-foreground/70">
                                                    {cat}
                                                </span>
                                            ))}
                                            {service.categories.length > 3 && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-foreground/5 text-foreground/70">
                                                    +{service.categories.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-muted text-sm line-clamp-2 md:line-clamp-3 mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors group-hover:translate-x-1 duration-300">
                                            Ver detalles <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeService}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-foreground/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <button
                                onClick={closeService}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 backdrop-blur-md border border-foreground/10 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/10 transition-colors"
                                aria-label="Cerrar modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="overflow-y-auto flex-1 custom-scrollbar">
                                {(() => {
                                    const visual = getMainVisual(selectedService);
                                    const isArrayVisual = selectedService.images && selectedService.images.length > 1;

                                    if (selectedService.youtubeId) {
                                        return (
                                            <div className="w-full h-64 sm:h-80 md:h-[450px] relative bg-black">
                                                <iframe
                                                    className="absolute top-0 left-0 w-full h-full"
                                                    src={`https://www.youtube.com/embed/${selectedService.youtubeId}?autoplay=1`}
                                                    title={selectedService.title}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        );
                                    }

                                    return visual ? (
                                        <div className="w-full h-64 sm:h-80 md:h-96 relative bg-foreground/5 group">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={visual}
                                                alt={selectedService.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {isArrayVisual && (
                                                <>
                                                    <button
                                                        onClick={(e) => prevImage(e, selectedService.images!.length)}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                                                    >
                                                        <ChevronLeft className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => nextImage(e, selectedService.images!.length)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                                                    >
                                                        <ChevronRight className="w-5 h-5" />
                                                    </button>
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                        {selectedService.images!.map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="w-full h-40 sm:h-64 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] flex flex-col items-center justify-center p-6 border-b border-foreground/10">
                                            <Layers className="w-16 h-16 text-foreground/20 mb-4" />
                                            <span className="text-foreground/40 font-medium tracking-widest uppercase">Sin previsualización visual</span>
                                        </div>
                                    );
                                })()}

                                <div className="p-8 sm:p-12">
                                    <div className="max-w-3xl mx-auto">
                                        <h2 className="text-3xl sm:text-4xl font-black mb-6">{selectedService.title}</h2>

                                        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                                            {selectedService.longDescription || selectedService.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                            <div>
                                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted mb-4">
                                                    <TagIcon className="w-4 h-4" />
                                                    Categorías
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedService.categories.map(cat => (
                                                        <span key={cat} className="px-3 py-1.5 rounded-lg bg-foreground/[0.03] border border-foreground/5 text-sm font-medium">
                                                            {cat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted mb-4">
                                                    <Code className="w-4 h-4" />
                                                    Tecnologías
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedService.technologies.map(tech => (
                                                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-foreground/10 text-foreground font-medium text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {selectedService.link && (
                                            <div className="pt-8 border-t border-foreground/10">
                                                <a
                                                    href={selectedService.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 active:scale-95 transition-transform"
                                                >
                                                    Visitar herramienta
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

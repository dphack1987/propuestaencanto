export const SITE = {
  name: "Casa Yanuba",
  descriptor: "Hotel Boutique",
  tagline: "Un refugio exclusivo en el corazón del paisaje cultural cafetero",
  location: "Quimbaya, Quindío",
  address: "Vereda Kerman, km 5 vía Panaca, Quimbaya, Quindío",
  whatsapp: "573136963845",
  email: "hola@hotelyanuba.com",
  instagram: "https://www.instagram.com/hotelyanuba/",
  bookingUrl: "https://www.booking.com",
  airbnbUrl: "https://www.airbnb.com",
};

// Imágenes reales extraídas del portafolio oficial
const P = "/img";
export const PHOTOS = {
  cover: `${P}/p1_1.jpg`,
  portada2: `${P}/p2_4.jpg`,
  casas: `${P}/p3_9.jpg`,
  piscina: `${P}/p4_12.jpg`,
  suiteBoutique: `${P}/p5_15.jpg`,
  suiteBoutique2: `${P}/p5_16.jpg`,
  suiteFamiliar: `${P}/p6_19.jpg`,
  chef: `${P}/p8_24.jpg`,
  beneficios: `${P}/p9_27.jpg`,
  beneficios2: `${P}/p9_28.jpg`,
  beneficios3: `${P}/p9_29.jpg`,
  contacto: `${P}/p10_32.jpg`,
};

export type StayOption = {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  capacity: string;
  image: string;
  features: string[];
  badge?: string;
};

export const STAY_OPTIONS: StayOption[] = [
  {
    id: "por-suite",
    name: "Por Suite",
    description:
      "Reserve una o varias de nuestras seis suites boutique, con acceso a la piscina y a los tres jacuzzis. Perfecto para parejas o grupos pequeños.",
    priceFrom: 550000,
    capacity: "2 a 18 personas",
    image: PHOTOS.piscina,
    features: [
      "6 suites boutique",
      "Piscina y 3 jacuzzis",
      "Desayuno incluido",
      "Zona BBQ",
    ],
  },
  {
    id: "casa-completa",
    name: "Casa Completa",
    description:
      "Las seis suites para su grupo, con uso exclusivo de toda la casa. La experiencia Yanuba en su máxima expresión, ideal para eventos y familias grandes.",
    priceFrom: 3400000,
    capacity: "Hasta 18 personas",
    image: PHOTOS.casas,
    features: [
      "Uso exclusivo de la casa",
      "Hasta 18 personas",
      "Cocina y zona BBQ",
      "Juegos de mesa y parqueadero",
      "Seguridad privada",
    ],
    badge: "Exclusividad total",
  },
];

export type SuiteType = {
  name: string;
  floor: string;
  count: number;
  description: string;
  capacity: string;
  ideal: string;
  image: string;
};

export const SUITE_TYPES: SuiteType[] = [
  {
    name: "Suites Boutique",
    floor: "Segundo piso · 4 suites",
    count: 4,
    description:
      "Cama king, sofá cama y nicho de descanso. Baño privado, balcón y agua caliente.",
    capacity: "2 a 4 personas",
    ideal: "Parejas",
    image: PHOTOS.suiteBoutique,
  },
  {
    name: "Suites Familiares",
    floor: "Primer piso · 2 suites",
    count: 2,
    description:
      "Dos camas de 1,60 m y dos nichos de descanso. Baño privado, balcón y agua caliente.",
    capacity: "Hasta 6 personas",
    ideal: "Familias y grupos",
    image: PHOTOS.suiteFamiliar,
  },
];

export type Rate = {
  label: string;
  low: number | null;
  high: number | null;
};

export const RATES: Rate[] = [
  { label: "Boutique · 2 personas", low: 550000, high: 660000 },
  { label: "Boutique · 3 personas", low: 640000, high: 770000 },
  { label: "Boutique · 4 personas", low: 730000, high: 880000 },
  { label: "Familiar · hasta 4 personas", low: 750000, high: 900000 },
  { label: "Familiar · 5 personas", low: 840000, high: 1010000 },
  { label: "Familiar · 6 personas", low: 930000, high: 1120000 },
  { label: "Persona adicional (desde 5 años)", low: 90000, high: 110000 },
];

export const HOUSE_AMENITIES = [
  "Piscina",
  "Tres jacuzzis",
  "Desayuno incluido",
  "Zona BBQ",
  "Cocina",
  "TV e internet",
  "Juegos de mesa",
  "Parqueadero",
  "Seguridad privada",
  "Servicio de aseo (7:30 a.m. – 2:00 p.m.)",
];

export const EXTRA_SERVICES = [
  {
    name: "Chef privado",
    description:
      "Para asados o paellas, preparados en la casa para su grupo.",
    note: "Bajo reserva",
    image: PHOTOS.chef,
  },
];

export const BENEFITS = [
  {
    discount: "15%",
    place: "Mirador Encanto",
    detail: "Filandia · a 45 minutos",
    image: PHOTOS.beneficios,
  },
  {
    discount: "10%",
    place: "Parque Panaca",
    detail: "A 10 minutos",
    image: PHOTOS.beneficios2,
  },
  {
    discount: "15%",
    place: "Mirador Quimbaya",
    detail: "Parque principal · a 7 minutos",
    image: PHOTOS.beneficios3,
  },
];

export const GALLERY = [
  { src: PHOTOS.cover, alt: "Fachada de Casa Yanuba" },
  { src: PHOTOS.portada2, alt: "Casa Yanuba entre el paisaje" },
  { src: PHOTOS.casas, alt: "Las seis suites de la casa" },
  { src: PHOTOS.piscina, alt: "Piscina y jacuzzis" },
  { src: PHOTOS.suiteBoutique, alt: "Suite boutique" },
  { src: PHOTOS.suiteBoutique2, alt: "Detalle de suite boutique" },
  { src: PHOTOS.suiteFamiliar, alt: "Suite familiar" },
  { src: PHOTOS.chef, alt: "Servicio de chef privado" },
  { src: PHOTOS.beneficios, alt: "Mirador Encanto, Filandia" },
  { src: PHOTOS.beneficios2, alt: "Parque Panaca" },
  { src: PHOTOS.beneficios3, alt: "Mirador Quimbaya" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Un refugio excepcional. La casa, el servicio y el paisaje cafetalero hacen de cada visita algo inolvidable.",
    author: "Huésped frecuente",
    origin: "Colombia",
    rating: 5,
  },
  {
    quote:
      "Celebramos nuestra boda con la casa completa. El equipo se encargó de todo: chef privado, decoración y detalles que hicieron el día perfecto.",
    author: "Familia R.",
    origin: "Eje Cafetero",
    rating: 5,
  },
  {
    quote:
      "Las suites boutique son una maravilla. Despertar con vista al cafetal y terminar el día en el jacuzzi es otra dimensión.",
    author: "Pareja de huéspedes",
    origin: "Medellín",
    rating: 5,
  },
];

export const STATS = [
  { value: "6", label: "Suites boutique" },
  { value: "3", label: "Jacuzzis privados" },
  { value: "18", label: "Personas máximo" },
  { value: "Quimbaya", label: "Quindío, Colombia" },
];

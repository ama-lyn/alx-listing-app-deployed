import { PropertyProps } from '@/interfaces';

// Example API base URL
export const API_BASE_URL = 'https://api.example.com';

// UI-related constants
export const BUTTON_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
};

//images
export const IMAGES = {
  hero: '/assets/images/hero-image.png',
};


export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Arrecife Beach House",
    address: {
      city: "Sidemne, Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image 2.png",
    discount: ""
  },
  {
    name: "Entire cabin",
    address: {
      city: "Nova Friburgo",
      country: "Brazil"
    },
    rating: 4.70,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image 3.png",
    discount: "30"
  },
  {
    name: "Villa Lamp",
    address: {
      city: "Benahavis",
      country: "Spain"
    },
    rating: 4.92,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image 4.png",
    discount: ""
  },
  {
    name: "Earthen home",
    address: {
      city: "Santa Maria",
      country: "Colombia"
    },
    rating: 4.85,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image 5.png",
    discount: "15"
  },
  {
    name: "Private Room",
    address: {
      city: "Moeda",
      country: "Brazil"
    },
    rating: 4.77,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/images/image 6.png",
    discount: "20"
  },
  {
    name: "Gokce Gemile Estate",
    address: {
      city: "Kayaköy",
      country: "Turkey"
    },
    rating: 4.95,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/images/image 7.png",
    discount: ""
  },
  {
    name: "Luxury 1000 sqm Villa...",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.65,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/images/image 8.png",
    discount: "10"
  },
  {
    name: "Palais Hassoun Marrakech",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.80,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/images/image 9.png",
    discount: "25"
  },
  {
    name: "Villa l 'Oui d' Or",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.60,
    category: ["Top Villa", "Book Now Pay Later", "Free Schedule"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/images/image 10.png",
    discount: ""
  },
  {
    name: "Designer villa, pool not ...",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.72,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/images/image 11.png",
    discount: "40"
  },
  {
    name: "Royal Zephyr - Marrakech",
    address: {
     city: "Marrakech",
     country: "Morocco"
    },
    rating: 4.93,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/image 12.png",
    discount: "50"
  },
  {
    name: "Rïad Mayo & Bungalows",
    address: {
     city: "Sidi Abdallah Ghiat",
     country: "Morocco"
    },
    rating: 4.83,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/images/image 13.png",
    discount: ""
  },
  {
    name: "Casa de Carolina",
    address: {
      city: "Playas de Vera",
      country: "Spain"
    },
    rating: 4.67,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/images/image 14.png",
    discount: "35"
  },
  {
    name: "Happy Valley Villa, Tuni...",
    address: {
      city: "Qaroun",
      country: "Egypt"
    },
    rating: 4.81,
    category: ["Top Villa", "Instant Book", "Free Schedule"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/images/image 15.png",
    discount: ""
  },
  {
    name: "Almyros Residence ",
    address: {
      city: "Lasithi",
      country: "Greece"
    },
    rating: 4.97,
    category: ["Top Villa", "Self Check-in", "Free Schedule"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/images/image 16.png",
    discount: "20"
  },
  {
    name: "Villa White Stone mode...",
    address: {
      city: "Marrakech",
      country: "Morocco"
    },
    rating: 4.58,
    category: ["Top Villa", "Self Check-in", "Book Now Pay Later"],
    price: 1798,
    offers: {
      bed: "7",
      shower: "6",
      occupants: "12"
    },
    image: "/assets/images/image 17.png",
    discount: "25"
  }
];

import { Kitten, KittenBreed, KittenGender, Review } from './types';

export const KITTENS: (Kitten & { traits: string[], character: string, gallery: string[] })[] = [
  {
    id: '1',
    name: 'Archibald',
    breed: KittenBreed.FOLD,
    gender: KittenGender.MALE,
    color: 'Rare Silver Tabby',
    price: '$2,400',
    birthDate: '2024-02-10',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=95&w=1200',
    description: 'A true embodiment of the Scottish Fold grace. Archibald possesses a serene temperament and a deep, intuitive connection with his humans.',
    character: 'A quiet, soulful boy who prefers soft classical music and afternoon sunlit naps.',
    traits: ['WCF Registered', 'Genetic Guarantee', 'Social Elite'],
    gallery: []
  },
  {
    id: '2',
    name: 'Seraphina',
    breed: KittenBreed.STRAIGHT,
    gender: KittenGender.FEMALE,
    color: 'Blue Point Elegance',
    price: '$1,950',
    birthDate: '2024-02-12',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1513360371669-4adaa10179ad?auto=format&fit=crop&q=95&w=1200',
    description: 'Seraphina represents the Straight lineage with unparalleled symmetry. Her gaze is as captivating as her playful, intelligent spirit.',
    character: 'Highly intelligent, loves interactive puzzles, and will follow you like a shadow.',
    traits: ['Champion Bloodline', 'Vaccinated', 'Potty Trained'],
    gallery: []
  },
  {
    id: '3',
    name: 'Lafayette',
    breed: KittenBreed.FOLD,
    gender: KittenGender.MALE,
    color: 'Cream Pearl',
    price: '$2,800',
    birthDate: '2024-02-15',
    status: 'Reserved',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=95&w=1200',
    description: 'A rare cream fold with perfectly symmetrical ears. Lafayette is already showing signs of being a formidable show-class cat.',
    character: 'Confident, affectionate, and incredibly photogenic.',
    traits: ['Show Class', 'Elite Pedigree', 'Microchipped'],
    gallery: []
  },
  {
    id: '4',
    name: 'Valentina',
    breed: KittenBreed.STRAIGHT,
    gender: KittenGender.FEMALE,
    color: 'Muted Tortoiseshell',
    price: '$1,800',
    birthDate: '2024-01-05',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=95&w=1200',
    description: 'Distinctive, brave, and exceptionally loyal. Valentina is for those who seek a companion with a vibrant personality.',
    character: 'The bravest of her litter, loves height and investigating every corner.',
    traits: ['Active Character', 'Unique Pattern', 'Healthy Heart'],
    gallery: []
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Victoria Sterling',
    location: 'Geneva, Switzerland',
    text: 'Our experience with Arlen Cat was akin to luxury concierge service. Our Archibald arrived in perfect health and with a temperament that can only be described as royal.',
    rating: 5
  },
  {
    id: 'r2',
    author: 'James Montague',
    location: 'New York, USA',
    text: 'Rarely do you find a breeder so dedicated to the genetic integrity and psychological well-being of their cats. A masterpiece of a cattery.',
    rating: 5
  }
];

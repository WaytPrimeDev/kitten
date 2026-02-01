
export enum KittenBreed {
  FOLD = 'Scottish Fold',
  STRAIGHT = 'Scottish Straight'
}

export enum KittenGender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export interface Kitten {
  id: string;
  name: string;
  breed: KittenBreed;
  gender: KittenGender;
  color: string;
  price: string;
  birthDate: string;
  status: 'Available' | 'Reserved' | 'New Home';
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

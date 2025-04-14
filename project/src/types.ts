import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  size?: string;
  color?: string;
}

export interface Event {
  id: number;
  position: [number, number];
  title: string;
  date: string;
  image: string;
  price?: number;
  description: string;
  category: string;
  city: string;
  venue?: string;
  address?: string;
  time?: string;
  fullDescription?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  installments?: boolean;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}
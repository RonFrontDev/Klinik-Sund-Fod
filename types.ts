import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
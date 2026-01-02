
import React from 'react';

export const COLORS = {
  primary: '#0D9488', // Teal 600
  secondary: '#FF6B6B', // Vibrant Coral
  accent: '#FFD93D', // Bright Yellow
  info: '#4D96FF', // Soft Blue
  background: '#FFFFFF',
  surface: '#F8FAFC',
};

export const CLINIC_INFO = {
  name: 'Klinik Sund Fod',
  owner: 'Lisbeth Thomsen',
  address: 'Falkoner Allé 112, 2. sal, 2000 Frederiksberg',
  locationDetail: 'Der er elevator direkte til klinikken.',
  phone: '+45 22 40 40 68',
  email: 'lisbeth@kliniksundfod.dk',
  cvr: '35914652',
  hours: [
    { day: 'Mandag', time: '09:00 - 17:00' },
    { day: 'Tirsdag', time: '09:00 - 18:00' },
    { day: 'Onsdag', time: '09:00 - 17:00' },
    { day: 'Torsdag', time: '09:00 - 17:00' },
    { day: 'Fredag', time: '09:00 - 16:00' },
    { day: 'Lørdag - Søndag', time: 'Lukket' },
  ],
};

export const Icons = {
  Foot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v-2.38C4 11.5 5.81 10.5 8 10.5c.5 0 1 .1 1.5.3l4.5 2.2c1.3.6 2.7.9 4.1.9h1.9c0-1.1-.9-2-2-2h-1c-.5 0-1-.2-1.4-.5l-3.3-2.5c-.4-.3-.8-.5-1.3-.5h-2c-1.1 0-2 .9-2 2v2.3c0 .4.1.8.4 1.1l1.5 1.5c.2.2.3.5.3.7v3.4c0 .6.4 1 1 1s1-.4 1-1V17c0-.3-.1-.5-.3-.7l-1.1-1.1c-.2-.2-.3-.5-.3-.7v-1.5c0-.6.4-1 1-1h.5c.3 0 .5.1.7.3l3.3 2.5c.4.3 1 .5 1.5.5h1c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2h-1.9c-1.4 0-2.8-.3-4.1-.9l-4.5-2.2c-.5-.2-1-.3-1.5-.3-2.19 0-4 1-4 3.12V20"/><circle cx="12" cy="5" r="3"/></svg>
  ),
  Stethoscope: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z"/><path d="M10 22v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"/><path d="M10 14h4"/><path d="M11.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M12 10v4"/><path d="M16 22v-2a2 2 0 0 0-2-2h-2"/><path d="M20 10a4 4 0 0 0-4-4h-1"/><path d="M20 10v4a2 2 0 0 1-2 2h-2"/><path d="M21 3.1c.5 1.1.2 2.1-.4 3.2L18 10"/><path d="M4 10h1.5c.9 0 1.5-.3 2.1-.9L9.5 6"/><path d="M9 3.1c-.5 1.1-.2 2.1.4 3.2l2.6 3.7"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  MessageCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  ),
  // Updated Star component to accept an optional key prop for list rendering
  Star: ({ filled, color }: { filled?: boolean; color?: string; key?: React.Key }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? (color || "#FBBF24") : "none"} stroke={color || "#FBBF24"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
  ),
};

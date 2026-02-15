
import React from 'react';
import { 
  Smartphone, 
  Store, 
  ShoppingBag, 
  Cpu, 
  Building2, 
  CalendarDays, 
  Briefcase,
  Lock,
  Zap,
  Eye,
  Activity
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600',
    tag: 'RELIABILITY',
    caption: 'Advanced EAS anti-theft systems providing 24/7 technical oversight across major UAE retail hubs.',
    icon: <Lock className="text-infinity-red" size={24} />
  },
  {
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1600',
    tag: 'VISIBILITY',
    caption: 'High-definition enterprise CCTV systems integrated with AI-driven behavioral analytics.',
    icon: <Eye className="text-infinity-blue" size={24} />
  },
  {
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1600',
    tag: 'INTERACTION',
    caption: 'Premium open display security allowing customers to experience products with full confidence.',
    icon: <Activity className="text-infinity-azure" size={24} />
  }
];

export const CORE_VALUES = [
  {
    title: 'Precision Protection',
    description: 'Specialized EAS systems and AM/RF technologies providing invisible yet impenetrable security for retail environments.',
    icon: <Lock className="w-8 h-8 text-infinity-blue" />
  },
  {
    title: 'User Experience',
    description: 'Our open display solutions prioritize customer interaction, ensuring products remain accessible and perfectly secure.',
    icon: <Smartphone className="w-8 h-8 text-infinity-blue" />
  },
  {
    title: 'Expert Support',
    description: 'A dedicated team of professionals available 24/7 to ensure your security infrastructure never misses a beat.',
    icon: <Zap className="w-8 h-8 text-infinity-red" />
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'eas',
    title: 'EAS & Anti-Theft',
    description: 'Enterprise-grade loss prevention systems for high-traffic retail spaces across the Middle East.',
    items: [
      'AM & RF Pedestal Systems',
      'High-Security Hard Tags',
      'Adhesive RF/AM/DR Labels',
      'Electronic Spider Wraps',
      'Secure Keeper Boxes',
      'Display Hook Stop Locks',
      'Magnetic Tag Detachers'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'open',
    title: 'Open Display Security',
    description: 'Innovative interactive display solutions designed for electronics, mobiles, and luxury retail.',
    items: [
      'Mobile Phone Security Stands',
      'Tablet & iPad Display Kiosks',
      'Universal Laptop Security Locks',
      'DSLR Camera Display Holders',
      'Wearable Charging Stands',
      'Heavy-Duty Security Recoilers'
    ],
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'surveillance',
    title: 'Surveillance & Monitoring',
    description: 'Intelligent monitoring systems providing actionable business intelligence and complete visibility.',
    items: [
      'Enterprise IP CCTV Systems',
      'Stereoscopic People Counting',
      'RFID Inventory Management',
      'Loss Prevention Analytics'
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'digital',
    title: 'Digital Displays',
    description: 'Engaging visual experiences including 3D hologram technology and high-resolution LED solutions.',
    items: [
      'Ultra-HD Retail LED Screens',
      'High-Resolution 3D Hologram Fans',
      'Custom Acrylic Display Units',
      'Immersive Event Displays'
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
  }
];

export const INDUSTRIES = [
  { name: 'Retail Stores', icon: <Store className="w-8 h-8" /> },
  { name: 'Supermarkets', icon: <ShoppingBag className="w-8 h-8" /> },
  { name: 'Electronics', icon: <Cpu className="w-8 h-8" /> },
  { name: 'Offices', icon: <Building2 className="w-8 h-8" /> },
  { name: 'Events', icon: <CalendarDays className="w-8 h-8" /> },
  { name: 'SMEs', icon: <Briefcase className="w-8 h-8" /> },
];

export const STATS = [
  { label: 'Client Retention', value: '99', suffix: '%' },
  { label: 'Projects Completed', value: '500', suffix: '+' },
  { label: 'Regional Presence', value: '15', suffix: 'yr' },
  { label: 'Security Assets', value: '1k', suffix: '+' },
];

export const NEWS = [
  {
    title: 'Future-Proofing UAE Retail Stores',
    excerpt: 'Deep dive into the latest EAS trends shaping the landscape of Dubai Silicon Oasis retail corridors.',
    date: 'Feb 10, 2024',
    author: 'Tech Desk',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Open Display Revolution',
    excerpt: 'Analyzing why interactive retail experiences lead to 30% higher conversion rates in electronics stores.',
    date: 'Feb 05, 2024',
    author: 'Retail Analyst',
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '24/7 Support: Our Commitment',
    excerpt: 'How INFINITY Innovations ensures zero downtime for security systems across Abu Dhabi and Dubai.',
    date: 'Jan 28, 2024',
    author: 'Operations',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
  }
];

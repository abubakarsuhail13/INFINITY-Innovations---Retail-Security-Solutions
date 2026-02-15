
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
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600673881647-1558866ad131?auto=format&fit=crop&q=80&w=1200',
    tag: 'RELIABILITY',
    caption: 'Providing 24/7 technical oversight across major UAE shopping hubs.',
    icon: <Lock className="text-infinity-red" size={28} />
  },
  {
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200',
    tag: 'VISIBILITY',
    caption: 'Enterprise CCTV systems with AI-driven behavioral analytics.',
    icon: <Eye className="text-infinity-blue" size={28} />
  },
  {
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200',
    tag: 'INTERACTION',
    caption: 'Empowering customers with high-security open display solutions.',
    icon: <Activity className="text-infinity-azure" size={28} />
  }
];

export const CORE_VALUES = [
  {
    title: 'Precision Protection',
    description: 'We specialize in EAS anti-shoplifting systems and AM/RF technologies that provide invisible yet impenetrable security for your retail space.',
    icon: <Lock className="w-8 h-8 text-infinity-blue" />
  },
  {
    title: 'User Experience',
    description: 'Our open display solutions allow customers to experience products fully while staying 100% secure.',
    icon: <Smartphone className="w-8 h-8 text-infinity-blue" />
  },
  {
    title: '24/7 Commitment',
    description: 'B2B success depends on reliability. Our team is available round-the-clock for support across the Middle East.',
    icon: <Zap className="w-8 h-8 text-infinity-red" />
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'eas',
    title: 'EAS & Anti-Theft',
    description: 'Comprehensive loss prevention systems for high-traffic retail.',
    items: [
      'AM & RF Pedestal Systems',
      'Hard Tags (Pencil, Mini, Square)',
      'Soft Tags & Labels (RF/AM/DR)',
      'Spider Wraps for Boxed Goods',
      'Keeper Safer Boxes',
      'Stop Locks for Display Hooks',
      'Professional Tag Detachers'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'open',
    title: 'Open Display Security',
    description: 'Interactive display solutions for electronics and luxury items.',
    items: [
      'Smart Mobile Security Holders',
      'Tablet/iPad Security Stands & Kiosks',
      'Anti-Theft Laptop Locks',
      'Camera Security Displays',
      'Smartwatch Charging Stands',
      'Heavy-Duty Recoilers & Retractables'
    ],
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'surveillance',
    title: 'Surveillance & Analytics',
    description: 'Intelligent monitoring and business intelligence tools.',
    items: [
      'Industrial IP CCTV Systems',
      '3D Stereoscopic People Counting',
      'Enterprise RFID Inventory Systems',
      'Checkpoint Security Solutions'
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'digital',
    title: 'Digital & Retail Displays',
    description: 'Futuristic visual solutions to captivate your audience.',
    items: [
      'Ultra-HD LED Screens',
      '3D Hologram Fans (High-Res)',
      'Premium Acrylic Display Holders',
      'Custom Event Display Solutions'
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
  }
];

export const INDUSTRIES = [
  { name: 'Retail Stores', icon: <Store className="w-8 h-8" /> },
  { name: 'Supermarkets', icon: <ShoppingBag className="w-8 h-8" /> },
  { name: 'Electronics Stores', icon: <Cpu className="w-8 h-8" /> },
  { name: 'Corporate Offices', icon: <Building2 className="w-8 h-8" /> },
  { name: 'Event Companies', icon: <CalendarDays className="w-8 h-8" /> },
  { name: 'Small Businesses', icon: <Briefcase className="w-8 h-8" /> },
];

export const STATS = [
  { label: 'Customer Satisfaction', value: '99', suffix: '%' },
  { label: 'Successful Projects', value: '500', suffix: '+' },
  { label: 'Years in Region', value: '15', suffix: '+' },
  { label: 'SKU Inventory', value: '1000', suffix: '+' },
];

export const NEWS = [
  {
    title: 'Revolutionizing Retail Security in Dubai',
    excerpt: 'How INFINITY Innovations is transforming the retail landscape with next-gen anti-theft solutions in Silicon Oasis.',
    date: 'Jan 12, 2024',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'The Rise of Open Display Security',
    excerpt: 'Why allowing customers to touch and feel products is the future of electronics retail, and how to stay secure.',
    date: 'Feb 05, 2024',
    author: 'Security Expert',
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Scaling Tech Support Across the UAE',
    excerpt: 'Our commitment to 24/7 support reaches new heights with our expanded technical response team in Abu Dhabi.',
    date: 'Mar 20, 2024',
    author: 'Operations',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200'
  }
];

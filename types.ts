
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  name: string;
}

export interface ProductService {
  title: string;
  description: string;
  items: string[];
  icon: string;
}

// Updated icon type to React.ReactNode to accommodate Lucide components used in constants
export interface Industry {
  name: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

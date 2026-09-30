export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type NavItem = {
  label: string;
  href: string;
};

export type Program = {
  title: string;
  category: string;
  duration: string;
  description: string;
  outcomes: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type LeadFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

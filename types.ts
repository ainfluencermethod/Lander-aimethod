
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  earnings: string;
  content: string;
  timestamp: string;
  image?: string;
  video?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  value?: string;
}

export enum CheckoutStep {
  INFO = 'INFO',
  PAYMENT = 'PAYMENT'
}
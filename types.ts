
export interface VideoProject {
  id: string;
  title: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  category: 'highlight' | 'full' | 'teaser';
}

export interface Testimonial {
  id: string;
  couple: string;
  text: string;
  image: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

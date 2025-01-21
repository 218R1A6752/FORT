export interface Template {
  id: number;
  name: string;
  image: string;
  downloadUrl: string;
  description: string;
  featured: boolean;
  category: string;
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Executive Pro",
    image:"/Assets/images/modern_resume.png",
    downloadUrl: "/Assets/Documents/Modern_resume.docx",
    description: "Sophisticated design for senior professionals",
    featured: true,
    category: "Professional"
  },
  {
    id: 2,
    name: "Modern Impact",
    image: "/Assets/images/modern_impact.jpg",
    downloadUrl: "/Assets/Documents/Hybrid-Modern-Resume-Template-Blue.docx",
    description: "Contemporary layout with striking typography",
    featured: true,
    category: "Modern"
  },
  {
    id: 3,
    name: "Creative Edge",
    image: "/Assets/images/Creative_Edge.jpg",
    downloadUrl: "/Assets/Documents/Creative_Edge.docx",
    description: "Stand out with this bold yet professional design",
    featured: false,
    category: "Creative"
  },
  {
    id: 4,
    name: "Minimalist Pro",
    image: "/Assets/images/Resume_template.jpg",
    downloadUrl: "/Assets/Documents/Resume_template.docx",
    description: "Clean and elegant design for all professionals",
    featured: true,
    category: "Minimalist"
  },
  {
    id: 5,
    name: "Tech Innovator",
    image: "/Assets/images/Tech_Innovator.jpg",
    downloadUrl: "/Assets/Documents/Tech_Innovator.docx",
    description: "Perfect for IT and tech professionals",
    featured: false,
    category: "Technology"
  },
  {
    id: 6,
    name: "Graduate Essential",
    image: "/Assets/images/Graduate_essentials.jpg",
    downloadUrl: "/Assets/Documents/Graduate_essentials.docx",
    description: "Ideal for recent graduates and entry-level positions",
    featured: false,
    category: "Entry Level"
  },
  {
    id: 7,
    name: "Creative Portfolio",
    image: "/Assets/images/Creative_portfolio.jpg",
    downloadUrl: "/Assets/Documents/Creative_portfolio.docx",
    description: "Showcase your creative work with style",
    featured: false,
    category: "Creative"
  },
  {
    id: 8,
    name: "Executive Brief",
    image: "/Assets/images/Executive_Brief.jpg",
    downloadUrl: "/Assets/Documents/Executive_Brief.docx",
    description: "Concise and powerful format for executives",
    featured: true,
    category: "Professional"
  }
  
];
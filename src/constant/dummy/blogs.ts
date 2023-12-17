import { DUMMY_CATEGORIES } from './categories';
import { DUMMY_AUTHORS } from './authors';

export const DUMMY_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'Exploring the Latest Technologies',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'A deep dive into the world of technology.',
    author: DUMMY_AUTHORS[0],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: '2',
    title: 'Discovering Hidden Gems in Remote Lands',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Embark on a journey to unexplored destinations.',
    author: DUMMY_AUTHORS[1],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-02',
    updatedAt: '2023-01-02',
  },
  // Add 10 more blogs
  {
    id: '3',
    title: 'The Future of Artificial Intelligence',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Exploring the potential impact of AI on society.',
    author: DUMMY_AUTHORS[0],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-03',
    updatedAt: '2023-01-03',
  },
  {
    id: '4',
    title: 'Culinary Adventures Around the World',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Tasting exotic dishes from various cultures.',
    author: DUMMY_AUTHORS[1],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-04',
    updatedAt: '2023-01-04',
  },
  {
    id: '5',
    title: 'The Rise of Sustainable Technologies',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Examining eco-friendly solutions in technology.',
    author: DUMMY_AUTHORS[0],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-05',
    updatedAt: '2023-01-05',
  },
  {
    id: '6',
    title: 'Adventures in Virtual Reality',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Immersive experiences in the virtual world.',
    author: DUMMY_AUTHORS[1],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-06',
    updatedAt: '2023-01-06',
  },
  {
    id: '7',
    title: 'The Beauty of Nature Photography',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Capturing breathtaking moments in the great outdoors.',
    author: DUMMY_AUTHORS[0],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-07',
    updatedAt: '2023-01-07',
  },
  {
    id: '8',
    title: 'A Guide to Remote Work Success',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Tips for thriving in a remote work environment.',
    author: DUMMY_AUTHORS[1],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-08',
    updatedAt: '2023-01-08',
  },
  {
    id: '9',
    title: 'Exploring the Wonders of Space',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Journeying through the cosmos and beyond.',
    author: DUMMY_AUTHORS[0],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-09',
    updatedAt: '2023-01-09',
  },
  {
    id: '10',
    title: 'Cultural Festivals Around the Globe',
    thumbnail: 'https://source.unsplash.com/random',
    description: 'Celebrating diversity through festive traditions.',
    author: DUMMY_AUTHORS[1],
    categories: DUMMY_CATEGORIES.slice(0, Math.ceil(Math.random() * DUMMY_CATEGORIES.length - 1)),
    content: `
     <p>Welcome to our blog post on the latest technologies! In this article, we will take a closer look at the cutting-edge advancements shaping our future.</p>
      
      <h2>The Technological Landscape</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      
      <h2>Emerging Trends</h2>
      <p>Curabitur blandit tempus porttitor. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
      
      <h2>Impact on Society</h2>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.</p>
      
      <p>Stay tuned as we embark on this exciting journey through the realm of technology!</p>`,
    createdAt: '2023-01-10',
    updatedAt: '2023-01-10',
  },
];

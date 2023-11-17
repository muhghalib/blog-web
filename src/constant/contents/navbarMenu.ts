import { Facebook, Github, Instagram, Moon, Sun, Twitter } from 'lucide-react';

export const NAVBAR_MENU_ACCORDION_CONTENT = [
  {
    label: 'Company',
    children: [
      {
        label: 'About',
        url: '',
      },
      {
        label: 'History',
        url: '',
      },
      {
        label: 'Blog',
        url: '',
      },
      {
        label: 'Career',
        url: '',
      },
      {
        label: 'Contact us',
        url: '',
      },
      {
        label: 'Help center',
        url: '',
      },
      {
        label: 'Join us',
        url: '',
      },
    ],
  },
  {
    label: 'Legal',
    children: [
      {
        label: 'Terms of Use',
        url: '',
      },
      {
        label: 'Privacy Policy',
        url: '',
      },
      {
        label: 'Cookie Policy',
        url: '',
      },
    ],
  },
];

export const NAVBAR_MENU_SOCIAL = [
  {
    icon: Twitter,
    alt: 'twitter',
    url: '',
  },
  {
    icon: Facebook,
    alt: 'facebook',
    url: '',
  },
  {
    icon: Github,
    alt: 'github',
    url: '',
  },
  {
    icon: Instagram,
    alt: 'instagram',
    url: '',
  },
];

export const NAVBAR_MENU_THEME = [
  {
    icon: Sun,
    value: 'light',
  },
  {
    icon: Moon,
    value: 'dark',
  },
];

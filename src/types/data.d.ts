type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Author = {
  id: string;
  name: string;
  description: string;
  profileImg: string;
  profession: string;
  socialLink: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
  createdAt: string;
  updatedAt: string;
};

type Blog = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  author: Author;
  categories: Category[];
  content: string;
  createdAt: string;
  updatedAt: string;
};

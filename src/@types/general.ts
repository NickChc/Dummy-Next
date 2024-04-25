export interface TPost {
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  id: number;
  userId: number;
}

export interface TUser {
  id: number;
  username: string;
  image: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  birthDate: Date;
  email: string;
  phone: string;
  address: {
    city: string;
  };
}

export interface TComment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

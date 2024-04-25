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
  first_name: string;
  last_name: string;
}

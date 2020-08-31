export interface Iuser {
  createdAt?: Date;
  email?: string;
  fname: string;
  lname: string;
  password?: string;
  updatedAt?: Date;
  userName: string;
  __v?: number;
  _id?: string;
}

export interface Itoken {
  expiresIn: number;
  success: boolean;
  token: string;
  user: Iuser;
}

export type todoType = {
  id: string;
  text: string;
  note?: string | null;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
  plannedAt: Date | null;
};    

export type userType = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

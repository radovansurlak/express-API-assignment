export type UserRole = 'admin' | 'driver';

export interface User {
  username: string;
  password: string;
  role: UserRole;
}

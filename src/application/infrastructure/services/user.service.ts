import { Observable } from 'rxjs';

export interface UserService {
  getUser(data: { id: number }): Promise<Observable<any>>;
  createUser(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<Observable<any>>;
}

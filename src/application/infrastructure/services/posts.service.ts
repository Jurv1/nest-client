import { Observable } from 'rxjs';

export interface PostsService {
  getPosts(filter: string): Promise<Observable<any>>;
  getPost(id: number): Promise<Observable<any>>;
  createPost(name: string): Promise<Observable<any>>;
}

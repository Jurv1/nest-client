import { Observable } from 'rxjs';

export interface BlogService {
  getBlogs(filter: string): Promise<Observable<any>>;
  getBlog(id: number): Promise<Observable<any>>;
  createBlog(name: string): Promise<Observable<any>>;
}

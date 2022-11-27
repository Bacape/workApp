import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userUrl = 'https://jsonplaceholder.typicode.com/users';
  public postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  public commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.userUrl);
  }
  public getPosts(): Observable<any> {
    return this.httpClient.get(this.postsUrl);
  }
  public getCommnts(): Observable<any> {
    return this.httpClient.get(this.commentsUrl);
  }
}

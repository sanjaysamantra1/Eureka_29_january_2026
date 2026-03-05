import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  api_url = 'ttps://jsonplaceholder.typicode.com/comments';
  httpClient = inject(HttpClient);

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.api_url);
  }
}

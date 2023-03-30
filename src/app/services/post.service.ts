import { Injectable } from '@angular/core';
import { Post, Category } from '../PostInterface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:5000/posts"
  private categoryUrl = "http://localhost:5000/categories"

  constructor(private http:HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.categoryUrl)
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    const url = `${this.apiUrl}?category=${category}`;
    return this.http.get<Post[]>(url);
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post, httpOptions)
  }

  deletePost(post: Post): Observable<Post>{
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.delete<Post>(url)
  }
}

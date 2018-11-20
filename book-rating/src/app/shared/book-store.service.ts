import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private service: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.service.get<Book[]>('https://api.angular.schule/books');
  }
}

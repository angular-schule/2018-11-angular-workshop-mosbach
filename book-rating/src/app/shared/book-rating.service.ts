import { Injectable } from '@angular/core';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookRatingService {
  rateDown(book: Book): any {
    throw new Error('Method not implemented.');
  }
  rateUp(book: Book): any {
    throw new Error('Method not implemented.');
  }
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(public service: BookStoreService) { }

  // LÖSUNG A
  replaceAndSort(newBook: Book) {
    const index = this.books.findIndex(
      book => book.isbn === newBook.isbn
    );

    if (index !== -1) {
      this.books[index] = newBook;
    }

    this.books.sort((a, b) => b.rating - a.rating);
  }

  // LÖSUNG B
  replaceAndSort2(newBook: Book) {
    this.books = this.books
      .map(b => b.isbn === newBook.isbn ? newBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  ngOnInit() {
    this.service.getAllBooks()
      .subscribe(books => this.books = books);
  }

}

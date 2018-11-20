import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

import { map, switchMap, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Observable<Book>;

  constructor(private route: ActivatedRoute, private service: BookStoreService) { }

  ngOnInit() {
    this.book = this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      switchMap(isbn => this.service.getSingleBook(isbn)),
      retry(3)
    );
  }
}

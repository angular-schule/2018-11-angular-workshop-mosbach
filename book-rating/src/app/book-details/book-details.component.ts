import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book; // TODO: implement me!

  constructor(private route: ActivatedRoute, private service: BookStoreService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.isbn = params.get('isbn');
        this.service.getSingleBook(this.isbn)
          .subscribe(book => this.book = book);
      }
    );
  }

}

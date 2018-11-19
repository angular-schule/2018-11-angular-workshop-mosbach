import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [{
      isbn: '00',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '11',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 1
    }, {
      isbn: '22',
      title: 'React',
      description: 'anderes Framework, auch toll',
      rating: 2
    }];
  }

}

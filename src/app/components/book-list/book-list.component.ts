import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.listBooks();
  }


  listBooks() {
    this.bookService.getBooks().subscribe(data => {
      console.log(data);
      this.books = data;
    })
  }
}

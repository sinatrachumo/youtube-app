import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css'],
})
export class SimpleHttpComponent implements OnInit {
  data!: object;
  loading?: boolean;
  // http: HttpClient;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {}

  makeRequest(): void {
    //defines the method with return type void
    this.loading = true; //sets loading to true
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1') //sends get request to URL
      .subscribe((data) => {
        this.data = data; //assigns callback data to the data property
        this.loading = false; //sets the loading to false
      });
  }
}

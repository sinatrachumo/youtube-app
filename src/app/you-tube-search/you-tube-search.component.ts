import { Component, OnInit } from '@angular/core';
import { SearchResult } from './models/search-result.model';
@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css'],
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[] = [];
  loading: boolean | any;

  constructor() {}
  ngOnInit() {}

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log('results:', this.results);
  }
}

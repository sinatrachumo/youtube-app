import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { SearchResult } from '../../models/search-result.model';
import { YouTubeSearchService } from '../../services/you-tube-search.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent, pipe } from 'rxjs';
import { tap, map, filter, debounceTime, switchAll } from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus />
  `,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(
    private youtubeSearchService: YouTubeSearchService,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      //convert 'keyup' event into observable stream
      // .map((e: any) => e.target.value) //extract value of input

      // .filter((text: string) => text.length > 1)
      //filter out if empty
      // .debounceTime(250)
      // .do(() => this.loading.emit(true)) //enable loading
      // .map((query: string) => this.youtube.search(query))
      // .switch() //act on return of search
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        //map((query: string) => this.youtube.search(query))
        // switchMap((query: string) => this.youtube.search(query))
        map((query: string) => this.youtubeSearchService.search(query)),
        switchAll()
      )
      .subscribe(
        (results: SearchResult[]) => {
          // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          // on completion
          this.loading.emit(false);
        }
      );
  }
}

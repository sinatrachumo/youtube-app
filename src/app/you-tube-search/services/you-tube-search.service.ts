import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from '../../../../node_modules/rxjs/operators';
import { map } from '../../../../node_modules/rxjs/operators';
//this.myObservable().pipe(map((data) => {}));
import { SearchResult } from '../models/search-result.model';

export const YOUTUBE_API_KEY = 'AIzaSyC8Xj0WDytuob1R6mVDIKqAwmVNAyjfXMs';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

// interface Item {
//   id: any;
//   title: any;
//   descriptions: any;
//   thumbnailUrl: any;
// }
// interface SearchResponse {
//   items: Array<Item>[];
// }
@Injectable()
export class YouTubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      //constructs string params that constructs query url
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&'); //The join method is used to concatenate these parameters into a single string separated by "&" characters.
    const queryUrl: string = `${this.apiUrl}?${params}`; //This line constructs the full query URL by concatenating the YouTube API URL and the params string.

    return this.http.get(queryUrl).pipe(
      //This line sends an HTTP GET request to the query URL using the Angular HttpClient and returns an Observable.
      map(
        (
          response: any //{
        ) =>
          //   //This line uses the map operator to transform the HTTP response object to an array of SearchResult objects
          //   const items = response['items']; //extracts items array from the response object
          //   return items.map((item: any) => {
          //     //This line uses the map operator to transform each item in items array to new SearchResult object
          //     // console.log("raw item", item); // uncomment if you want to debug
          //     return new SearchResult({
          //       id: item.id.videoId,
          //       title: item.snippet.title,
          //       description: item.snippet.description,
          //       thumbnailUrl: item.snippet.thumbnails.high.url,
          //     });
          //   });
          // }
          {
            return <any>response['items'].map(
              (item: {
                id: { videoId: any };
                snippet: {
                  title: any;
                  description: any;
                  thumbnails: { high: { url: any } };
                };
              }) => {
                return new SearchResult({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  description: item.snippet.description,
                  thumbnailUrl: item.snippet.thumbnails.high.url,
                });
              }
            );
          }
      )
    );
  }
}

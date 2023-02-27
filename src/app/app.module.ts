import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/components/search-result/search-result.component';
import { SearchBoxComponent } from './you-tube-search/components/search-box/search-box.component';
import { youTubeSearchInjectables } from './you-tube-search/inject/you-tube-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent],
})
export class AppModule {}
class MyFooComponent {
  constructor(public http: HttpClient) {}
  makeRequest(): void {
    // do something with this.http ...
  }
  // class HttpAppModule {

  // }
}

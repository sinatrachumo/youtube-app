import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './you-tube-search/components/search-box/search-box.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, YouTubeSearchComponent, SearchBoxComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'youtube-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('youtube-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'youtube-app app is running!'
    );
  });
});

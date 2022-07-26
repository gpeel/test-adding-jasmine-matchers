import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('LABELS array', () => {
    const LABELS = [ 'what', 'is', 'this']
    expect(LABELS)
      // .toEqual(LABELS); // deep equal
      .toBeArray(LABELS);
  });




});

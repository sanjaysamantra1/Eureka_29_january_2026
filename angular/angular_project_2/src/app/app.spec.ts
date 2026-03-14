import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeAll(() => {
    console.log('Before All');
  });

  beforeEach(async () => {
    console.log('Before Each');
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });
  afterEach(() => {
    console.log('After Each');
  });

  afterAll(() => {
    console.log('After All');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    console.log('It-1');
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_2');
    console.log('It-2');
  });

  it('it should verify addition function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.addition(10, 20)).toBe(30);
    expect(app.addition(10, -20)).toBe(-10);
    expect(app.addition(-10, -20)).toBe(-30);
    expect(app.addition(-10, 20)).toBe(10);
    console.log('It-3');
  });
});
